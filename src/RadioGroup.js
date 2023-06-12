import "./RadioGroup.css";

function RadioGroup({
  names,
  handleChange,
  displayOrder,
  className,
  ...props
}) {
  return (
    <form className={`radio-group ${className}`} {...props}>
      {names.map((name) => (
        <label key={name}>
          <input
            type="radio"
            name="display"
            value={name}
            onChange={handleChange}
            checked={name === displayOrder}
          />
          <span>{name}</span>
        </label>
      ))}
    </form>
  );
}

export default RadioGroup;
