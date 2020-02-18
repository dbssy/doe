const express = require('express');
const routes = express.Router();

const db = require('./config/db');

routes.get('/', (req, res) => {
  db.query(`SELECT * FROM donors`, (err, result) => {
    if (err) res.send("Erro no banco de dados."); 
    const donors = result.rows;
    res.render("index.html", { donors });
  });
});

routes.post('/', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const blood = req.body.blood;

  const query = `
    INSERT INTO donors (
      name,
      email,
      blood
    ) VALUES ($1, $2, $3)
  `;

  if (name == "" || email == "" || blood == "") { 
    res.send("Todos os campos são obrigátorios.");
  }

  const values = [ name, email, blood ];

  db.query(query, values, (err) => {
    if (err) res.send("Erro no banco de dados.");
    res.redirect("/");
  });
});

module.exports = routes;