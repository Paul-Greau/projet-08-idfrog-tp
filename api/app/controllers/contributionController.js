const sequelize = require('sequelize');
const { Contribution } = require('../models');


const contributionController = {

  makeContribution: async (req, res) => {

   // /profile/:profileId/contribute/:projectId

    try {
      const project_id = Number(req.params.projectId);
      const profile_id = Number(req.params.profileId)

      
      const {
        invested_amount,
        sold,
      } = req.body;
      
        // console.log(req.session);

      

	      if (!profile_id) {
		    const error = new Error(`'profile_id' property is missing`);
		    return res.status(400).json({ message: error.message });
	      }
        if (!req.session.profile) {
            const error = new Error(`'You must login`);
            return res.status(401).json({ message: error.message });
        }	
        if (profile_id !== req.session.profile.id) {
            const error = new Error(`'You must login before making a contribution`);
            return res.status(401).json({ message: error.message });
        }
        if (!invested_amount) {
            const error = new Error(`'invested_amount' property is missing`);
            return res.status(400).json({ message: error.message });
        }
        if (!sold) {
          const error = new Error(`'sold' property is missing`);
          return res.status(400).json({ message: error.message });
        }
       /*  if (!invest_type) {  // 
            const error = new Error(`'invest_type' property is missing`);
            return res.status(400).json({ message: error.message });
        } */
      
      const newContribution = Contribution.build({
        profile_id,
        project_id,
        invested_amount : Number(invested_amount),
        sold,
      });
      
      await newContribution.save();
      res.status(201).json(newContribution);

    }
    catch(error){
      console.error(error);
      res.status(500).json({message: error.message});
    }

    },

};

module.exports = contributionController;