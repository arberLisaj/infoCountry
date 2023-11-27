import React, { useEffect } from "react";
import countries from "../data.json";
import formatNumbers from "../utils/formatNumbers";

function CountryDetail({ handleClick, name }) {
  const country = countries.filter((c) => c.name === name)[0];
  function handleEscKey(e) {
    if (e.key === "Escape") handleClick();
  }
  useEffect(() => {
    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, []);
  return (
    <section
      onClick={handleClick}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#333a",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          width: "90%",
          maxWidth: "1200px",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <img
          style={{
            width: "100%",
            maxWidth: "500px",
            border:'1px solid gainsboro',
            borderRadius:"4px"
          }}
          src={country.flag}
          alt="country flag"
        />

        <div>
          <h1
            style={{
              fontWeight: 500,
              fontSize: "18px",
              marginBlock: "3px",
            }}
          >
            {country.name}
          </h1>
          <ul>
            <li>
              Nativename: <span>{country.nativeName}</span>
            </li>
            <li>
              Capital: <span>{country.capital}</span>
            </li>
            {country.currencies && (
              <li>
                Currency: <span>{country.currencies[0]?.name}</span>
              </li>
            )}
            <li>
              Language: <span>{country.languages[0].name}</span>
            </li>
            <li>
              Region: <span>{country.region}</span>
            </li>
            <li>
              Population: <span>{formatNumbers(country.population)}</span>
            </li>
            <li>
              Domain: <span>{country.topLevelDomain}</span>
            </li>
            <li>
              Calling Code: <span>{country.callingCodes[0]}</span>
            </li>
            <li>
              Demonym: <span>{country.demonym}</span>
            </li>
            <li>
              Area:{" "}
              <span>
                {formatNumbers(country.area)}km{" "}
                <sup style={{ fontSize: "10px" }}>2</sup>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CountryDetail;
