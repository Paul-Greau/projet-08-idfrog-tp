const { Router } = require('express');
const router = Router();

const contributionController = require('./controllers/contributionController');
const projectController = require('./controllers/projectController');
const profileController = require('./controllers/profileController');
const projectCardController= require('./controllers/projectCardController');

/** projectCards */
router.post('/profile/:profileId/contribute/:projectId', contributionController.makeContribution)

/** projectCards */ 
router.get('/project/list', projectCardController.getAllProjectCards);

/* project */
router.get('/project/:id', projectController.getOneProjectById);
router.post('/profile/:id/project/create', projectController.createProject)

/* Profile */
router.post('/login', profileController.login)
router.get('/profile/:id', profileController.getProfileById)

module.exports = router;