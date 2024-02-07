import "./App.css";
import MenuUi from "./Components";
import menus from "./Components/data";
import "./Components/styles.css";

function App() {
  return (
    <div className="App">
      {/* Menu UI Component */}
      <MenuUi menus={menus} />
    </div>
  );
}

export default App;
