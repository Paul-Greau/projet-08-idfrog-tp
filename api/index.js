// librairies
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');


const port = process.env.PORT || 3002;

// vars
const app = express();



/* Middlewares */
// parse request body
app.use(bodyParser.json());

// cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');

  // response to preflight request
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  }
  else {
    next();
  }
});



/*
 * Server
 */
app.listen(port, () => {
  console.log(`listening on *:${port}`);
});