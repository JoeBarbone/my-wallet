import { gql } from "@apollo/client";

// export const QUERY_CARDS = gql`
//     query card($email: String) {
//         card(email: $email) {
//             _id
//             cardTitle
//             cardIssuer
//             cardType
//             cardNumber
//             contactPhone
//             email
//         }
//     }
// `;


export const QUERY_CARDS = gql`
    query {
        cards {
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