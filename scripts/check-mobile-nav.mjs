// Verify phone navigation on a published Fern site.
//   node check-mobile-nav.mjs <site-base-url>
// Runs from a directory where `playwright` is installed (see the workflows).
// For each page, on iPhone (WebKit) and Android (Chromium) emulation: load it,
// reload it from cache, wait for the header island to hydrate, then require
// the menu button, a working menu, and no uncaught page error.
// The reload matters: a hydration error in Fern's header unmounted the whole
// header only once styles were cached, so a single cold load passed.
import { chromium, devices, webkit } from "playwright";

const base = (process.argv[2] ?? "").replace(/\/$/, "");
if (!base) {
  console.error("usage: node check-mobile-nav.mjs <site-base-url>");
  process.exit(2);
}

const PAGES = ["/welcome", "/quickstart", "/api-reference"];
const TARGETS = [
  { engine: webkit, device: "iPhone 15" },
  { engine: chromium, device: "Pixel 7" },
];
const TIMEOUT_MS = 20_000;

async function checkPage(context, path) {
  const page = await context.newPage();
  const pageErrors = [];
  page.on("pageerror", (error) => pageErrors.push(error.message));
  await page.goto(base + path, { waitUntil: "load", timeout: TIMEOUT_MS });
  await page.reload({ waitUntil: "load", timeout: TIMEOUT_MS });
  // Server-rendered markup already holds the button; only hydration proves it
  // survives. Astro drops the `ssr` attribute once an island hydrates.
  await page.waitForSelector('astro-island[component-url*="HeaderContentIsland"]:not([ssr])', {
    state: "attached",
    timeout: TIMEOUT_MS,
  });
  await page.waitForTimeout(1_000);
  const menuButton = page.getByRole("button", { name: "Open menu" });
  await menuButton.waitFor({ state: "visible", timeout: TIMEOUT_MS });
  await menuButton.tap();
  await page
    .locator("#fern-sidebar-mobile-scroll-area a[href]:visible")
    .first()
    .waitFor({ state: "visible", timeout: TIMEOUT_MS });
  await page.close();
  if (pageErrors.length > 0) throw new Error(`uncaught page errors: ${pageErrors.join("; ")}`);
}

let failures = 0;
for (const { engine, device } of TARGETS) {
  const browser = await engine.launch();
  const context = await browser.newContext({ ...devices[device] });
  for (const path of PAGES) {
    // One retry absorbs a network blip; the header defect this guards against
    // reproduced on every cached reload, so it still fails both attempts.
    let lastError;
    for (let attempt = 1; attempt <= 2 && lastError !== null; attempt += 1) {
      try {
        await checkPage(context, path);
        lastError = null;
      } catch (error) {
        lastError = error;
        console.log(`attempt ${attempt} ${device} ${path}: ${error.message.split("\n")[0]}`);
      }
    }
    if (lastError === null) {
      console.log(`ok   ${device} ${path}`);
    } else {
      failures += 1;
      console.log(`FAIL ${device} ${path}`);
    }
  }
  await browser.close();
}
console.log(failures === 0 ? "RESULT=PASS" : `RESULT=FAIL (${failures})`);
process.exit(failures === 0 ? 0 : 1);
