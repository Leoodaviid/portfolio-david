import { Container } from "./styles";

interface AbilityProps {
  name?: string;
  station?: string;
  emission?: string;
  description?: string;
  link?: string;
}
export const Ability = ({
  name,
  station,
  emission,
  description,
  link,
}: AbilityProps) => {
  return (
    <Container name={name}>
      <h2>{name}</h2>
      <h3>{`${name} - ${station}`}</h3>
      <span>{emission}</span>
      <p>{description}</p>
      <a className="card-cta" href={link} target={"_blank"} rel="noreferrer">
        &rarr;
      </a>
    </Container>
  );
};
