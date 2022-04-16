interface Iprops {
    label: string,
    onChange: (value: string) => void,
    placeholder?: string,
    value: string
}

function Input({
  label, onChange, placeholder, value,
}: Iprops) {
  return (
    <div className="input-group mb-3">
      <input
        value={value}
        onChange={(value) => onChange(value.currentTarget.value)}
        type="text"
        className="form-control form-control-lg"
        placeholder={placeholder}
      />
      <span
        className="input-group-text input-group-text-lg"
        id="basic-addon2"
      >
        {label}
      </span>
    </div>
  );
}

export default Input;
