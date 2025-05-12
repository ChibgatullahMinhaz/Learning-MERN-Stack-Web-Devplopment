const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "John", email: "john@gmail.com" },
  { id: 2, name: "Jane", email: "jane@gmail.com" },
  { id: 3, name: "Doe", email: "doe@gmail.com" },
];



app.get("/", (req, res) => {
  res.send("Hello World");
});


app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});



app.listen(port, () => {
  console.log(`Server is running on port https://localhost:${port}`);
});