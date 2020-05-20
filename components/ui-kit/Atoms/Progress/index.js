import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { BarContainer, BarValue } from "./style";

function Progress({ initialTransition, percentage, ...props }) {
  const [value, setValue] = useState(initialTransition ? 0 : percentage);
  useEffect(() => {
    setValue(percentage);
  }, [percentage]);
  return (
    <BarContainer {...props}>
      <BarValue percentage={value} />
    </BarContainer>
  );
}

Progress.defaultProps = {
  initialTransition: true,
};

Progress.propTypes = {
  initialTransition: PropTypes.bool,
};

export default Progress;
