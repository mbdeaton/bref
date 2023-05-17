import "./RefCell.css";

function RefCell({ braille, english }) {
  return (
    <div className="ref-cell">
      <p className="braille">{braille}</p>
      <p className="english">{english}</p>
    </div>
  );
}

export default RefCell;
