const express = require("express");
const bodyParser = require("body-parser");

const sequelize = require("./util/database");

var cors = require("cors");

const app = express();

app.use(cors());

const expensesRoutes = require("./routes/expenses");

app.use(bodyParser.json({ extended: false }));

app.use(expensesRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(4000);
  })
  .catch((err) => console.log(err));
