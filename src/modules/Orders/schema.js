const { gql } = require("apollo-server-express");

module.exports = gql`
	scalar Date

	type Orders {
		id: ID
		username: String
		location: String
		phone_number: String
		food_name: String
		food_price: Int
		food_count: Int
		createdAt: Date
	}

  extend type Query {
		getOrders: [Orders!]!
	}

  extend type Mutation {
    newOrder(username: String! location: String! phone_number: String! food_name: String! food_price: Int! food_count: Int!): Orders
  }
`;
