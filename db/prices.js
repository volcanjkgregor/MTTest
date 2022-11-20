const knex = require('./knex');

function getAllPrices() {
	return knex('electricity_price_user').select('*');
}

module.exports = {
	getAllPrices,
};
