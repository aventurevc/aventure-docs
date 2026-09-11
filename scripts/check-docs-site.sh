#!/usr/bin/env bash
# Verify a published Fern site against the checked-in OpenAPI input.
#   scripts/check-docs-site.sh <site-base-url>
# 1. The custom root <site>/llms.txt is byte-identical to fern/llms.txt.
# 2. Every operation in openapi/openapi.json has exactly one reference page in
#    <site>/api-reference/llms.txt, and each page's Markdown declares the
#    expected METHOD and path (a missing page returns a 200 "similar pages"
#    stub, so status codes prove nothing).
# 3. The immutable OpenAPI artifact linked from the API overview page is
#    byte-identical to the checked-in input.
# 4. The Fern-managed <site>/openapi.json still lists every operation.
# Requires cmp, curl, jq, shasum. Exit 1 on any discrepancy.
set -euo pipefail

BASE="${1:?usage: $0 <site-base-url>}"
BASE="${BASE%/}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SPEC="$ROOT/openapi/openapi.json"
ROOT_LLMS="$ROOT/fern/llms.txt"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
CURL=(curl -fsSL --retry 3 --retry-delay 2 --retry-all-errors --max-time 30)

ops_of() { # spec file -> sorted "METHOD /path" lines
  jq -r '.paths | to_entries[] | .key as $p | .value | keys[]
         | select(IN("get","post","put","patch","delete","head","options","trace"))
         | ascii_upcase + " " + $p' "$1" | sort
}
ops_of "$SPEC" > "$TMP/expected"
fail=0

# --- 1. custom root llms.txt -----------------------------------------------
"${CURL[@]}" "$BASE/llms.txt" > "$TMP/root-llms.txt"
if cmp -s "$ROOT_LLMS" "$TMP/root-llms.txt"; then
  echo custom_root_llms_identical=true
else
  echo custom_root_llms_identical=false
  fail=1
fi

# --- 2. generated API llms.txt operation pages -----------------------------
"${CURL[@]}" "$BASE/api-reference/llms.txt" > "$TMP/llms.txt"
# Operation lines look like: "- <API> > <Section> [Title](https://host/.../slug.md)"
grep -oE '^- [^[]+ > [^[]+\[[^]]*\]\([^)]+\.md\)' "$TMP/llms.txt" \
  | sed -E 's/.*\(([^)]+)\)$/\1/' > "$TMP/pages" || true
[ -s "$TMP/pages" ] || { echo "llms_operation_pages=0 (empty llms.txt or changed line format)"; echo RESULT=FAIL; exit 1; }
: > "$TMP/found"
: > "$TMP/unparsed"
while read -r url; do
  "${CURL[@]}" "$url" -o "$TMP/page.md" || : > "$TMP/page.md"
  line="$(grep -m1 -oE '^(GET|POST|PUT|PATCH|DELETE|HEAD|OPTIONS|TRACE) https?://[^ ]+' "$TMP/page.md" || true)"
  if [ -z "$line" ]; then echo "$url" >> "$TMP/unparsed"; continue; fi
  method="${line%% *}"; full="${line#* }"
  path="/${full#*://*/}"
  echo "$method $path	$url" >> "$TMP/found"
done < "$TMP/pages"
cut -f1 "$TMP/found" | sort > "$TMP/found_ops"
comm -23 "$TMP/expected" <(sort -u "$TMP/found_ops") > "$TMP/missing"
comm -13 "$TMP/expected" <(sort -u "$TMP/found_ops") > "$TMP/extra"
uniq -d "$TMP/found_ops" > "$TMP/dup"

report() { # label file
  local n; n=$(wc -l < "$2" | tr -d ' ')
  printf '%s=%s\n' "$1" "$n"
  if [ "$n" -gt 0 ]; then sed 's/^/  /' "$2"; fail=1; fi
}
printf 'spec_operations=%s\nllms_operation_pages=%s\n' "$(wc -l < "$TMP/expected" | tr -d ' ')" "$(wc -l < "$TMP/pages" | tr -d ' ')"
report missing_pages "$TMP/missing"
report extra_pages "$TMP/extra"
report duplicate_pages "$TMP/dup"
report unparsed_pages "$TMP/unparsed"

# --- 3. immutable artifact linked from the API overview page ---------------
# Publication pins the Download to the immutable public API commit.
artifact_url="$("${CURL[@]}" "$BASE/api-reference" | grep -oE 'https://raw\.githubusercontent\.com/aventurevc/aventure-docs/[0-9a-f]{40}/openapi/openapi\.json' | head -n1 || true)"
if [ -z "$artifact_url" ]; then
  echo "artifact_link=missing"; fail=1
else
  "${CURL[@]}" "$artifact_url" -o "$TMP/artifact.json"
  want="$(shasum -a 256 "$SPEC" | cut -d' ' -f1)"
  got="$(shasum -a 256 "$TMP/artifact.json" | cut -d' ' -f1)"
  printf 'artifact_url=%s\nartifact_sha256=%s\nexpected_sha256=%s\n' "${artifact_url%%\?*}" "$got" "$want"
  if [ "$want" = "$got" ]; then echo artifact_identical=true; else echo artifact_identical=false; fail=1; fi
fi

# --- 4. Fern-managed spec still carries every operation --------------------
"${CURL[@]}" "$BASE/openapi.json" > "$TMP/managed.json"
ops_of "$TMP/managed.json" > "$TMP/managed_ops"
printf 'managed_version=%s\nmanaged_operations=%s\n' "$(jq -r .info.version "$TMP/managed.json")" "$(wc -l < "$TMP/managed_ops" | tr -d ' ')"
comm -23 "$TMP/expected" "$TMP/managed_ops" > "$TMP/managed_missing"
report managed_missing_operations "$TMP/managed_missing"
comm -13 "$TMP/expected" "$TMP/managed_ops" > "$TMP/managed_extra"
report managed_extra_operations "$TMP/managed_extra"

if [ "$fail" -eq 0 ]; then echo RESULT=PASS; else echo RESULT=FAIL; fi
exit "$fail"
