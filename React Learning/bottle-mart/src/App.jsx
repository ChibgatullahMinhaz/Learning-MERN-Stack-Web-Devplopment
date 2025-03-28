import { Suspense } from "react";
import "./App.css";
import { Bottles } from "./Component/Bottols/Bottles";

const fetchPromise = fetch(
  "https://raw.githubusercontent.com/ProgrammingHero1/awesome-water-bottles/refs/heads/main/public/bottles.json"
).then((res) => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<h1 className="text-center">Loading.........</h1>}>
        <h1 className="text-center">Awesome Bottles</h1>
        <Bottles fetchPromise={fetchPromise}></Bottles>
      </Suspense>
    </>
  );
}

export default App;
