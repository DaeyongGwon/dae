const express = require("express");
const app = express();
const PORT = 8000;

//템플릿
app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
//localhost:8000/visitor
const visitorRouter = require("./routes");
app.use("/visitor", visitorRouter);

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
