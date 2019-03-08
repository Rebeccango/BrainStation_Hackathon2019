let router = require("express").Router();
const RecommendedActors = require("../data/test/RecommendedActors");


//GET RECOMMENDED ACTOR LIST -------------------------------------------
router.get('/', (req, res) => {
    console.log(RecommendedActors);
    res.send(`here you go`);
})






//DELETE - UPDATE INVENTORY -------------------------------
router.delete('/:id/delete', (req, res) =>{
  const itemId = req.params.id;
  for(let item = 0; item < Inventory.length; item++){
    if(Inventory[item].id === itemId){
      Inventory.splice(item, 1);
      res.json(Inventory);
    }
  }
});

module.exports = router;