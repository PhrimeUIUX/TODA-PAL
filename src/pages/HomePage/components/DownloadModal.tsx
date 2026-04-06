type DownloadModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onChoose: (choice: 'apk' | 'fast') => void;
};

export default function DownloadModal({ isOpen, onClose, onChoose }: DownloadModalProps) {
  return (
    <div
      className="overlay"
      id="popupOverlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="download-modal-title"
      style={{ display: isOpen ? 'flex' : 'none' }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="popup">
        <div className="popup-icon">
          <i
            className="bi bi-question-circle-fill"
            aria-hidden="true"
            style={{ fontSize: '34px', color: '#ffffff', display: 'block', lineHeight: 1 }}
          ></i>
        </div>

        <h2 id="download-modal-title">Pumili ng download option</h2>
        <p>Para sa mas mabilis na pag install.</p>

        <div id="answerButtonContainer">
          <button
            type="button"
            className="yes"
            aria-label="Download APK"
            onClick={() => onChoose('apk')}
          >
            <img src="/assets/android_2_fill.png" alt="" width="18" height="18" />
            APK
          </button>

          <button
            type="button"
            className="no"
            aria-label="Fast download"
            onClick={() => onChoose('fast')}
          >
            <img src="/assets/flash_fill.png" alt="" width="18" height="18" />
            Fast
          </button>
        </div>
      </div>
    </div>
  );
}
