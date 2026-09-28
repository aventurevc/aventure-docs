// The aVenture iOS app draws a native back button over pushed web views and
// announces it with this exact User-Agent product token (mobile/iosApp
// WebViewContainer.applicationNameForUserAgent). aventure.vc reads the same
// token; styles.css reserves the button's space under this attribute.
if (navigator.userAgent.split(/\s+/).includes("aVentureIOSBack/1.0")) {
  document.documentElement.dataset.nativeBackButton = "true";
}
