import { useState } from "react";
import AppBar from "./AppBar";
import RadioGroup from "./RadioGroup";
import RefTable from "./RefTable";
import orderings from "./orderings.json";
import "./App.css";

function App() {
  const [displayOrder, setDisplayOrder] = useState("unicode");

  function handleChange(event) {
    setDisplayOrder(event.target.value);
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
        displayOrder={displayOrder}
      />
      <RefTable displayOrder={displayOrder} />
    </div>
  );
}

export default App;
