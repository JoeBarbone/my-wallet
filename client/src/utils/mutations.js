import { gql } from "@apollo/client";

export const LOGIN_USER = gql`

mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
            email
        }
    }
}

`;


export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        email
      }
    }
  }

`;


export const ADD_CARD = gql`
  mutation addCard($cardTitle: String!, $cardIssuer: String!, $cardType: String!, $cardNumber: String!, $contactPhone: String!, $email: String!) {
    addCard(cardTitle: $cardTitle, cardIssuer: $cardIssuer, cardType: $cardType, cardNumber: $cardNumber, contactPhone: $contactPhone, email: $email) {
      
      _id
      cardTitle
      cardIssuer
      cardType
      cardNumber
      contactPhone
      email
    
    }
  }

`;


