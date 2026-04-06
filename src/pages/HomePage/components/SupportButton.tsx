type SupportButtonProps = {
  onClick: () => void;
};

export default function SupportButton({ onClick }: SupportButtonProps) {
  return (
    <button
      type="button"
      className="contact-customer-service"
      aria-label="Open customer support"
      onClick={onClick}
    >
      <i
        className="bi bi-question-circle-fill"
        aria-hidden="true"
        style={{ fontSize: '26px', color: '#ffffff', display: 'block', lineHeight: 1 }}
      ></i>
    </button>
  );
}
