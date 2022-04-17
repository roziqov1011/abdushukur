const model = require("./model");

module.exports = {
	Query: {
		getBranches: (_, { restaurantId }) => {
			return model.GET_BRANCHES(restaurantId);
		},
		getAllBranches: () => {
			return model.GET_ALL_BRANCHES();
		},
	},

	Mutation: {
		newBranch: async (_, { branche_name, restaurantId }) => {
			return model.NEW_BRANCH(branche_name, restaurantId);
		},
	},
};
