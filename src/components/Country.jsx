import formatNumbers from "../utils/formatNumbers";

function Country({ flag, name, population, region, capital }) {
  return (
    <div
      style={{
        border: "1px solid gainsboro",
        borderRadius: "4px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        maxWidth: "300px",
        padding: "8px",
      }}
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
  );
}

export default Country;
