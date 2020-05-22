import { useContext, useEffect } from "react";
import { LayoutContext } from "components/Layout";

export default function useWithoutPhoto() {
  const { setWithPhoto } = useContext(LayoutContext);

  useEffect(() => {
    setWithPhoto(false);
    return () => {
      setWithPhoto(true);
    };
  }, []);
}
