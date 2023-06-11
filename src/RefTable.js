import br from "./braille";
import orderings from "./orderings.json";
import RefCell from "./RefCell";
import "./RefTable.css";

function RefTable({ displayOrder }) {
  function handleClick(event) {
    // if (event.target.value !== undefined) {
    console.log(`clicked ${event.target.value}`);
    // }
  }

  const cellOrder = orderings[displayOrder];

  return (
    <div
      className="ref-table"
      style={{
        gridTemplateColumns: `repeat(${cellOrder.ncol}, minmax(0, 1fr))`,
      }}
    >
      {cellOrder.seq.map((codepoint, i) => (
        <RefCell
          key={codepoint ?? 100 + i} /* index null cells > 100 */
          i={i}
          style={{
            backgroundColor: codepoint === null ? "transparent" : "",
          }}
          braille={br.brailleCells[codepoint]?.braille ?? undefined}
          english={br.brailleCells[codepoint]?.english ?? undefined}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}

export default RefTable;
