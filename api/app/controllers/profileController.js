const {Profile, Person} = require('../models');

const Society = require('../models/society')

const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');

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

        const validPwd = bcrypt.compareSync(password, searchedProfile.password);
        if (!validPwd) {
            const error = new Error("Login error, Email or Password Invalid");
            return res.status(401).json({
                message: error.message
            });
        }

        /* if (password !== searchedProfile.password){
            const error = new Error("Login error, Email or Password Invalid");
            return res.status(401).json({
                message: error.message
            });
        } */

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

        /** inscription */
    suscribe: async (req, res) => {
        try {
            const searchedProfile = await Profile.findOne({
                where: {
                    email: req.body.email // on récupère l'email passé dans le post, qui va nous servir à compléter la condition where
                }
            });
            console.log(searchedProfile);
            if (searchedProfile) {
                throw new Error("Email already exists");
            }
            // vérifie que le format de l'email est valide ex: user@user.com
            if (!emailValidator.validate(req.body.email)) {
                throw new Error("Email format is not valid");
            }


            // vérifier que le mdp correspond au mdp à confirmer
           /*   if (req.body.password !== req.body.passwordConfirm) {
                throw new Error("Password and confirmPassword does not match");
            } */


            // encrypter le mdp
            // ici on encrypte le mdp via le module bcrypt, qui nous demande en premier paramètre le mdp et en deuxième paramètre le nombre de tour de hashage
            const encryptedMsg =  bcrypt.hashSync(req.body.password, 10);

          const newProfile = Profile.build({
              email: req.body.email,
              password: encryptedMsg,
              pseudo: req.body.pseudo,
          });
          
          await newProfile.save();
      
          res.status(201).json(newProfile);
      
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: error.message });
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


    fillProfil : async (req, res) => {

        const profileIdparams = req.params.id
        const {
            status,
            // Details for a person :
            first_name,
            last_name,
            birth_date,
            birth_place,
            gender,            
            nationality,
            adress,
            city,
            zip_code,
            phone_number,
            avatar_url,
            // Details for a society:
            siret,
            name,
            } = req.body;

        // Global check:             
	    if (!profileIdparams) {
	    	const error = new Error(`'profile_id' property is missing`);
	    	return res.status(400).json({ message: error.message });
	    }
	    if (!req.session.profile) {
	    	const error = new Error(`You must login`);
	    	return res.status(401).json({ message: error.message });
	    }	
	    if (Number(profileIdparams) !== Number(req.session.profile.id)) {
	    	const error = new Error(`You must login before complete a profil`);
	    	return res.status(401).json({ message: error.message });
	    }

        if (!status) {
	    	const error = new Error(`'status' property is missing`);
	    	return res.status(401).json({ message: error.message });
	    }

        try{
            
            const profileToFill = await Profile.findByPk(profileIdparams, {
				include: [
                    'society',
                    'person'                    
				],
			});

			if (!profileToFill) { // Si `profile` == null || undefined || false
				const error = new Error(`profile not found with id ${ profileIdparams }`);
				return res.status(404).json({
					message: error.message
				});
			}

            if (profileToFill.society || profileToFill.person){
                const error = new Error(`profile already completed`);
				return res.status(400).json({
					message: error.message
				});
			}



            // Property check for a person or association:
            if (status === 'person' || status === 'association'){

                if (!first_name) {
                    const error = new Error(`'first_name' property is missing`);
                    return res.status(401).json({ message: error.message });
                }
                if (!last_name) {
                    const error = new Error(`'last_name' property is missing`);
                    return res.status(401).json({ message: error.message });
                }
                if (!last_name) {
                    const error = new Error(`'last_name' property is missing`);
                    return res.status(401).json({ message: error.message });
                }
                if (!birth_place) {
                    const error = new Error(`'birth_place' property is missing`);
                    return res.status(401).json({ message: error.message });
                }
                if (!gender) {
                    const error = new Error(`'gender' property is missing`);
                    return res.status(401).json({ message: error.message });
                }
                if (!nationality) {
                    const error = new Error(`'nationality' property is missing`);
                    return res.status(401).json({ message: error.message });
                }
                if (!adress) {
                    const error = new Error(`'adress' property is missing`);
                    return res.status(401).json({ message: error.message });
                }
                if (!city) {
                    const error = new Error(`'city' property is missing`);
                    return res.status(401).json({ message: error.message });
                }
                if (!zip_code || typeof(Number(zip_code))!== 'number') {
                    const error = new Error(`'zip_code' property is missing`);
                    return res.status(401).json({ message: error.message });
                }
                if (!phone_number) {
                    const error = new Error(`'phone_number' property is missing`);
                    return res.status(401).json({ message: error.message });
                }
                if (!avatar_url) {
                    avatar_url_value = ""
                } else {
                    avatar_url_value = avatar_url
                }
                

                const fillPerson = Person.build({
                    profile_id: Number(profileIdparams),
                    status,
                    first_name: first_name.trim(),
                    last_name: last_name.trim(),
                    birth_date,
                    birth_place: birth_place.trim(),
                    gender,            
                    nationality: nationality.trim(),
                    adress: adress.trim(),
                    city: city.trim(),
                    zip_code: Number(zip_code),
                    phone_number: phone_number.replace(/\s/g,''),
                    avatar_url: avatar_url_value.trim(),
                  });

                  await fillPerson.save();          
                  res.status(201).json(fillPerson);       

            } // end check for person or association //

            // Property check for a society:
            if (status === 'society'){
                if (!siret) {
                    const error = new Error(`'siret' property is missing`);
                    return res.status(401).json({ message: error.message });
                }
                if (typeof(Number(siret)) !== 'number') {
                    const error = new Error(`'siret' property must be a number`);
                    return res.status(401).json({ message: error.message });
                }
                if (!name) {
                    const error = new Error(`'name' property is missing`);
                    return res.status(401).json({ message: error.message });
                }

                const fillSociety = Society.build({
                    profile_id: Number(profileIdparams),
                    siret: Number(siret),
                    name: name.trim(),
                    status,
                  });

                  await fillSociety.save();          
                  res.status(201).json(fillSociety); 

              
            }// end check for society //

        }
        catch(error){
            console.error(error);
            res.status(500).json({ message: error.message });
        }

    },
    
    logout : (req, res) => {

        //console.log(req.session.profile);
        req.session.profile = false;
       // console.log(req.session.profile);
        res.status(200).json({message: "Logout"});

    }


};

module.exports = profileController;
