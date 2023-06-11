import br from "./braille";
import "./Translator.css";

function Translator({ brailleInput, handleChange, ...props }) {
  return (
    <div className="translator">
      <input
        className="text-field"
        id="braille-input"
        type="text"
        value={brailleInput}
        onChange={(e) => handleChange(e)}
      ></input>
      <input
        className="text-field"
        id="text-output"
        type="text"
        value={br.toAscii(brailleInput)}
        disabled
      ></input>
    </div>
  );
}

export default Translator;
