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
};

module.exports = profileController;