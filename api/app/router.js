const { Router } = require('express');
const router = Router();

const projectController= require('./controllers/projectController');

/*const cardController = require('./controllers/cardController');
const tagController = require('./controllers/tagController'); */

/* Project */

router.get('/project/:id', projectController.getOneProjectById);

/*
router.get('/lists/:id', listController.getOneListById);
router.post('/lists', listController.createList);
router.patch('/lists/:id', listController.updateListById);
router.delete('/lists/:id', listController.deleteListById); */



module.exports = router;