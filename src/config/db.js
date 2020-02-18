const { Pool } = require("pg")

module.exports = new Pool({
  user: "yasmin",
  password: "yasmin04",
  host: "localhost",
  port: 5432,
  database: "gymmanager"
})