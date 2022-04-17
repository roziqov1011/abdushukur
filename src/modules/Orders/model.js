const { Orders } = require("../../model/model");

module.exports = {
	GET_ORDERS: async() => {
		return await Orders.findAll();
	},

	NEW_ORDER: async (username, location, phone_number, food_name, food_price, food_count, createdAt) => {
	  return await Orders.create({username, location, phone_number, food_name, food_price, food_count, createdAt});
	},
};
