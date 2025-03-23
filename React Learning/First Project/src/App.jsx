import "./App.css";
import Food from "./Food/Food.jsx";
import Singer from "./actoor/Singer.jsx";
function App() {
  const singers = [
    { id: 1, name: "koddus", age: 50 },
    { id: 2, name: "akkash", age: 57 },
    { id: 3, name: "jerin", age: 51 },
  ];
  return (
    <>
    {
      singers.map(singer => <Singer singer={singer} ></Singer> )
    }
      <Food froutsName="Orang" isFress={true}></Food>
      <Food froutsName="Apple" isFress={true}></Food>
      <Food froutsName="Graps" isFress={false}></Food>
      <Pets nikeName="kotta!"></Pets>
      <Person game="Football Game"></Person>
      <PlayGame name="minha" gameName="Cricket🥰"></PlayGame>
      <PlayGame name="chibgatullah" gameName="Golp🥰"></PlayGame>
      <PlayGame name="Lon cheu" gameName="hokky🥰"></PlayGame>
      <PlayGame name="Jerin" gameName="bet minton🥰"></PlayGame>
    </>
  );
}
const Pets = (props) => {
  const style = {
    color: "red",
    fontSize: "3rem",
  };
  return (
    <>
      <p style={style}>Dog is a {props.nikeName} </p>
    </>
  );
};
function Person(props) {
  return (
    <>
      <h1
        style={{
          color: "blue",
          textTransform: "capitalize",
        }}
      >
        I am a Persona
      </h1>
      <h1 className="color">I play {props.game}</h1>
    </>
  );
}

const PlayGame = (props) => {
  return (
    <>
      <div className="card">
        <h1>my name is: {props.name}</h1>
        <h1>I play: {props.gameName}</h1>
      </div>
    </>
  );
};

export default App;
