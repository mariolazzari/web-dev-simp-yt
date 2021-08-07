import Renderable from "./Renderable";
import Component from "./Component";
import OneChild from "./OneChild";

function App() {
  return (
    <OneChild>
      <Renderable renderable={<Component name="Mario" age={46} />} />
    </OneChild>
  );
}

export default App;
