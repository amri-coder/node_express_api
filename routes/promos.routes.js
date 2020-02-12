const express = require("express");
const router = express.Router();
const promosController = require("../controllers/promos.controller");

router.get("/", async (request, response) => {
  const data = await promosController.getAllPromo();
  response.json({ data });
});

router.get("/:id", async (request, response) => {
  const { id } = request.params;
  const data = await promosController.getPromo(id);
  response.json({ data });
});

router.post("/ajouter", async (request, response) => {
  const { titre, iteration } = request.body;
  const nouvellePromo = await promosController.addPromo({ titre, iteration });

  response.status(201).json({
    data: {
      titre: nouvellePromo.titre,
      iteration: nouvellePromo.iteration
    }
  });
});

module.exports = router;
