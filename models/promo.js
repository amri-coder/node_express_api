const dataTypes = require("sequelize");
const db = require("../db");

const Apprenant = require("./apprenant");

const Promo = db.define("promo", {
  id: {
    allowNull: false,
    primaryKey: true,
    type: dataTypes.UUID
  },
  titre: {
    allowNull: false,
    type: dataTypes.STRING(30)
  },
  iteration: {
    type: dataTypes.INTEGER,
    allowNull: false
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

Promo.associate = () => {
  Promo.hasMany(Apprenant);
}


module.exports = Promo;
