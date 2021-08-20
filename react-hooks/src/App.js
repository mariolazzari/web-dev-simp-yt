import { useState } from "react";
import Resources from "./Resources";
import Memo from "./Memo.js";
import RefName from "./RefName";
import useLocalStorage from "./useLocalSgorage";
import useUpdateLogger from "./useUpdateLogger";
import CountReducer from "./CountReducer";

function initState() {
  console.log("Init state");
  return { count: 0, theme: "dark" };
}

function App() {
  const [state, setState] = useState(() => initState());
  const [value, setValue] = useLocalStorage("value", () => "hello");
  useUpdateLogger(value);

  const { count, theme } = state;

  const decrement = () =>
    setState(prevState => ({ ...prevState, count: prevState.count - 1 }));
  const increment = () =>
    setState(prevState => ({ ...prevState, count: prevState.count + 1 }));

  return (
    <>
      <h1>useState</h1>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={increment}>+</button>
      <hr />
      <Resources />
      <hr />
      <Memo />
      <hr />
      <RefName />
      <br />
      <input value={value} onChange={e => setValue(e.target.value)} />
      <br />
      <CountReducer />
    </>
  );
}

export default App;
