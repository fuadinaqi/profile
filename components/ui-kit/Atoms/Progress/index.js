import { useState, useEffect } from "react";
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

export default Progress;
