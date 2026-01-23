// ================================
// CONSTANTS
// ================================
const LATEST_APK_URL =
  "https://storage.googleapis.com/ppctoda_website/ppctoda_apk/ppctoda_v1.0.28(48).apk";

const FAST_DOWNLOAD_URL =
  "https://ppc-toda.vercel.app/download";

const IOS_APP_URL =
  "https://apps.apple.com/us/app/ppc-toda/id6743928831";

// ================================
// PLATFORM CHECK
// ================================
function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
}

// ================================
// DOWNLOAD HANDLER
// ================================
function answer(choice) {
  const popup = document.getElementById("popupOverlay");

  if (choice === "apk") {
    // ✅ Force APK download
    const link = document.createElement("a");
    link.href = LATEST_APK_URL;
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  if (choice === "fast") {
    // 🚀 Fast / store / CDN download
    window.location.href = FAST_DOWNLOAD_URL;
  }

  // Close popup
  popup.style.display = "none";
}

// ================================
// EVENTS
// ================================
document.addEventListener("DOMContentLoaded", () => {
  const downloadButton = document.getElementById("download-button");
  const popup = document.getElementById("popupOverlay");

  if (!downloadButton || !popup) return;

  downloadButton.addEventListener("click", () => {
    if (isIOS()) {
      // 🍎 iOS → App Store
      window.location.href = IOS_APP_URL;
    } else {
      // 🤖 Android → choose method
      popup.style.display = "flex";
    }
  });

  // Close popup when clicking overlay
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});
