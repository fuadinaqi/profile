import { Container } from "./style";
import ProgressBar from "components/ui-kit/ProgressBar";

function ProfileSkill() {
  return (
    <Container>
      <h2>skills</h2>
      <ProgressBar title="Javascript" percentage={90} />
      <ProgressBar title="HTML5" percentage={79} />
      <ProgressBar title="Cascading Style Sheets (CSS)" percentage={83} />
      <ProgressBar title="React js" percentage={87} />
      <ProgressBar title="React native" percentage={72} />
      <ProgressBar title="Vue js" percentage={75} />
      <ProgressBar title="Node js" percentage={78} />
      <ProgressBar title="Express js" percentage={71} />
      <ProgressBar title="MongoDB" percentage={80} />
      <ProgressBar title="MySQL" percentage={70} />
    </Container>
  );
}

export default ProfileSkill;
