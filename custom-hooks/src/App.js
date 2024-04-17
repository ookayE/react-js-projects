import useWindowResize from "./Components/Hooks/useWindowResize";

const App = () => {
  const { width, height } = useWindowResize();
  return (
    <div>
      <h1>Window Size</h1>
      <p>Width: {width} </p>
      <p>Height: {height} </p>
    </div>
  );
};

export default App;
