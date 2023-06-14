import br from "./braille";
import orderings from "./orderings.json";
import RefCell from "./RefCell";
import "./RefTable.css";

function RefTable({ displayOrder, dotFilter, handleClick, className = "" }) {
  const cellOrder = orderings[displayOrder];

  return (
    <div
      className={`ref-table ${className}`}
      style={{
        gridTemplateColumns: `repeat(${cellOrder.ncol}, minmax(0, 1fr))`,
      }}
    >
      {cellOrder.seq.map((codepoint, i) => (
        <RefCell
          key={codepoint ?? 100 + i} /* index null cells > 100 */
          style={{
            backgroundColor: codepoint === null ? "transparent" : "",
            opacity: (dotFilter & codepoint) === dotFilter ? "100%" : "40%",
          }}
          braille={br.brailleCells[codepoint]?.braille ?? undefined}
          english={br.brailleCells[codepoint]?.english ?? undefined}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

export default RefTable;
