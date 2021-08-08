import Renderable from "./Renderable";
import Component from "./Component";
import OneChild from "./OneChild";
import Shape from "./Shape";
import Exact from "./Exact";

function App() {
  const person = {
    name: "Mario",
    age: 46,
    admin: true,
  };

  return (
    <>
      <OneChild>
        <Renderable renderable={<Component name="Mario" age={46} />} />
      </OneChild>
      <Shape person={person} />
      <Exact person={person} />
    </>
  );
}

export default App;
