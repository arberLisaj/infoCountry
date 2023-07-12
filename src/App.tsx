import { useState } from "react";
import Header from "./components/Header";
import "./styles/styles.css";
import FilterCountries from "./components/FilterCountries";
import CountriesGrid from "./components/CountriesGrid";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [choosenOption, setChoosenOption] = useState("");

  return (
    <main className={darkMode ? "dark-mode" : "light-mode"}>
      <Header darkMode={darkMode} setDarkMode={(data) => setDarkMode(data)} />
      <FilterCountries setData={(data) => setChoosenOption(data)} />
      <CountriesGrid choosenOption={choosenOption} />
    </main>
  );
};

export default App;
