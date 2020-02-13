const express = require("express");
const _ = require("lodash");
const router = express.Router();
const promosController = require("../controllers/promos.controller");

router.get("/", async (request, response) => {
  const data = await promosController.getAllPromo();
  response.status(200).json({ data });
});

router.get("/:id", async (request, response) => {
  const { id } = request.params;
  const data = await promosController.getPromo(id);
  response.status(200).json({ data });
});

router.post("/ajouter", async (request, response) => {
  const { titre, iteration } = request.body;
  //validation des données
if(_.isNil(titre)){
  response.status(400)
    .json({error:'le titre doit etre renseigné'});
}

if(typeof titre !== 'string'){
  response.status(400)
    .json({error:'le titre doit etre une chaine de caracteres'});
}

if(titre.length>30){
  response.status(400)
    .json({error:'le titre doit etre inferieure à 30 caracteres'});
}

 if(_.isNil(iteration)){
  response.status(400)
  .json({error:'l\'itération doit etre renseigné'});
 }

 if(typeof iteration !== 'number'){
  response.status(400)
    .json({error:'l\'itération doit etre un nombre'});
}


if(!Number.isInteger(iteration)){
  response.status(400)
    .json({error:'l\'itération doit etre un nombre entier'});
}

if(iteration<=0){
  response.status(400)
    .json({error:'l\'itération doit etre un nombre positif'});
}

const nouvellePromo = await promosController
        .addPromo({ titre, iteration });

response.status(201).json({
    data: {
      titre: nouvellePromo.titre,
      iteration: nouvellePromo.iteration
    }
  });
});


router.delete("/supprimer/:id", async(request,response)=>{
  const { id } = request.params;
  await promosController.deletePromo(id);
  response.json()
      .status(204);

});
router.put("/modifier/:id", async(request, response)=>{
  const {id}=request.params;
  const data=request.body;
  const updateData = await promosController.updatePromo(id,data);
  response.status(200).json(updateData);
});

module.exports = router;
