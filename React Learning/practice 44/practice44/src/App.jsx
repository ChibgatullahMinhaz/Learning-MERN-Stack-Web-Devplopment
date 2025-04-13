import { Suspense } from "react";
import "./App.css";
import PricingData from "./Components/DisplayPricing/PricingData";
import Navbar from "./Components/Navbar/Navbar";
import Lodader from "./Components/Lodader/Lodader";
import Chart from "./Components/Rechart/Chart";
import axios, { Axios } from "axios";
import BarChart from "./Components/Rechart/BarChart";
const promies = fetch("pricingdata.json").then((res) => res.json());
const promiessatudentMarks = axios.get('studentmark.json');


function App() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Suspense fallback={<Lodader></Lodader>}>
          <PricingData pricingPromies={promies}></PricingData>
        </Suspense>
      <Chart></Chart>
      {/* <Suspense fallback={<Lodader></Lodader>}>
        <BarChart promiessatudentMarks ={promiessatudentMarks}></BarChart>
      </Suspense> */}
      </main>
    </>
  );
}

export default App;
