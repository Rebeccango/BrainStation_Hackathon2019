let router = require("express").Router();
const RecommendedActors = require("../data/test/RecommendedActors");


//GET RECOMMENDED ACTOR LIST -------------------------------------------
router.get('/', (req, res) => {
    console.log(RecommendedActors);
    res.json(RecommendedActors);
})


module.exports = router;