import AppBar from "./AppBar";
import RefTable from "./RefTable";
import "./App.css";

function App() {
  return (
    <div>
      <AppBar />
      <h5 className="description">
        Visual cheat sheet for Unified English Braille
      </h5>
      <RefTable />
    </div>
  );
}

export default App;
