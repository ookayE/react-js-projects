import useLocalStorage from "./useLocalStorage";

export default function LightNightMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  console.log(theme);

  return (
    <div className="light-night-mode" data-theme={theme}>
      <div className="container">
        <p>Change Theme!</p>
        <button onClick={handleToggleTheme}>
          {theme === "light" ? "Light's Out" : "Lights On"}
        </button>
      </div>
    </div>
  );
}
