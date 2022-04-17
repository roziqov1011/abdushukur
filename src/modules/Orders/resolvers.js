const model = require("./model");



module.exports = {
	Query: {
		getOrders: async() => {
			return await model.GET_ORDERS();
		},
	}, 

  Mutation: {
    newOrder: async(_, {username, location, phone_number, food_name, food_price, food_count, createdAt}) => {
      return await model.NEW_ORDER(username, location, phone_number, food_name, food_price, food_count, createdAt)
    }
  }
};
