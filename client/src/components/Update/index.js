import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_CARDS } from "../../utils/queries";
import { UPDATE_CARD } from "../../utils/mutations";



function Update() {

    const [ formState, setFormState ] = useState(null);
    const navigate = useNavigate();
    const { loading, data } = useQuery(QUERY_CARDS);
    const { id } = useParams();
    const selectedCard = data?.cards.filter(card => card._id === id);
    const [updateCard, { error }] = useMutation(UPDATE_CARD);


    const handleChange = (event) => {
    
        const {name, value} = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
        console.log(formState);

    };


    const updateCardInfo = async (cardID) => {

        try {

            await updateCard({
                
                variables: {...formState, _id: cardID}

            })

        } catch (error) {

            console.log(error);
        
        }

        navigate("/cards");
        window.location.reload();

    }



    return(
            
        <div className="container">
            
            <div className="row p-2">
            
                <div className="col col-sm-12 col-md-8 col-lg-6 p-0 mx-auto">
            
                    <div className="page-title p-2">
                        <h1>Update Card</h1>
                    </div>

                    { selectedCard?.map(card => (
                        <div className="page-data p-3" key={card._id}>
                            <p><input onChange={handleChange} className="p-2" type="text" name="cardTitle" defaultValue={card.cardTitle} /></p>
                            <p><input onChange={handleChange} className="p-2" type="text" name="cardIssuer" defaultValue={card.cardIssuer} /></p>
                            <p><input onChange={handleChange} className="p-2" type="text" name="cardType" defaultValue={card.cardType} /></p>
                            <p><input onChange={handleChange} className="p-2" type="text" name="cardNumber" defaultValue={card.cardNumber} /></p>
                            <p><input onChange={handleChange} className="p-2" type="text" name="contactPhone" defaultValue={card.contactPhone} /></p>
                            <button onClick={() => navigate("/cards")} className="btn btn-danger">Cancel</button>
                            <button onClick={() => updateCardInfo(card._id)} className="btn btn-primary mx-2">Update</button>
                        </div>    
                    )) }
                    

                </div>
            
            </div>

        </div>
            
        

    )

}

export default Update;