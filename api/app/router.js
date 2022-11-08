const { Router } = require('express');
const router = Router();

const contributionController = require('./controllers/contributionController');
const projectController = require('./controllers/projectController');
const profileController = require('./controllers/profileController');
const projectCardController= require('./controllers/projectCardController');
const commentController = require('./controllers/commentControllers');
const uploadImageController = require('./controllers/uploadImageController');

/** Contribution */
router.post('/profile/:profileId/contribute/:projectId', contributionController.makeContribution)

/** projectCards */ 
router.get('/project/list', projectCardController.getAllProjectCards);

/* project */
router.get('/project/:id', projectController.getOneProjectById);
router.post('/profile/:id/project/create', projectController.createProject)
router.patch('/profile/:profileId/project/:projectId', projectController.patchProject)
router.delete('/profile/:profileId/project/:projectId', projectController.deleteProject)

/* Profile */
router.post('/login', profileController.login)
router.get('/logout', profileController.logout)
router.get('/profile/:id', profileController.getProfileById)
router.post('/profile/:id/details', profileController.fillProfil)
router.patch('/profile/:id/details', profileController.patchProfil)
router.post('/subscribe', profileController.suscribe)

/* Comment */
router.post('/profile/:profileId/project/:projectId/comment', commentController.commentProject)
router.patch('/profile/:profileId/comment/:commentId', commentController.patchComment)
router.delete('/profile/:profileId/comment/:commentId', commentController.deleteComment)

/* Image */
router.post('/project/:id/upload', uploadImageController.uploadProjectImage );

module.exports = router;