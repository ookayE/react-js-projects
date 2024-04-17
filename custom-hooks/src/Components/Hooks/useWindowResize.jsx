import { useEffect, useState } from "react";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

const useWindowResize = () => {
  //create state for dimensions
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  //useEffect
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    //add event listener
    window.addEventListener("resize", handleResize);

    //remove event listener
    return () => window.removeEventListener("reisze", handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowResize;
