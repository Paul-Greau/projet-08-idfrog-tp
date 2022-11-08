const { Router } = require('express');
const router = Router();

const contributionController = require('./controllers/contributionController');
const projectController = require('./controllers/projectController');
const profileController = require('./controllers/profileController');
const projectCardController= require('./controllers/projectCardController');
const authorizationMiddleware= require('./middlewares/jwt');

/** contribution */
router.post('/profile/:profileId/contribute/:projectId', authorizationMiddleware, contributionController.makeContribution)

/** projectCards */ 
router.get('/project/list', projectCardController.getAllProjectCards);

/* project */
router.get('/project/:id', projectController.getOneProjectById);
router.post('/profile/:id/project/create', projectController.createProject)

/* Profile */
router.post('/login', profileController.login)
router.get('/logout', profileController.logout)
router.get('/profile/:id', profileController.getProfileById)
router.post('/profile/:id/details', profileController.fillProfil)
router.patch('/profile/:id/details', profileController.patchProfil)
router.post('/subscribe', profileController.suscribe)
router.post('/loginjwt', authorizationMiddleware, profileController.login)

module.exports = router;