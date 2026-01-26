document.addEventListener("DOMContentLoaded", () => {
  const mainDownloadButton = document.getElementById("download-button");
  const triggerButton = document.getElementById("download-button-trigger");
  const popup = document.getElementById("popupOverlay");

  if (!mainDownloadButton || !popup) return;

  // Main download logic
  const handleDownload = () => {
    if (isIOS()) {
      window.location.href = IOS_APP_URL;
    } else {
      popup.style.display = "flex";
    }
  };

  mainDownloadButton.addEventListener("click", handleDownload);

  // Secondary trigger → reuse same logic
  if (triggerButton) {
    triggerButton.addEventListener("click", handleDownload);
  }

  // Close popup when clicking outside content
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});
