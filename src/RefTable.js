import br from "./braille";
import RefCell from "./RefCell";
import "./RefTable.css";

function RefTable() {
  const codepoints = [...Array(64).keys()];
  return (
    <div className="ref-table">
      {codepoints.map((cp) => (
        <RefCell
          key={cp}
          braille={br.brailleCells[cp].braille}
          english={br.brailleCells[cp].english}
        />
      ))}
    </div>
  );
}

export default RefTable;
