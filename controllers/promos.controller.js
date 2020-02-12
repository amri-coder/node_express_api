const Promo = require("../models/promo");
const uuid = require("uuid/v4");

module.exports = {
  addPromo: async data => {
    const { titre, iteration } = data;
    const nouvellePromo = await Promo.create(
      {
        id: uuid(),
        titre,
        iteration
      },
      { raw: true }
    );
    return nouvellePromo;
  },
  getAllPromo: async () => {
    return await Promo.findAll({ raw: true });
  },
  getPromo: async id => {
    return await Promo.findByPk(id, { raw: true });
  }
};
