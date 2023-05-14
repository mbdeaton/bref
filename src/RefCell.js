import br from "./braille";
import "./RefCell.css";

function RefCell({ char }) {
  return (
    <div className="ref-cell">
      <p className="braille">{br.singleToBraille(char)}</p>
      <p className="english">{char}</p>
    </div>
  );
}

export default RefCell;
