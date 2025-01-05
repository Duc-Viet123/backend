const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

//console.log(process.env);
const port = process.env.PORT || 8081
const hostname = process.env.HOST_NAME

//config template 
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// config static files
app.use(express.static(path.join(__dirname, 'public')))

 


// khai bao routes
app.get('/', (req, res) => {
    res.send('Hello World!, tdv')
})
app.get('/1', (req, res) => {
    res.render("index.ejs")
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
