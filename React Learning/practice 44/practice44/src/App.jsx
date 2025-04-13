import { Suspense } from "react";
import "./App.css";
import PricingData from "./Components/DisplayPricing/PricingData";
import Navbar from "./Components/Navbar/Navbar";
import Lodader from "./Components/Lodader/Lodader";
import Chart from "./Components/Rechart/Chart";
const promies = fetch("pricingdata.json").then((res) => res.json());

function App() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Suspense fallback={<Lodader></Lodader>}>
          <PricingData pricingPromies={promies}></PricingData>
        </Suspense>
      <Chart></Chart>
      </main>
    </>
  );
}

export default App;
