import "./RefCell.css";

function RefCell({ braille, english, handleClick, className = "", ...props }) {
  return (
    <button
      className={`ref-cell ${className}`}
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
