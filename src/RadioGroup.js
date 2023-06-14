import "./RadioGroup.css";

function RadioGroup({ names, displayOrder, handleChange, className = "" }) {
  return (
    <form className={`radio-group ${className}`}>
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
