const { Router } = require('express');
const router = Router();


const projectController = require('./controllers/projectController');
const profileController = require('./controllers/profileController');
const projectCardController= require('./controllers/projectCardController');


/** projectCards */ 
router.get('/projectCards', projectCardController.getAllProjectCards);

/* project */

router.get('/project/:id', projectController.getOneProjectById);

/* Profile */
router.post('/login', profileController.login)

/*
router.get('/lists/:id', listController.getOneListById);
router.post('/lists', listController.createList);
router.patch('/lists/:id', listController.updateListById);
router.delete('/lists/:id', listController.deleteListById); */

/* router.post("/subscription",controller.subscribe);
router.post("/login",controller.login);*/




module.exports = router;