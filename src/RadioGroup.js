function RadioGroup({ names, ...props }) {
  return (
    <form {...props}>
      {names.map((name) => (
        <label key={name}>
          <input type="radio" name="display" value={name} />
          <span>{name}</span>
        </label>
      ))}
    </form>
  );
}

export default RadioGroup;
