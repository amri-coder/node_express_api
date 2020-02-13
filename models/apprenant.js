const dataTypes = require("sequelize");
const db = require("../db");

const Promo = require("./promo");

const Apprenant = db.define("apprenant", {
    id: {
        allowNull: false,
        primaryKey: true,
        type: dataTypes.UUID
    },
    nom: {
        allowNull: false,
        type: dataTypes.STRING(30)
    },
    prenom: {
        allowNull: false,
        type: dataTypes.STRING(30)
    },
    promoId: {
        field: "promo_id",
        allowNull: false,
        type: dataTypes.UUID
    },
    createdAt: {
        field: "created_at",
        allowNull: false,
        type: dataTypes.DATE
    },
    updatedAt: {
        field: "updated_at",
        allowNull: false,
        type: dataTypes.DATE
    }
});

Apprenant.associate = () => {
    Apprenant.belongsTo(Promo, { foreignKey: "promoId" });
}

module.exports = Apprenant;
