import "./App.css";
import Controled from "./Components/Controled&Uncontroled/Controled";
import { UnControlled } from "./Components/Controled&Uncontroled/UnControlled";
import FormAction from "./Components/FormAction/FormAction";
import SimpleForm from "./Components/SimpleForm/SimpleForm";

function App() {
  return (
    <>
      <h1>Explore React Form and Core concept</h1>
      {/* <FormAction></FormAction>
      <SimpleForm></SimpleForm> */}
      <Controled></Controled>
      <UnControlled></UnControlled>
    </>
  );
}
export default App;
