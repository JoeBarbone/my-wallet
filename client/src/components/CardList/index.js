import React, { useState } from 'react';



// const CardList = ({ cards, cardTitle, cardIssuer, cardTitle, cardType, cardNumber, contactPhone }) => {
const CardList = ({ cards, cardTitle, cardIssuer, cardType, cardNumber, contactPhone, email }) => {
  
    const [ isUpdated, setIsUpdated ] = useState(false);
  
  if (!cards.length) {
    return <h3>No cards for this user</h3>;
  }

    

  return (


    <div className="container">
        
        <div className="row">
        {/* <div className="wtf col d-flex"> */}
            <div className="col col-sm-12 col-lg-4 mx-auto">
                {/* cardTitle set on line #23 of Cards/index.js */}
                <h3>{cardTitle}</h3>
                
                
                {cards &&
                    cards.map(card => (
                        
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
                                        <div className="action-buttons">
                                            <button onClick={() => setIsUpdated(!isUpdated)} className="btn btn-primary mx-2">Update</button>
                                            <button className="btn btn-danger">Delete</button>
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