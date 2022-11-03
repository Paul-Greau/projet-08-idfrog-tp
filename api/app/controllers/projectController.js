const sequelize = require('sequelize');
const {
	Project,
	Contribution,
	// Profile,
} = require('../models');
// const { escape } = require('sanitizer');

const projectController = {

	getOneProjectById: async (req, res) => {
		try {

			const projectId = req.params.id;
			const project = await Project.findByPk(projectId, {
				include: [
					// Default Scope in Profile don't return the Password for safety
					// If we want to get Password  in the Response:						
					/* {
						model: Profile.scope('withPassword'),
						as:'profile',
					}, */
					//
					'profile',
					{
					association: 'comments',
					include: 'profile',
					},
					{
					association: 'contributions',
					include: 'profile',
					}, 					
					'category',
				],
			});


			//

			if (!project) { // Si `project` == null || undefined || false
				const error = new Error(`Project not found with id ${ projectId }`);
				return res.status(404).json({
					message: error.message
				});
			}
			//Useless Now since we configure the scope to exlude the password from the return
			//project.profile.password = null;

			res.status(200).json(project);

		} catch (error) {
			console.error(error);
			res.status(500).json({
				message: error.message
			});
		}
	},

  createProject: async (req, res) => {
  try {

    const { title, subtitle, position } = req.body;
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

	/* createList: async (req, res) => {
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
	} */

};

module.exports = projectController;