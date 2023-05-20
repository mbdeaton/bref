import br from "./braille";
import RefCell from "./RefCell";
import "./RefTable.css";

function RefTable({ displayOrder }) {
  return (
    <div
      className="ref-table"
      style={{
        gridTemplateColumns: `repeat(${displayOrder.ncol}, minmax(0, 1fr))`,
      }}
    >
      {displayOrder.seq.map((cp, i) => (
        <RefCell
          key={cp ?? 100 + i}
          i={i}
          braille={br.brailleCells[cp]?.braille ?? ""}
          english={br.brailleCells[cp]?.english ?? ""}
        />
      ))}
    </div>
  );
}

export default RefTable;
