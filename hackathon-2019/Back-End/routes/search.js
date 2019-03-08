let router = require("express").Router();
const MovieList = require("../data/test/MovieList");


//GET RECOMMENDED ACTOR LIST -------------------------------------------
router.get('/', (req, res) => {
    console.log(MovieList);
    res.json(MovieList);
})

module.exports = router;