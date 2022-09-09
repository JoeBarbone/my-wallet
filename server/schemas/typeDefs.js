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





type Query {

  users(email: String): [User]

}




`;


module.exports = typeDefs;