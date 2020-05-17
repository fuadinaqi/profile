import { Container } from "./style";
import { experiences } from "./data";
import Detail from "domains/Profile/components/Detail";

function Experience() {
  return (
    <Container>
      <div className="title">
        <img width="40px" alt="skill" src="/images/work-active.svg" />
        <h2>experience</h2>
      </div>
      {experiences.map((experience, i) => (
        <Detail key={i.toString()} {...experience} />
      ))}
    </Container>
  );
}

export default Experience;
