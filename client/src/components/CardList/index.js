import React, { useState } from 'react';
import Auth from "../../utils/auth";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_CARD } from "../../utils/mutations";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const CardList = ({ cards, cardTitle, cardIssuer, cardType, cardNumber, contactPhone, email }) => {
    // console.log(`Cards: ${cards.cardTitle}`);
    const [ isUpdated, setIsUpdated ] = useState(false);
    const user = Auth.getProfile();

    const navigate = useNavigate();
    const userCards = cards.filter((card) => card.email === user?.email);
    const [deleteCard, { error }] = useMutation(DELETE_CARD);
    


    if (!userCards.length) {
    
        return <h3>No cards for this user: {user?.email}</h3>;
  
    }

    

    const deleteCardInfo = async (cardID) => {

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

    <Container>
        
        <Row>
        
            <Col sm={12} lg={4} className="mx-auto my-5">

                {/* cardTitle set on line #23 of Cards/index.js */}
                {/* <h3>{cardTitle}</h3> */}
                
                {userCards &&
                    userCards.map(card => (
                        
                            <div key={card._id} className="card mb-3">
                        
                                <div>

                                    <p className="card-header">
                                        <br/>
                                        <h4>{card.cardTitle}</h4> <br />
                                    </p>

                                    <div className="card-body">
                                        <p><span>Issuer</span> <span className='text-color'>{card.cardIssuer}</span></p>
                                        <p><span>Type</span> <span className='text-color'>{card.cardType}</span></p>
                                        <p><span>Number</span> <span className='text-color'>{card.cardNumber}</span></p>
                                        <p><span>Contact</span> <span className='text-color'>{card.contactPhone}</span></p>
                                        {/* <p><span>Email</span> <span className='text-color'>{card.email}</span></p> */}
                                        {/* <p><span>RecordID </span><a href={"/update/" + card._id}>{card._id}</a></p> */}
                                        {/* <p><span>RecordID </span> <span className='text-color'>{card._id}</span></p> */}
                                        <hr />

                                        <div className="action-buttons">
                                            <a href={"/update/" + card._id}><button onClick={() => setIsUpdated(!isUpdated)} className="btn btn-primary mx-2">Update</button></a>
                                            <button onClick={() => deleteCardInfo(card._id)} className="btn btn-danger">Delete</button>
                                        </div>
                                    </div>
                                
                                </div>
                                
                            </div>
                        
                    ))
                }
                
            </Col>

        </Row>
    
    </Container> 
    
  );

};

export default CardList;