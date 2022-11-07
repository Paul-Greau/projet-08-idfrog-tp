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
router.patch('/profile/:profileId/project/:projectId', projectController.patchProject)

/* Profile */
router.post('/login', profileController.login)
router.get('/logout', profileController.logout)
router.get('/profile/:id', profileController.getProfileById)
router.post('/profile/:id/details', profileController.fillProfil)
router.patch('/profile/:id/details', profileController.patchProfil)
router.post('/subscribe', profileController.suscribe)

module.exports = router;