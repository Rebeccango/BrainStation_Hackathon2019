let router = require("express").Router();
const RecommendedActors = require("../data/test/RecommendedActors");


//GET RECOMMENDED ACTOR LIST -------------------------------------------
router.get('/', (req, res) => {
    console.log(RecommendedActors);
    res.send(`here you go`);
})


module.exports = router;