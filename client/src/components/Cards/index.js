import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CARDS } from "../../utils/queries";
import CardList from "../CardList";

// import Table from 'react-bootstrap/Table';

const Card = () => {
    // use useQuery hook to make query request
    const { loading, data } = useQuery(QUERY_CARDS);
    const cards = data?.cards || [];

    // console.log(`cards: ${cards[0].email}`);
  
    return (
      <main>
        <div className='flex-row justify-space-between'>
          <div className='col-12 mb-3'>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <CardList cards={cards} cardTitle="Card Listing" />
              // <CardList cards={cards} cardTitle={cards.email} />
            )}
          </div>
        </div>
      </main>
    );
  };

export default Card;