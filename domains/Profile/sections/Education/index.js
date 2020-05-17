import { Container } from "./style";
import { educations } from "./data";
import Detail from "domains/Profile/components/Detail";

function Education() {
  return (
    <Container>
      <div className="title">
        <img width="40px" alt="skill" src="/images/education.svg" />
        <h2>education</h2>
      </div>
      {educations.map((education, i) => (
        <Detail key={i.toString()} {...education} />
      ))}
    </Container>
  );
}

export default Education;
