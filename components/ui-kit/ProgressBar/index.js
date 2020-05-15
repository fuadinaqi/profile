import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container, BarContainer, BarValue, TitleContainer } from "./style";

function ProgressBar({ title, percentage }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setValue(percentage);
  }, []);
  return (
    <Container>
      <TitleContainer>
        <h4>{title}</h4>
        <h4 className="primary">{`${percentage}%`}</h4>
      </TitleContainer>
      <BarContainer>
        <BarValue percentage={value} />
      </BarContainer>
    </Container>
  );
}

ProgressBar.defaultProps = {
  percentage: 0,
};

ProgressBar.propTypes = {
  title: PropTypes.string.isRequired,
  percentage: PropTypes.number,
};

export default ProgressBar;
