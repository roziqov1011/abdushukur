const { gql } = require('apollo-server-express');

module.exports = gql`
  type Restaurants {
    id: ID!
    restaurant_name: String!
  }

  extend type Query {
    getRestaurants(categoryId: ID!): [Restaurants!]!
    getAllRestaurants: [Restaurants!]!
  }

  extend type Mutation {
    newRestaurant(restaurant_name: String! categoryId: ID!): Restaurants
  }
`