// FILMESAPI/models/database.js
const { Sequelize } = require("sequelize");

// Substitua os valores pelos detalhes do seu banco de dados
const sequelize = new Sequelize("PW2024", "postgres", "123", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
