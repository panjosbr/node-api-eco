const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let port = 8000;

app.listen(port, () => {
  console.log('Servidor rodando na porta: ' + port);
});
