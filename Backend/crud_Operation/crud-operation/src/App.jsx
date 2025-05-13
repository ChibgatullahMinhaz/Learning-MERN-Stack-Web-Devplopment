import "./App.css";
import Users from "./Components/Users";
const promies = fetch("http://localhost:5000/users").then((res) => res.json());
function App() {
  return (
    <>
      <h1>Simple CRUD Operation</h1>
      <Users usePromies ={promies} />
    </>
  );
}

export default App;
