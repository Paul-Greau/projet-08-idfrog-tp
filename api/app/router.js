const { Router } = require('express');
const router = Router();


const projectController = require('./controllers/projectController');
const profileController = require('./controllers/profileController');
const projectCardController= require('./controllers/projectCardController');


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

module.exports = router;