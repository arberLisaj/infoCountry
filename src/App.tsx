import { useState } from "react";
import Header from "./components/Header";
import "./styles/styles.css";
import FilterCountries from "./components/FilterCountries";
import CountriesGrid from "./components/CountriesGrid";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <main className={darkMode ? "dark-mode" : "light-mode"}>
      <Header darkMode={darkMode} setDarkMode={(data) => setDarkMode(data)} />
      <FilterCountries />
      <CountriesGrid/>
    </main>
  );
};

export default App;
