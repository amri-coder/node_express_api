const Promo = require("../models/promo");
const uuid = require("uuid/v4");
//select id, titre, iteration from promos


module.exports = {
    addPromo: async data => {
        const {titre, iteration} = data;
        const nouvellePromo = await Promo.create(
            {
                id: uuid(),
                titre,
                iteration
            },
            {attributes: ['id', 'titre', 'iteration']}
        );
        return nouvellePromo;
    },
    getAllPromo: async () => {
        return await Promo.findAll({
            attributes: ['id', 'titre', 'iteration'],
            order:[['createdAt','ASC']]
        });
    },
    getPromo: async id => {
        return await Promo.findByPk(id, {
            attributes: ['id', 'titre', 'iteration']
        });
    },
    deletePromo:async id => {
        const promoToDelete= await Promo.findByPk(id);
        promoToDelete.destroy();
    },
    updatePromo: async (promoId, data) => {
        const [, affectedRow] = await Promo.update(data,{
            where:{id: promoId},
            returning: true,
            plain: true
        });
        const {id, titre, iteration} = affectedRow;
        const updatedData = {id, titre, iteration};
        return updatedData;
    }
};
