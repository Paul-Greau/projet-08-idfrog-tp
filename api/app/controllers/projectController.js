/* const { List } = require('../models');
const { escape } = require('sanitizer');

const listController = {

	getAllLists: async (req, res) => {
		try {

			const lists = await List.findAll({
				// include: 'cards'
				include: {
					association: 'cards',
					include: 'tags',
				},
				order: [
					[ 'position', 'ASC' ],
					[ 'cards', 'position', 'ASC' ],
				],
			});

			res.status(200).json(lists);
			
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: error.message });
		}
	},

	getOneListById: async (req, res) => {
		try {

			const listId = req.params.id;
			const list = await List.findByPk(listId, {
				include: {
					association: 'cards',
					include: 'tags',
				},
				order: [
					[ 'cards', 'position', 'ASC' ],
				],
			});

			if (!list) { // Si `list` == null || undefined || false
				const error = new Error(`List not found with id ${ listId }`);
				return res.status(404).json({ message: error.message });
			}

			res.status(200).json(list);
			
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: error.message });
		}
	},

	createList: async (req, res) => {
		try {

			const { name, position } = req.body;
			if (!name) {
				const error = new Error(`'name' property is missing`);
				return res.status(400).json({ message: error.message });
			}
			if (position == null || position == undefined) {
				const error = new Error(`'position' property is missing`);
				return res.status(400).json({ message: error.message });
			}

			const newList = List.build({
				name: escape(name), // On empêche l'injection de code HTML et JS. On se protège contre la faille XSS
				position: +position,
			});
			await newList.save();

			res.status(201).json(newList);

		} catch (error) {
			console.error(error);
			res.status(500).json({ message: error.message });
		}
	},

	updateListById: async (req, res) => {
		try {
			
			const listId = req.params.id;
			const list = await List.findByPk(listId);
			if (!list) {
				const error = new Error(`List with id ${listId} does not exist.`);
				return res.status(404).json({ message: error.message });
			}

			const { name, position } = req.body;

			if (name) {
				list.name = escape(name); // On empêche l'injection de code HTML et JS. On se protège contre la faille XSS
			}

			if (position) {
				list.position = +position;
			}

			await list.save();

			res.status(200).json(list);

		} catch (error) {
			console.error(error);
			res.status(500).json({ message: error.message });
		}
	},

	deleteListById: async (req, res) => {
		try {
			
			const listId = req.params.id;
			const list = await List.findByPk(listId);
			if (!list) {
				const error = new Error(`List with id ${listId} does not exist.`);
				return res.status(404).json({ message: error.message });
			}
			await list.destroy();
			res.status(200).json(list);

		} catch (error) {
			console.error(error);
			res.status(500).json({ message: error.message });
		}
	}

};

module.exports = listController; */