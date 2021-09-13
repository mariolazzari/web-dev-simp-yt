import ToggleComponent from "./1-useToggle/ToggleComponent";
import TimeoutComponent from "./2-useTimeout/TimeoutComponent";
import DebounceComponent from "./3-useDebounce/DebounceComponent";
import UpdateEffectComponent from "./4-useUpdateEffect/UpdateEffectComponent";
import ArrayComponent from "./5-useArray/ArrayComponent";
import PreviousComponent from "./6-usePrevious/PreviousComponent";
import StateWithHistoryComponent from "./7-useStateWithHistory/StateWithHistoryComponent";
import StorageComponent from "./8-useStorage/StorageComponent";
import AsyncComponent from "./9-useAsync/AsyncComponent";
import FetchComponent from "./10-useFetch/FetchComponent";

const App = () => {
  return (
    <>
      <ToggleComponent />
      <TimeoutComponent />
      <DebounceComponent />
      <UpdateEffectComponent />
      <ArrayComponent />
      <PreviousComponent />
      <StateWithHistoryComponent />
      <StorageComponent />
      <AsyncComponent />
      <FetchComponent />
    </>
  );
};

export default App;
