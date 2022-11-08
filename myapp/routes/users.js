var express = require("express");
var router = express.Router();

const { Pool } = require("pg");
// precisa configurar as seguintes variáveis de ambiente
// PGDATABASE (nome do banco de dados)
// PGHOST (endereço do seu banco de dados (servidor))
// PGUSER (nome do usuário do banco de dados)
// PGPASSWORD (senha do usuário do banco de dados)

/* GET users listing. */
router.get("/", function (req, res, next) {
  const pool = new Pool();

  pool.query("SELECT * FROM cliente LIMIT 100", (err, responsePg) => {
    console.log(err, responsePg);
    pool.end();
    res.send(responsePg.rows);
  });
});

router.put("/", function (req, res) {
  res.send("Got a PUT request at /users");
});

router.delete("/", function (req, res) {
  res.send("Got a DELETE request at /user");
});

module.exports = router;
