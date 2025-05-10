console.clear();
import express from "express";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.send("Hello World");
});
app.get("/data", (req, res) => {
    res.send("Data is loading ");
});
app.get("/phones", (req, res) => {
    res.send("phones is loading ");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
