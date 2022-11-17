// librairies
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const router = require('./app/router');
const session = require('express-session');
const profileMiddleware = require('./app/middlewares/profile');
const cors = require('cors');

const port = process.env.PORT || 3002;

// vars
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({
	origin: '*'
}));

app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: process.env.SESSION_SECRET
}))
app.use(profileMiddleware);





app.use(router);

/*
 * Server
 */
app.listen(port, () => {
  console.log(`listening on *:${port}`);
});