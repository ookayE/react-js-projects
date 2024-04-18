import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/home/Home";
import Favorites from "./Pages/Favorites/Favorites";
import Details from "./Pages/Details/Details";

function App() {
  return (
    <div className="App">
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="/recipe-item/:id" element={<Details />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
