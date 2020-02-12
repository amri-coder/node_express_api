const { Sequelize } = require("sequelize");

const databaseConfig = {
  name: "promoapi",
  user: "tester",
  password: "test"
};

const db = new Sequelize(
  databaseConfig.name,
  databaseConfig.user,
  databaseConfig.password,
  { dialect: "postgres" }
);

module.exports = db;
