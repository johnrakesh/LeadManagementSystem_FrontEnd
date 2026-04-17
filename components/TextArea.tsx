interface TextAreaProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export default function TextArea({
  label,
  value,
  onChange,
}: TextAreaProps) {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border rounded"
      />
    </div>
  );
}