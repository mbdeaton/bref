import { useState } from "react";
import AppBar from "./AppBar";
import RadioGroup from "./RadioGroup";
import RefTable from "./RefTable";
import "./App.css";

function App() {
  const orderings = {
    unicode: {
      ncol: 8,
      seq: [...Array(64).keys()],
    },
    louis: {
      ncol: 13,
      seq: [...Array(64).keys()],
    },
    iceb: {
      ncol: 10,
      seq: [...Array(64).keys()],
    },
  };

  const [displayOrder, setDisplayOrder] = useState(orderings["unicode"]);

  function handleChange(event) {
    setDisplayOrder(orderings[event.target.value]);
  }

  return (
    <div>
      <AppBar />
      <h5 className="description">
        Visual cheat sheet for Unified English Braille
      </h5>
      <RadioGroup
        className="radio-group"
        handleChange={handleChange}
        names={Object.keys(orderings)}
      />
      <RefTable displayOrder={displayOrder} />
    </div>
  );
}

export default App;
