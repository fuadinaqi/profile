import { Container } from "./style";

function Detail({ year, title, titleDesc, description }) {
  return (
    <Container>
      <strong>{titleDesc}</strong>
      <h4>{title}</h4>
      <div className="titleDesc">{year}</div>
      <p>{description}</p>
    </Container>
  );
}

export default Detail;
