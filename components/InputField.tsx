
interface InputFieldProps {
  label: string;
  value: string;
  required?: boolean;
  type?: string;
  onChange: (value: string) => void;
}


interface InputFieldProps {
  label: string;
  value: string;
  required?: boolean;
  type?: string;
  onChange: (value: string) => void;
}

export default function InputField({
  label,
  value,
  onChange,
  required,
  type = "text",
}: InputFieldProps) {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">{label}</label>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border rounded"
      />
    </div>
  );
}