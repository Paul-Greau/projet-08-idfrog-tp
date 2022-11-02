const { Router } = require('express');
const router = Router();

const projectController= require('./controllers/projectController');
const projectCardController= require('./controllers/projectCardController');

/*const cardController = require('./controllers/cardController');
const tagController = require('./controllers/tagController'); */

/* router.get('/', (req, res) => {
	const index = path.join(__dirname, '../assets/index.html');
	res.sendFile(index);
});

/** projectCards */ 
router.get('/projectCards', projectCardController.getAllProjectCards);
router.post('/projectCards', projectCardController.createProjectCard);
router.patch('/projectCards/:id', projectCardController.modifyProjectCard);
router.delete('/projectCards/:id', projectCardController.deleteProjectCard);


/* project */

router.get('/project/:id', projectController.getOneProjectById);

/*
router.get('/lists/:id', listController.getOneListById);
router.post('/lists', listController.createList);
router.patch('/lists/:id', listController.updateListById);
router.delete('/lists/:id', listController.deleteListById); */

router.post("/subscription",controller.subscribe);
router.post("/login",controller.login);




module.exports = router;