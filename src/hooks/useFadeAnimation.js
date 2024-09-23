import { useState } from "react";

const useFadeAnimation = () => {
  const [fade, setFade] = useState(false);

  const changeFade = () => {
    setFade(false);
    setTimeout(() => {
      setFade(true);
    }, 100);
  };

  return { setFade, fade, changeFade };
};

export default useFadeAnimation;
