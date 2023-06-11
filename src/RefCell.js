import "./RefCell.css";

function RefCell({ handleClick, braille, english, ...props }) {
  return (
    <button
      className="ref-cell"
      value={braille}
      onClick={() => handleClick(braille)}
      {...props}
    >
      <p className="braille">{braille}</p>
      <p className="english">{english}</p>
    </button>
  );
}

export default RefCell;
