const { Menus } = require("../../model/model");

module.exports = {
	GET_MENUS: (branchId) => {
		return Menus.findAll({
			where: {
				branchId,
			},
		});
	},

	NEW_MENU: async (food, price, branchId) => {
		return await Menus.create({ food, price, branchId });
	},
};
