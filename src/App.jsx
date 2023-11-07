import React, { useEffect, useState } from "react";
import Country from "./components/Country";
import Filter from "./components/Filter";
import Header from "./components/Header";
import countries from "./data.json";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [region, setRegion] = useState("");
  const filterByInput = countries.filter((c) =>
    c.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  const filterByRegion = countries.filter((c) => c.region === region);
  const filteredCountries = inputValue
    ? filterByInput
    : region
    ? filterByRegion
    : countries;

  useEffect(() => {
    if (inputValue) setRegion("");
    if (region) setInputValue("");
  }, [inputValue, region]);
  return (
    <main>
      <Header />
      <Filter
        inputValue={inputValue}
        setInputValue={(value) => setInputValue(value)}
        region={region}
        setRegion={(value) => setRegion(value)}
      />
      <section className="grid">
        {filteredCountries.length === 0 ? (
          <p style={{ padding: "10px" }}>
            No match for <b style={{ fontWeight: "bold" }}>{inputValue}</b>
          </p>
        ) : (
          <>
            {filteredCountries.map((country, index) => (
              <Country key={index} {...country} />
            ))}
          </>
        )}
      </section>
    </main>
  );
}
export default App;
