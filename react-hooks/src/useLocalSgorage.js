import { useState, useEffect } from "react";

const getSavedValue = (key, initValue) => {
  const item = localStorage.getItem(key);
  if (item) {
    return JSON.parse(item);
  }

  if (initValue instanceof Function) {
    return initValue();
  }

  return initValue;
};

const useLocalStorage = (key, initValue) => {
  const [value, setValue] = useState(getSavedValue(key, initValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
