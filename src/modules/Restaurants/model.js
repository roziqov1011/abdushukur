const { Restaurants } = require("../../model/model");

module.exports = {
	GET_RESTAURANTS: (categoryId) => {
		return Restaurants.findAll({
      where: {
        categoryId
      }
    });
	},

	GET_ALL_RESTAURANTS: () => {
		return Restaurants.findAll();
	},

	NEW_RESTAURANT: async (restaurant_name, categoryId) => {
		return await Restaurants.create({ restaurant_name, categoryId });
	},
};
