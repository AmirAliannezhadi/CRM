function FormInput({ name, label, type, value, onchange }) {
  return (
    <div className="form-input">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onchange={onchange}
      />
    </div>
  );
}

export default FormInput;
