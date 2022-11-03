const {
Profile,
} = require('../models');

const emailValidator = require('email-validator');

const profileController = {

    login: async (req,res) => {

     const {email, password} = req.body
     try {
        const searchedProfile = await Profile.scope('withPassword').findOne({
            where: {
                email: email
            }
        })
        if (!searchedProfile) {
            const error = new Error("Login error, Email or Password Invalid");
            return res.status(401).json({
                message: error.message
            });
        }

        if (password !== searchedProfile.password){
            const error = new Error("Login error, Email or Password Invalid");
            return res.status(401).json({
                message: error.message
            });
        }

        // si tout va bien, rajoute l'utilisateur dans la session
        req.session.profile = searchedProfile.dataValues;
        // pour éviter tout problème, on va supprimer le mdp de la session

        req.session.profile.password = null;
        searchedProfile.password = null

        console.log(req.session.profile)
        // maintenant que l'user est loggé, on renvoie le json avec les données du profile
        res.status(200).json(searchedProfile);

        } catch(error) {
            console.log(error);
            return res.render('login', {error: error});
        }
    },

    getProfileById: async (req,res) => {
		try {
            //console.log(req.session);
			const profileId = Number(req.params.id);

            //console.log(profileId);

            if (!profileId) {
                const error = new Error(`'profileId' property is missing`);
                return res.status(400).json({ message: error.message });
            }
            if (!req.session.profile) {
                const error = new Error(`You must login`);
                return res.status(401).json({ message: error.message });
            }
            if (profileId !== req.session.profile.id) {
                const error = new Error(`You must login`);
                return res.status(401).json({ message: error.message });
            }

			const profile = await Profile.findByPk(profileId, {
				include: [
					'projects',
                    'contributions',
                    'society',
                    'person'                    
				],
			});

			if (!profile) { // Si `profile` == null || undefined || false
				const error = new Error(`profile not found with id ${ profileId }`);
				return res.status(404).json({
					message: error.message
				});
			}
			
			res.status(200).json(profile);

		} catch (error) {
			console.error(error);
			res.status(500).json({
				message: error.message
			});
		}
	},


};

module.exports = profileController;