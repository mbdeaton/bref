import "./RefCell.css";

function RefCell({ braille, english, ...props }) {
  return (
    <button className="ref-cell" value={braille} {...props}>
      <p className="braille">{braille}</p>
      <p className="english">{english}</p>
    </button>
  );
}

export default RefCell;
