const { Project } = require('../models');


const projectCardController = {

  getAllProjectCards: async (req, res) => {
    try {
      const ProjectCard = await ProjectCard.findAll(
        {
          include: [
          'contributions',
          'profile',
          'contribution',
          'category',
          order
            ['created_at', 'ASC']
          ]
        });

        if (!projectCard) { // Si `projectCard` == null || undefined || false
            const error = new Error(`Project not found ${ projectId }`);
            return res.status(404).json({ message: error.message });
        }

        project.profile.email = null;
        project.profile.password = null;

        res.status(200).json(project);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
},

createProjectCard: async (req, res) => {
  try {
    const { profile, contribution, category } = req.body;

    let bodyErrors = [];
    if (!profile) {
      bodyErrors.push(`profile can not be empty`);
    }
    // if (!contribution) {
    // bodyErrors.push(`list_id can not be empty`);
    // } 

    if (bodyErrors.length) {
      res.status(400).json(bodyErrors);
    } else {
      let newProjectCard = ProjectCard.build({ profile, contribution, category });
      if (color) {
        newProjectCard.color = color;
      }
      await newProjectCard.save();
      res.json(newProjectCard);
    }

  } catch (error) {
    console.trace(error);
    res.status(500).json(error);
  }
},

modifyProjectCard: async (req, res) => {
  try {
    //const projectCardId = req.params.id;
    const { profile, contribution, category } = req.body;

    // on inclue les categories pour pouvoir les renvoyer à la fin de l'update
    let projectCard = await Card.findByPk(cardId, {
      include: ['categorys']
    });
      if (!projectCard) {
      res.status(404).json(`Cant find card with id ${cardId}`);
    } else {
      // on ne change que les paramètres envoyés
   
      if (profile) {
        projectCard.profile = profile;
      }
      if (contribution) {
        projectCard.contribution = contribution;
      }
      if (category) {
        projectCard.category = category;
      }
      await Projectcard.save();
      res.json(Projectard);
    }

  } catch (error) {
    console.trace(error);
    res.status(500).json(error);
  }
},

deleteProjectCard: async (req, res) => {
  try {
    //const cardId = req.params.id;
    let projectCard = await ProjectCard.findByPk(ProjectCardId);
    if (!projectCard) {
      res.status(404).json(`Cant find project ${cardId}`);
    } else {
      await projectCard.destroy();
      res.json('ok');
    }

  } catch (error) {
    console.trace(error);
    res.status(500).json(error);
  }

}
};


module.exports = projectCardController;   
