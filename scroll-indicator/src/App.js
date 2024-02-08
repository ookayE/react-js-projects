import "./App.css";
import ScrollIndicator from "./Components";

function App() {
  return (
    <div className="App">
      <ScrollIndicator url={"http://dummyjson.com/products?limit=100"} />
    </div>
  );
}

export default App;
