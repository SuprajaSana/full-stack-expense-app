const Sequelize = require("sequelize");

const sequelize = new Sequelize("fullstack_expense_app", "root", "Saana@123", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
