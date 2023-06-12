import { useState } from "react";
import AppBar from "./AppBar";
import br from "./braille";
import DotSelector from "./DotSelector";
import RadioGroup from "./RadioGroup";
import RefTable from "./RefTable";
import Translator from "./Translator";
import orderings from "./orderings.json";
import "./App.css";

function App() {
  const [displayOrder, setDisplayOrder] = useState("iceb");
  const [brailleInput, setBrailleInput] = useState("");
  const [dotFilter, setDotFilter] = useState(0x0);

  function handleDotSelect(event) {
    let filter = dotFilter;
    if (event.target.checked) {
      filter += Number(event.target.value);
    } else {
      filter -= Number(event.target.value);
    }
    setDotFilter(filter);
  }

  function handleInputChange(event) {
    /* Convert non-braille text to braille */
    let val = event.target.value;
    let validatedVal = "";
    for (let token of val) {
      if (br.isBraille(token)) {
        validatedVal += token;
      } else {
        validatedVal += br.singleToBraille(token);
      }
    }
    setBrailleInput(validatedVal);
  }

  function handleDisplayChange(event) {
    setDisplayOrder(event.target.value);
  }

  function handleCellClick(brailleCell) {
    setBrailleInput(brailleInput + brailleCell); // TODO: handle cursor location flexibility
  }

  return (
    <div>
      <AppBar />
      <h5 className="description">
        Visual cheat sheet for Unified English Braille
      </h5>
      <div className="table-tools">
        <DotSelector className="dot-area" handleSelect={handleDotSelect} />
        <Translator
          className="input-area"
          brailleInput={brailleInput}
          handleChange={handleInputChange}
        />
        <RadioGroup
          className="radio-area"
          handleChange={handleDisplayChange}
          names={Object.keys(orderings)}
          displayOrder={displayOrder}
        />
      </div>
      <RefTable
        displayOrder={displayOrder}
        dotFilter={dotFilter}
        handleClick={handleCellClick}
      />
    </div>
  );
}

export default App;
