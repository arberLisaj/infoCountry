import { useState } from "react";
import Header from "./components/Header";
import "./styles/styles.css";
import FilterCountries from "./components/FilterCountries";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <main className={darkMode ? "dark-mode" : "light-mode"}>
      <Header darkMode={darkMode} setDarkMode={(data) => setDarkMode(data)} />
      <FilterCountries />
    </main>
  );
};

export default App;
