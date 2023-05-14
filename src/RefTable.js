import RefCell from "./RefCell";
import "./RefTable.css";

function RefTable() {
  const chars = "abcdefghijklmnopqrstuvxyz";
  return (
    <div className="ref-table">
      {chars.split("").map((c, i) => (
        <RefCell key={i} char={c} />
      ))}
    </div>
  );
}

export default RefTable;
