import { useEffect, useState } from "react";

function debounce(callback, waitTime) {
  let timeNow = Date.now();
  return () => {
    if (timeNow - Date.now() + waitTime < 0) {
      callback();
      timeNow = Date.now();
    }
  };
}

export default function useResize(settings = { debounceTime: 100 }) {
  const [width, setWidth] = useState(window.innerWidth);

  const handleSetSize = () => {
    setWidth(window.innerWidth);
  };

  const handler = debounce(handleSetSize, settings.debounceTime);

  useEffect(() => {
    window.addEventListener("resize", handler);

    return () => window.removeEventListener("resize", handler);
  }, [handler]);
  return width;
}
