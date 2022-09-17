const { gql } = require("apollo-server-express");

const typeDefs = gql`

type User {

    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    cards: [Card]
  
}  


type Card {

  _id: ID
  cardTitle: String
  cardIssuer: String
  cardType: String
  cardNumber: String
  contactPhone: String
  email: String

}

type Auth {

  token: ID!
  user: User

}


type Query {

  me: User
  users: [User]
  cards: [Card]
  card(email: String): [Card]
  
}


type Mutation {

  login(email: String!, password: String!): Auth
  addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
  addCard(email: String!, cardTitle: String!, cardIssuer: String!, cardType: String!, cardNumber: String!, contactPhone: String!): Card

}




`;


module.exports = typeDefs;