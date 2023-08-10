import { useState } from "react";
import FilterCountries from "./components/FilterCountries";
import CountriesGrid from "./components/CountriesGrid";
import Header from "./components/Header";
import useLocalStorage from "./hooks/useLocalStorage";
import "./styles/styles.css";

const App = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", "dark");
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
