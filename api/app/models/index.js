/* const List = require('./list');
const Card = require('./card');
const Tag = require('./tag');

// Association List et Card

List.hasMany(Card, {
	as: 'cards',
	foreignKey: 'list_id',
});

Card.belongsTo(List, {
	as: 'list',
	foreignKey: 'list_id',
});

// Association Tag et Card

Card.belongsToMany(Tag, {
	as: 'tags',
	through: 'card_has_tag',
	foreignKey: 'card_id',
	otherKey: 'tag_id',
	timestamps: false, // empêcher l'intégration par défaut de created_at et updated_at (on gère seulement created_at)
});

Tag.belongsToMany(Card, {
	as: 'cards',
	through: 'card_has_tag',
	foreignKey: 'tag_id',
	otherKey: 'card_id',
	timestamps: false,
});

module.exports = {
	List,
	Card,
	Tag
}; */