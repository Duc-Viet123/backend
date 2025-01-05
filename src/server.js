const express = require('express');
const app = express();
const ConfigViewEngine = require('./config/viewengine');
const webrouter = require('./routes/web')

require('dotenv').config();

//console.log(process.env);
const port = process.env.PORT || 8081
const hostname = process.env.HOST_NAME

//config template 
ConfigViewEngine(app);

 
// khai bao routes
app.use('/', webrouter)
 
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
