function RadioGroup({ names, handleChange, displayOrder, ...props }) {
  return (
    <form onChange={handleChange} {...props}>
      {names.map((name) => (
        <label key={name}>
          <input
            type="radio"
            name="display"
            value={name}
            checked={name === displayOrder}
          />
          <span>{name}</span>
        </label>
      ))}
    </form>
  );
}

export default RadioGroup;
