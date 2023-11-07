import { useState } from "react";
import formatNumbers from "../utils/formatNumbers";
import CountryDetail from "./CountryDetail";

function Country({ flag, name, population, region, capital }) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <>
      <div
        style={{
          border: "1px solid gainsboro",
          borderRadius: "4px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          maxWidth: "300px",
          padding: "8px",
          cursor: "pointer",
        }}
        title="details"
        id="country"
        onClick={() => setShowDetails(true)}
      >
        <img
          style={{
            maxHeight: "170px",
            width: "100%",
            objectFit: "cover",
          }}
          src={flag}
          alt="country flag"
        />

        <ul>
          <h1
            style={{
              fontWeight: 500,
              fontSize: "18px",
              marginBlock: "5px",
            }}
          >
            {name}
          </h1>
          <li>
            Population: <span>{formatNumbers(population)}</span>
          </li>
          <li>
            Region: <span>{region}</span>
          </li>
          <li>
            Capital: <span>{capital}</span>
          </li>
        </ul>
      </div>
      {showDetails && (
        <CountryDetail name={name} handleClick={() => setShowDetails(false)} />
      )}
    </>
  );
}

export default Country;
