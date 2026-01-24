document.addEventListener("DOMContentLoaded", () => {
  const mainDownloadButton = document.getElementById("download-button");
  const triggerButton = document.getElementById("download-button-trigger");
  const popup = document.getElementById("popupOverlay");

  if (!mainDownloadButton || !popup) return;

  // Main button logic (already yours)
  mainDownloadButton.addEventListener("click", () => {
    if (isIOS()) {
      window.location.href = IOS_APP_URL;
    } else {
      popup.style.display = "flex";
    }
  });

  // 🔁 Trigger button → clicks main button
  if (triggerButton) {
    triggerButton.addEventListener("click", () => {
      mainDownloadButton.click();
    });
  }

  // Close popup when clicking overlay
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});
