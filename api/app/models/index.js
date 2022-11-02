const Category = require('./category')
const Comment = require('./comment')
const Contribution = require('./contribution')
const Person = require('./person')
const Profile = require('./profile')
const Project = require('./project')
const Society = require('./society')


// Association Profil et Society
Profile.hasOne(Society, {
	as: 'society',
});

Society.belongsTo(Profile, {
foreignKey: 'profile_id'
});

// Association Profil et Person
Profile.hasOne(Person, {
	as: 'person',
});

Person.belongsTo(Profile, {
foreignKey: 'profile_id'
});

// Association Profil et Contribution
Profile.hasMany(Contribution, {
	foreignKey:'profile_id'
});
Contribution.belongsTo(Profile);


// Association Profil et Comment
Profile.hasMany(Comment, {
	foreignKey:'profile_id'
});
Comment.belongsTo(Profile);

// Association Project et Contribution
Project.hasMany(Contribution, {
	foreignKey:'project_id'
});
Contribution.belongsTo(Project);

// Association Project et Comment
Project.hasMany(Comment, {
	foreignKey:'project_id'
});
Comment.belongsTo(Project);

// Association Project et Category
Project.hasOne(Category, {
	as: 'category',
	foreignKey: 'category_id'
});

Category.belongsToMany(Project, {
});

// Association Project et Profile
Profile.hasMany(Project, {
	foreignKey:'profile_id'
});
Project.belongsTo(Profile);


module.exports = {
Category,
Comment,
Contribution, 
Person, 
Profile,
Project
}