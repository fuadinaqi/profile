import { Container, TitleContainer } from "./style";
import Progress from "components/ui-kit/Atoms/Progress";

function ProgressBar({ title, percentage }) {
  return (
    <Container>
      <TitleContainer>
        <h4>{title}</h4>
        <h4 className="primary">{`${percentage}%`}</h4>
      </TitleContainer>
      <Progress percentage={percentage} />
    </Container>
  );
}

ProgressBar.defaultProps = {
  percentage: 0,
};

export default ProgressBar;
