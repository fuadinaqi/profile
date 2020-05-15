import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!width) {
    return {
      name: "",
      width,
    };
  }

  if (width >= 1024) {
    return {
      name: "large",
      width,
    };
  }

  if (width >= 768 && width < 1024) {
    return {
      name: "medium",
      width,
    };
  }

  return {
    name: "small",
    width,
  };
};

export default useWindowWidth;
