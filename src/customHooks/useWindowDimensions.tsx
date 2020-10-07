import { useState, useEffect } from 'react';

function getWindowDimensions(window: Window) {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(window)
  );

  useEffect(() => {
    function handleResize() {
      //   console.log(getWindowDimensions());
      setWindowDimensions(getWindowDimensions(window));
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
