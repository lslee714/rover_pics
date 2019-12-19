const path = require('path');
const express = require('express');
const app = express();
const port = 8081;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static('app/dist'));

require('./routes/home.js')(app); 


app.listen(port, () => console.log(`Example app listening on port ${port}!`));