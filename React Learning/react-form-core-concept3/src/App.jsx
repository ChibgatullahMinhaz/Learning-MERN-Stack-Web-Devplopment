import "./App.css";
import Controled from "./Components/Controled&Uncontroled/Controled";
import { UnControlled } from "./Components/Controled&Uncontroled/UnControlled";
import FormAction from "./Components/FormAction/FormAction";
import FormHook from "./Components/FormHook/FormHook";
import { Products } from "./Components/ProductsCart/Products";
import SimpleForm from "./Components/SimpleForm/SimpleForm";

function App() {
  return (
    <>
      <h1 className="text-yellow-300 font-bold">Explore React Form and Core concept</h1>
      {/* <FormAction></FormAction>
      <SimpleForm></SimpleForm> */}
      {/* <Controled></Controled>
      <UnControlled></UnControlled> */}
      {/* <h2>Form Hook</h2> */}
      {/* <FormHook></FormHook> */}
      <Products></Products>
    </>
  );
}
export default App;
