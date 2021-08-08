import { useState, useMemo, useEffect } from "react";

const slowFunction = num => {
  console.log("slow function running");
  for (let i = 0; i < 1000000000; i++) {}
  console.log("slow function done");

  return num * 2;
};

const Memo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  const themeStyles = useMemo(
    () => ({
      background: dark ? "#000" : "#fff",
      color: dark ? "#fff" : "#000",
    }),
    [dark]
  );

  useEffect(() => {
    console.log("theme changed");
  }, [themeStyles]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(prevDark => !prevDark)}>
        Change theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
};

export default Memo;
