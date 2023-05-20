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
      seq: [
        null,
        1,
        3,
        9,
        25,
        17,
        11,
        27,
        19,
        10,
        26,
        8,
        24,
        4,
        5,
        7,
        13,
        29,
        21,
        15,
        31,
        23,
        14,
        30,
        12,
        28,
        36,
        37,
        39,
        45,
        61,
        53,
        47,
        63,
        55,
        46,
        62,
        44,
        60,
        32,
        33,
        35,
        41,
        57,
        49,
        43,
        59,
        51,
        42,
        58,
        40,
        56,
        null,
        2,
        6,
        18,
        50,
        34,
        22,
        54,
        38,
        20,
        52,
        16,
        48,
      ],
    },
    iceb: {
      ncol: 10,
      seq: [
        1,
        3,
        9,
        25,
        17,
        11,
        27,
        19,
        10,
        26,
        5,
        7,
        13,
        29,
        21,
        15,
        31,
        23,
        14,
        30,
        37,
        39,
        45,
        61,
        53,
        47,
        63,
        55,
        46,
        62,
        33,
        35,
        41,
        57,
        49,
        43,
        59,
        51,
        42,
        58,
        2,
        6,
        18,
        50,
        34,
        22,
        54,
        38,
        20,
        52,
        12,
        44,
        60,
        28,
        4,
        36,
        null,
        null,
        null,
        null,
        8,
        24,
        56,
        16,
        40,
        48,
        32,
        null,
        null,
        null,
        0,
      ],
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
