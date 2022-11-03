const { Router } = require('express');
const router = Router();

const projectController = require('./controllers/projectController');
const profileController = require('./controllers/profileController');

/* Project */

router.get('/project/:id', projectController.getOneProjectById);

/* Profile */
router.post('/login', profileController.login)

/*
router.get('/lists/:id', listController.getOneListById);
router.post('/lists', listController.createList);
router.patch('/lists/:id', listController.updateListById);
router.delete('/lists/:id', listController.deleteListById); */




module.exports = router;