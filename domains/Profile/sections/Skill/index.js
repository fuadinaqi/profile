import { Container } from "./style";
import ProgressBar from "components/ui-kit/Molecules/ProgressBar";
import { skills } from "./data";

function ProfileSkill() {
  return (
    <Container>
      <div className="title">
        <img width="40px" alt="skill" src="/images/skills.svg" />
        <h2>skills</h2>
      </div>
      {skills.map(({ name, percentage }, i) => (
        <ProgressBar key={i.toString()} title={name} percentage={percentage} />
      ))}
    </Container>
  );
}

export default ProfileSkill;
