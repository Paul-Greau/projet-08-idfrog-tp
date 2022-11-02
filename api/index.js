// librairies
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const router = require('./app/router');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 3002;

// vars
const app = express();

app.use(cors({
	origin: '*'
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

/*
 * Server
 */
app.listen(port, () => {
  console.log(`listening on *:${port}`);
});