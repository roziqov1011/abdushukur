const { gql } = require("apollo-server-express");

module.exports = gql`
  type Categories{
    id: ID!
    category_name: String!
  }

  type Query {
    getCategories: [Categories!]!
  }

  type Mutation {
    newCategory(category_name: String!): Categories
  }
`;





