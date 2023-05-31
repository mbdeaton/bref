import "./RefCell.css";

function RefCell({ braille, english, ...props }) {
  return (
    <div className="ref-cell" {...props}>
      <p className="braille">{braille}</p>
      <p className="english">{english}</p>
    </div>
  );
}

export default RefCell;
