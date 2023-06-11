import { useState } from "react";
import AppBar from "./AppBar";
import br from "./braille";
import RadioGroup from "./RadioGroup";
import RefTable from "./RefTable";
import Translator from "./Translator";
import orderings from "./orderings.json";
import "./App.css";

function App() {
  const [displayOrder, setDisplayOrder] = useState("unicode");
  const [brailleInput, setBrailleInput] = useState("");

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
      <Translator
        brailleInput={brailleInput}
        handleChange={handleInputChange}
      />
      <RadioGroup
        className="radio-group"
        handleChange={handleDisplayChange}
        names={Object.keys(orderings)}
        displayOrder={displayOrder}
      />
      <RefTable displayOrder={displayOrder} handleClick={handleCellClick} />
    </div>
  );
}

export default App;
