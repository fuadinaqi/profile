import { Container } from "./style";

function Detail({ year, title, location, description }) {
  return (
    <Container>
      <strong>{year}</strong>
      <h4>{title}</h4>
      <div className="location">{location}</div>
      <p>{description}</p>
    </Container>
  );
}

export default Detail;
