import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_CARD } from "../../utils/mutations";

import Auth from "../../utils/auth"

// function Add() {

const Add = () => {

    const [formState, setFormState] = useState({
        cardTitle: "",
        cardIssuer: "",
        cardType: "",
        cardNumber: "",
        contactPhone: "",
        email: ""
    });

    const [addCard, { error }] = useMutation(ADD_CARD);

    // update state based on form input changes
    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
        console.log(formState);

    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        console.log(formState);
        try {
            await addCard({
                variables: { ...formState},
                // variables: {
                //     cardTitle: formState.cardTitle,
                //     cardIssuer: formState.cardIssuer,
                //     cardType: formState.cardType,
                //     cardNumber: formState.cardNumber,
                //     contactPhone: formState.contactPhone,
                //     email: formState.email
                // }
            });
            
            // console.log(data);
            // Auth.login(data.addCard.token);

            // hoping this goes to cards after saving card
            window.location.assign('/cards');
        
        } catch (e) {
            console.log(e);
        }
    };


    return(
            
        <div className="container">
            
            <div className="row p-2">
            
                <div className="col col-sm-12 col-md-8 col-lg-6 p-0 mx-auto">
            
                    <div className="page-title p-2">
                        <h1>Add Card</h1>
                    </div>
                    <form onSubmit={handleFormSubmit} onChange={handleChange}>

                        <div className="page-data p-3">
                            <input
                                className="form-input my-2 p-2"
                                placeholder="Title"
                                name="cardTitle"
                                type="cardTitle"
                                id="cardTitle"
                                // value={formState.cardTitle}
                                // onChange={handleChange}
                            />

                            <input
                                className="form-input my-2 p-2"
                                placeholder="Issuer"
                                name="cardIssuer"
                                type="cardIssuer"
                                id="cardIssuer"
                                // value={formState.cardIssuer}
                                // onChange={handleChange}
                            />

                            <input
                                className="form-input my-2 p-2"
                                placeholder="Type (Debit/Credit/License/Rewards/Insurance/Membership/Gift)"
                                name="cardType"
                                type="cardType"
                                id="cardType"
                                // value={formState.cardType}
                                // onChange={handleChange}
                            />

                            <input
                                className="form-input my-2 p-2"
                                placeholder="Number (Last four)"
                                name="cardNumber"
                                type="cardNumber"
                                id="cardNumber"
                                // value={formState.cardNumber}
                                // onChange={handleChange}
                            />

                            <input
                                className="form-input my-2 p-2"
                                placeholder="Contact Phone"
                                name="contactPhone"
                                type="contactPhone"
                                id="contactPhone"
                                // value={formState.contactPhone}
                                // onChange={handleChange}
                            />

                            <input
                                className="form-input my-2 p-2"
                                placeholder="Email"
                                name="email"
                                type="email"
                                id="email"
                                // value={formState.email}
                                // onChange={handleChange}
                            />


                            {/* <input className="p-2" type="text" name="cardIssuer" placeholder="card issuer" />
                            <input className="p-2" type="text" name="cardType" placeholder="card type (Debit, Credit, License, Rewards, Insurance or Membership)" />
                            <input className="p-2" type="text" name="cardNumber" placeholder="last four characters" />
                            <input className="p-2" type="text" name="contactPhone" placeholder="contact phone" /> */}
                            {/* <button className="btn btn-danger">Cancel</button> */}
                            <button type="submit" className="btn btn-primary mx-2">Save</button>
                        </div>
                    
                    </form>
                    {error && <div className="errors">add new card failed</div>}
                    {!error && <div>new card added succsssfully</div>}
                </div>
            
            </div>

        </div>
            
        

    )

}

export default Add;