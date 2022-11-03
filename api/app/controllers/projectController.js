const sequelize = require('sequelize');
const {
	Project,
} = require('../models');

const { escape } = require('sanitizer');

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

	const profile_id = req.params.id;
	console.log(profile_id);
    const {
		category_id,
		name,
		invest_type,
		amount_target,
		rate,
		end_time,
		img_url,	// allow Null in table
		web_url,	// allow Null in table
		title,
		resume,
		description,
		visibility
	} = req.body;


	if (!profile_id) {
		const error = new Error(`'profile_id' property is missing`);
		return res.status(400).json({ message: error.message });
	}
	if (!category_id) {
		const error = new Error(`'category_id' property is missing`);
		return res.status(400).json({ message: error.message });
	  }
    if (!name) {
      const error = new Error(`'name' property is missing`);
      return res.status(400).json({ message: error.message });
    }
	if (!invest_type) {
		const error = new Error(`'invest_type' property is missing`);
		return res.status(400).json({ message: error.message });
	}
	if (!amount_target) {
		const error = new Error(`'amount_target' property is missing`);
		return res.status(400).json({ message: error.message });
	}
	if (!rate) {
		const error = new Error(`'rate' property is missing`);
		return res.status(400).json({ message: error.message });
	}
	if (!end_time) {
		const error = new Error(`'end_time' property is missing`);
		return res.status(400).json({ message: error.message });
	}
	if (!title) {
		const error = new Error(`'amount_target' property is missing`);
		return res.status(400).json({ message: error.message });
	}
	if (!resume) {
		const error = new Error(`'amount_target' property is missing`);
		return res.status(400).json({ message: error.message });
	}
	if (!description) {
		const error = new Error(`'description' property is missing`);
		return res.status(400).json({ message: error.message });
	}
	if (!visibility) {
		const error = new Error(`'visibility' property is missing`);
		return res.status(400).json({ message: error.message });
	}
	

    const newProject = Project.build({
      profile_id,
	  category_id,
	  name: escape(name), // On empêche l'injection de code HTML et JS. On se protège contre la faille XSS
	  invest_type,
	  amount_target: Number(amount_target),
	  rate: Number(rate),
	  end_time,
	  img_url,
	  web_url,	
	  title: escape(title),
	  resume: escape(resume),
	  description: escape(description),
	  visibility	 
    });
    await newProject.save();

    res.status(201).json(newProject);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
},


};

module.exports = projectController;