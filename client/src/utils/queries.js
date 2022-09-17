import { gql } from "@apollo/client";

// export const QUERY_CARDS = gql`
//     query card($email: String) {
//         card(email: "jenbarbone@asu.edu") {
//             _id
//             cardTitle
//             cardIssuer
//             cardType
//             cardNumber
//             contactPhone
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