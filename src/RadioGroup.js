import "./RadioGroup.css";

function RadioGroup({ names, handleChange, displayOrder, ...props }) {
  return (
    <form className="radio-group" {...props}>
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
