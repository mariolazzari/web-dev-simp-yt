import { useState, useEffect, useRef } from "react";

const RefName = () => {
  const [name, setName] = useState("");
  const renderCount = useRef(0);
  const inputRef = useRef();
  const prevName = useRef("");

  const focus = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    renderCount.current += 1;
  });

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        onChange={e => setName(e.target.value)}
        value={name}
      />
      <h1>{`My name is ${name}`}</h1>
      <h2>{`Render count: ${renderCount.current}`}</h2>
      <button onClick={focus}>Focus</button>
      <h3>{`Previous name: ${prevName.current}`}</h3>
    </>
  );
};

export default RefName;
