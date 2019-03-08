//CONFIG
const express = require('express');
const app = express();
const PORT = 8080;
    //MIDDLEWARE
const bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
// const cors = require('cors');
    // app.use(cors({ origin: "http://localhost:3000" })); // need to download npm package






app.listen(PORT, callback=>{
    console.log(`Server is up and running on port: ${PORT}`)
});