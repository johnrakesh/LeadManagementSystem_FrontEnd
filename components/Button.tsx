interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({ label, onClick, disabled }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`cta-button ${disabled ? "cta-button--disabled" : ""}`}
    >
      {label}
    </button>
  );
}