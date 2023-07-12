import { useState } from "react";
import Header from "./components/Header";
import "./styles/styles.css";
import FilterCountries from "./components/FilterCountries";
import CountriesGrid from "./components/CountriesGrid";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [choosenRegion, setChoosenRegion] = useState("");
  const [inputValue, setInputValue] = useState("");

  return (
    <main className={darkMode ? "dark-mode" : "light-mode"}>
      <Header darkMode={darkMode} setDarkMode={(data) => setDarkMode(data)} />
      <FilterCountries
        setData={(data) => setChoosenRegion(data)}
        setInputValue={(data) => setInputValue(data)}
      />
      <CountriesGrid choosenOption={choosenRegion} inputValue={inputValue} />
    </main>
  );
};

export default App;
