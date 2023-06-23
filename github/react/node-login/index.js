const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
    res.render("index");
});

app.get("/oauth", function (req, res) {
    res.render("oauth");
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
