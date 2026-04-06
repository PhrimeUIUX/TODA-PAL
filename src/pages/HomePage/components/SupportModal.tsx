import { PRIMARY_SUPPORT_CONTACT, SUPPORT_CONTACTS } from '../data';

type SupportModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SupportModal({ isOpen, onClose }: SupportModalProps) {
  return (
    <div
      id="supportOverlay"
      className={`support-overlay ${isOpen ? '' : 'hidden'}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="support-modal-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="support-modal">
        <div className="support-header">
          <h2 id="support-modal-title">Customer Support</h2>
          <p>Select an admin to call</p>
          <button
            type="button"
            className="glass-close-button glass-close-button-danger support-close-button"
            aria-label="Close support modal"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        <a href={`tel:${PRIMARY_SUPPORT_CONTACT.tel}`} id="jonathanorbiso" className="support-card primary">
          <div className="badge">Recommended</div>
          <h3>{PRIMARY_SUPPORT_CONTACT.name}</h3>
          <span className="number">{PRIMARY_SUPPORT_CONTACT.phone}</span>
          <small>{PRIMARY_SUPPORT_CONTACT.description}</small>
        </a>

        <div className="support-list">
          {SUPPORT_CONTACTS.map((contact) => (
            <a key={`${contact.tel}-${contact.name}`} href={`tel:${contact.tel}`} className="support-card">
              <h4>{contact.name}</h4>
              <span>{contact.phone}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
