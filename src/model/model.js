const { sequelize, DataTypes } = require("../Lib/sequelize");

const Categories = sequelize.define("categories", {
	category_name: {
		type: DataTypes.STRING,
		allowNull: false
	},
});

const Restaurants = sequelize.define("restaurants", {
	restaurant_name: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			min: 3,
			max: 64,
		},
	}
});

const Branches = sequelize.define('branches', {
	branche_name: {
		type: DataTypes.STRING(164),
		allowNull: false
	}
});

const Menus = sequelize.define('menu',  {
	food: {
		type: DataTypes.STRING(64),
		allowNull: false
	},
	price: {
		type: DataTypes.DECIMAL(10, 2),
		allowNull: false
	}
});

const Orders = sequelize.define('order', {
	username: {
		type: DataTypes.STRING(64),
		allowNull: false
	},
	location: {
		type: DataTypes.STRING(128),
		allowNull: false
	},
	phone_number: {
		type: DataTypes.STRING(64),
		allowNull: false
	},
	food_name: {
		type: DataTypes.STRING(64),
		allowNull: false
	},
	food_price: {
		type: DataTypes.DECIMAL(10, 2),
		allowNull: false
	},
	food_count: {
		type: DataTypes.INTEGER,
		allowNull: false
	}
});

// Restaurant references to Category
Categories.hasMany(Restaurants)
Restaurants.belongsTo(Categories)

// Branches references to Restaurant
Restaurants.hasMany(Branches)
Branches.belongsTo(Restaurants)

Branches.hasMany(Menus)
Menus.belongsTo(Branches)

module.exports = {
	Categories,
  Restaurants,
	Branches,
	Menus,
	Orders
};
