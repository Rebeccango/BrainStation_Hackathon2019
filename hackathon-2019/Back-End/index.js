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


//SETUP
    //static files
app.use(express.static('public/BrainStation.png'));
    //Route Registry
app.use('<path>', require('<./route/<filename>>'))






app.listen(PORT, callback=>{
    console.log(`Server is up and running on port: ${PORT}`)
});