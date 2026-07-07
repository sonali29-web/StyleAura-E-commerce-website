import React, { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  const [debounce, setDebounce] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounce(value);
    }, 300);
    return () => clearInterval(timerId);
  }, [value, delay]);

  return debounce;
};

export default useDebounce;
