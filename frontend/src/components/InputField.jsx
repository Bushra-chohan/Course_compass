const InputField = ({ type = "text", value, onChange, placeholder, disabled }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`w-full border-2 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200 transition ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}`}
    />
  );
};

export default InputField;
