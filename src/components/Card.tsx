interface Props {
  image: string;
  title: string;
  population: number;
  region: string;
  capital: string | undefined;
}
const Card = ({ image, title, population, region, capital }: Props) => {
  return (
    <article>
      <img src={image} alt="alt text here" />
      <section className="content">
        <h1>{title}</h1>

        <ul>
          <li>
            Population:<span>{population}</span>
          </li>
          <li>
            Region:<span>{region}</span>
          </li>
          <li>
            Capital:<span>{capital}</span>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Card;
