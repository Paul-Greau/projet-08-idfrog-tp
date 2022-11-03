const { Router } = require('express');
const router = Router();


const projectController = require('./controllers/projectController');
const profileController = require('./controllers/profileController');
const projectCardController= require('./controllers/projectCardController');


/** projectCards */ 
router.get('/projectCards', projectCardController.getAllProjectCards);

/* project */
router.get('/project/:id', projectController.getOneProjectById);
router.post('/profile/:id/project/create', projectController.createProject)

/* Profile */
router.post('/login', profileController.login)

module.exports = router;