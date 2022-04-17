const { gql } = require("apollo-server-express");

module.exports = gql`
	type Branches {
		id: ID!
		branche_name: String!
		restaurantId: ID!
	}
  
	extend type Query {
		getBranches(restaurantId: ID): [Branches!]!
		getAllBranches: [Branches!]!
	}

	extend type Mutation {
		newBranch(branche_name: String!, restaurantId: ID!): Branches
	}
`;
