const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
app.use(cors());
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//localhost:8000/todo
const todoRouter = require("./routes/todo");
app.use("/", todoRouter);

app.get("*", (req, res) => {
    //views/404.ejs
    res.render("404");
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
