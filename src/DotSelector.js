import "./DotSelector.css";

function DotSelector({ handleSelect }) {
  return (
    <form className="dot-selector">
      <label htmlFor="dot1">
        <input type="checkbox" id="dot1" value={0x1} onChange={handleSelect} />
      </label>
      <label htmlFor="dot4">
        <input type="checkbox" id="dot4" value={0x8} onChange={handleSelect} />
      </label>
      <label htmlFor="dot2">
        <input type="checkbox" id="dot2" value={0x2} onChange={handleSelect} />
      </label>
      <label htmlFor="dot5">
        <input type="checkbox" id="dot5" value={0x10} onChange={handleSelect} />
      </label>
      <label htmlFor="dot3">
        <input type="checkbox" id="dot3" value={0x4} onChange={handleSelect} />
      </label>
      <label htmlFor="dot6">
        <input type="checkbox" id="dot6" value={0x20} onChange={handleSelect} />
      </label>
    </form>
  );
}

export default DotSelector;
