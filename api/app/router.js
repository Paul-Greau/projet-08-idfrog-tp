const { Router } = require('express');
const router = Router();

const contributionController = require('./controllers/contributionController');
const projectController = require('./controllers/projectController');
const profileController = require('./controllers/profileController');
const projectCardController= require('./controllers/projectCardController');

const authorizationMiddleware= require('./middlewares/jwt');

/** contribution */
router.post('/profile/:profileId/contribute/:projectId', authorizationMiddleware, contributionController.makeContribution)

const commentController = require('./controllers/commentControllers');
const uploadImageController = require('./controllers/uploadImageController');

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
router.get('/profile', authorizationMiddleware, profileController.getProfileById)
router.patch('/profile', authorizationMiddleware, profileController.patchProfileById)
router.post('/profile/details',authorizationMiddleware, profileController.fillProfil)
router.patch('/profile/details',authorizationMiddleware, profileController.patchProfil)
router.post('/subscribe', profileController.suscribe)
// router.post('/loginjwt', authorizationMiddleware, profileController.login)

/* Comment */
router.post('/profile/:profileId/project/:projectId/comment', commentController.commentProject)
router.patch('/profile/:profileId/comment/:commentId', commentController.patchComment)
router.delete('/profile/:profileId/comment/:commentId', commentController.deleteComment)

/* Image */
router.post('/project/:id/upload', uploadImageController.uploadProjectImage );


module.exports = router;