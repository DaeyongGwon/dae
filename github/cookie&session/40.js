const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));
app.use(cookieParser());

app.get('/', (req, res) => {
    const showModal = req.cookies.showModal;

    if (!showModal) {
        res.cookie('showModal', 'true');
    }

    res.render('40', { showModal });
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
