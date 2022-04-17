const { gql } = require("apollo-server-express");

module.exports = gql`
  type Menu {
    id: ID!
    food: String!
    price: Int!
    branchId: ID!
  }

  extend type Query {
    getMenus(branchId: ID!): [Menu!]!
  }

  extend type Mutation {
    newMenu(food: String! price: Int! branchId: ID!): Menu
  }
`;