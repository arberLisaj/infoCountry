interface Props {
  image: string;
  title: string;
  population: string;
  region: string;
  capital: string;
}
const Card = ({ image, title, population, region, capital }: Props) => {
  return (
    <article>
      <img src={image} alt="alt text here" />
      <h1>{title}</h1>

      <ul>
        <li>
          Population <span>{population}</span>
        </li>
        <li>
          Region<span>{region}</span>
        </li>
        <li>
          Capital<span>{capital}</span>
        </li>
      </ul>
    </article>
  );
};

export default Card;
