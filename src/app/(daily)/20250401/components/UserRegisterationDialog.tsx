interface UserRegisterationDialogProps {
  isOpen: boolean;
  userName: string;
  text: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function UserRegistrationDialog({
  isOpen,
  userName,
  onConfirm,
  onCancel,
  text,
}: UserRegisterationDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="dialog">
      <h2>Register User</h2>
      <p>Please enter your name:</p>
      <input type="text" value={userName} readOnly />
      <button onClick={onConfirm}>Confirm</button>
      <button onClick={onCancel}>Cancel</button>
      <input type="text" defaultValue={text} style={{ color: "red" }} />
    </div>
  );
}
