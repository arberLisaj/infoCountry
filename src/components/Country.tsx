import { Link } from "react-router-dom";
import formatThousands from "../utils/formatThousands";

interface Props {
  img: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}

const Country = ({ img, name, population, region, capital }: Props) => {
  const formatedPopulation = formatThousands(population);
  return (
    <Link to={"/" + name} className="article">
      <img src={img} alt="country flag" />
      <div className="content">
        <h1>{name}</h1>
        <p>
          Population: <span>{formatedPopulation}</span>
        </p>
        <p>
          Region: <span>{region}</span>
        </p>
        <p>
          Capital: <span>{capital}</span>
        </p>
      </div>
    </Link>
  );
};

export default Country;
