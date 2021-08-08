import { useState } from "react";
import Resources from "./Resources";

function initState() {
  console.log("Init state");
  return { count: 0, theme: "dark" };
}

function App() {
  const [state, setState] = useState(() => initState());

  const { count, theme } = state;

  const decrement = () =>
    setState(prevState => ({ ...prevState, count: prevState.count - 1 }));
  const increment = () =>
    setState(prevState => ({ ...prevState, count: prevState.count + 1 }));

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={increment}>+</button>
      <hr />
      <Resources />
    </>
  );
}

export default App;
