const express = require('express');
const { hostname } = require('os');
const app = express();
require('dotenv').config();





console.log(process.env);
const port = 8080;
const hostname1 = 'localhost';

app.set('views', './views/')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/1', (req, res) => {
    res.render("index.ejs")
})
app.listen(port, hostname1, () => {
    console.log(`Example app listening on port ${port}`)
})