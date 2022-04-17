const model = require("./model");

module.exports = {
	Query: {
		getMenus: (_, { branchId }) => {
			return model.GET_MENUS(branchId);
		},
	},

	Mutation: {
		newMenu: async (_, { food, price, branchId }) => {
			return await model.NEW_MENU(food, price, branchId);
		},
	},
};
