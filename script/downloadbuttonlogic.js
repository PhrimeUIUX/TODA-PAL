// ✅ Hard-coded latest APK (no API dependency)
const LATEST_APK_URL =
  "https://storage.googleapis.com/ppctoda_website/ppctoda_apk/ppctoda_v1.0.28(48).apk";

// ✅ iOS App Store link
const IOS_APP_URL = "https://apps.apple.com/us/app/ppc-toda/id6743928831";

function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

function answer(choice) {
  const popup = document.getElementById("popupOverlay");

  if (choice === "yes") {
    window.location.href = LATEST_APK_URL;
  } else {
    window.location.href = "https://ppc-toda.vercel.app/download";
  }

  popup.style.display = "none";
}

// ===== EVENTS =====
document.addEventListener("DOMContentLoaded", () => {
  const downloadButton = document.getElementById("download-button");
  const popup = document.getElementById("popupOverlay");

  downloadButton.addEventListener("click", () => {
    if (isIOS()) {
      // 🍎 Redirect directly to iOS App Store
      window.location.href = IOS_APP_URL;
    } else {
      // 🤖 Show popup for Android download options
      popup.style.display = "flex";
    }
  });

  // 💨 Allow closing popup when clicking outside of its content
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});
