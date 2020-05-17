import { Container } from "./style";

function Detail({ year, title, titleDesc, description }) {
  return (
    <Container>
      <strong>{year}</strong>
      <h4>{title}</h4>
      <div className="titleDesc">{titleDesc}</div>
      <p>{description}</p>
    </Container>
  );
}

export default Detail;
