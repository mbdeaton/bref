import "./RefCell.css";

function RefCell({ i, braille, english }) {
  return (
    <div className="ref-cell">
      <p className="braille">{braille}</p>
      <p className="english">{english}</p>
      <p style={{ color: "darkgray" }}>{braille.codePointAt(0) - 10240}</p>
    </div>
  );
}

export default RefCell;
