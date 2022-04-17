const { Branches } = require("../../model/model");

module.exports = {
	GET_BRANCHES: (restaurantId) => {
		return Branches.findAll({
			where: {
				restaurantId,
			},
		});
	},
	
	GET_ALL_BRANCHES: () => {
		return Branches.findAll()
	},

	NEW_BRANCH: async (branche_name, restaurantId) => {
		return await Branches.create({ branche_name, restaurantId });
	},
};
