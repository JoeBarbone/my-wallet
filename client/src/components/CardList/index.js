import React, { useState } from 'react';
import Auth from "../../utils/auth";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_CARD } from "../../utils/mutations";


// const CardList = ({ cards, cardTitle, cardIssuer, cardTitle, cardType, cardNumber, contactPhone }) => {
const CardList = ({ cards, cardTitle, cardIssuer, cardType, cardNumber, contactPhone, email }) => {
    console.log(`Cards: ${cards.cardTitle}`);
    const [ isUpdated, setIsUpdated ] = useState(false);
    const user = Auth.getProfile();

    const navigate = useNavigate();
    const userCards = cards.filter((card) => card.email === user?.email);
    
    const [deleteCard, { error }] = useMutation(DELETE_CARD);


    if (!cards.length) {
    // why doesn't this work?
    return <h3>No cards for this user: {user?.email}</h3>;
  }



  const deleteCardInfo = async (cardID) => {

    // alert(`Delete Card ID: ${cardID}`);

    try {

        await deleteCard({
            
            // variables: {...formState, _id: cardID}
            variables: {_id: cardID}

        })

    } catch (error) {

        console.log(error);
    
    }

    navigate("/cards");
    window.location.reload();

}
    

  return (


    <div className="container">
        
        <div className="row">
        {/* <div className="wtf col d-flex"> */}
            <div className="col col-sm-12 col-lg-4 mx-auto">
                {/* cardTitle set on line #23 of Cards/index.js */}
                <h3>{cardTitle}</h3>
                
                
                {userCards &&
                    userCards.map(card => (
                        
                            <div key={card._id} className="card mb-3">
                        

                                {!isUpdated ?
                                <div>
                                    <p className="card-header">
                                        <span>Title</span> {card.cardTitle} <br />
                                        <span>Issuer</span> {card.cardIssuer}
                                    </p>
                                    <div className="card-body">
                                        <p><span>Type</span> {card.cardType}</p>
                                        <p><span>Number</span> {card.cardNumber}</p>
                                        <p><span>Contact</span> {card.contactPhone}</p>
                                        <p><span>Email</span> {card.email}</p>
                                        {/* <p><span>RecordID </span><a href={"/update/" + card._id}>{card._id}</a></p> */}
                                        <p><span>RecordID </span>{card._id}</p>

                                        <div className="action-buttons">
                                        <a href={"/update/" + card._id}><button onClick={() => setIsUpdated(!isUpdated)} className="btn btn-primary mx-2">Update</button></a>

                                        {/* How do I call the delete? There isn't really a web page, I just want it to delete based on the _id */}
                                        <button onClick={() => deleteCardInfo(card._id)} className="btn btn-danger">Delete</button>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div>
                                <form>
                                    <p className="card-header">
                                        <p><span>Title</span><input defaultValue={card.cardTitle} /></p>
                                        <p><span>Issuer</span><input defaultValue={card.cardIssuer} /></p>
                                    </p>
                                    <div className="card-body">
                                        <p><span>Type</span><input defaultValue={card.cardType} /></p>
                                        <p><span>Number</span><input defaultValue={card.cardNumber} /></p>
                                        <p><span>Phone</span><input defaultValue={card.contactPhone} /></p>
                                        <div className="action-buttons">
                                            <button className="btn btn-primary mx-2">Save</button>
                                            <button className="btn btn-danger">Delete</button>
                                        </div>
                                    </div>
                                </form>
                                </div>
                                }
                            </div>
                            
        
                    ))}
                
            </div>
        {/* </div> */}
        </div>
    
    </div>
    
  );
};

export default CardList;