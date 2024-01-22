const express = require('express');
const {PORT} = require('./config/serverConfig');
const bodyParser = require('body-parser');



const setUpAndStartServer = async ()=>{

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, async()=>{
        console.log(`server started at ${PORT}`);

    })
}

setUpAndStartServer();