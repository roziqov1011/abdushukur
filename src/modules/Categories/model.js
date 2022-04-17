const { Categories } = require("../../model/model");

module.exports = {
	GET_CATEGORIES: () => {
		return Categories.findAll();
	},
  
	NEW_CATEGORY: async (category_name) => {
		return await Categories.create({ category_name });
	},
};
