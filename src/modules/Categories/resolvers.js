const model = require('./model');

module.exports = {
	Query: {
		getCategories: () => {
			return model.GET_CATEGORIES();
		},
	},

	Mutation: {
		newCategory: async (_, { category_name }) => {
			console.log(category_name);
			return await model.NEW_CATEGORY(category_name)
		},
	},
};

