const express = require('express');
const app = express();
const PORT = 8080;

// localhost:8080/static/image.png
// app.use('/static', express.static('public'));

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "views"));

app.use( express.static( 'public' ));

app.get('/', (req, res) => res.render("test"));

app.get('/', (req, res) => res.send('<h1>Hello Express!</h1>'));

app.listen(PORT, () => console.log(`Server Port : ${PORT}. localhost: ${PORT}`) )

