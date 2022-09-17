import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";

import Auth from "../../utils/auth";

const Signup = () => {

    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const [addUser, { error }] = useMutation(ADD_USER);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addUser({
                variables: { ...formState },
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };
// }



// to return to original delete everything from line #5 to here, uncomment line #43, remove lines #56 to #70, remove line #77
// function Signup() {

    return(
            
        <div className="container">
            
            <div className="row p-2">
            
                <div className="col col-sm-12 col-md-6 col-lg-4 p-0 mx-auto">
            
                    <div className="page-title p-2">
                        <h1>Signup</h1>
                    </div>
                    <form onSubmit={handleFormSubmit}>
                        <div className="page-data p-3">
                            <input
                                className="form-input my-2 p-2"
                                placeholder="First Name"
                                name="firstName"
                                type="firstName"
                                id="firstName"
                                value={formState.firstName}
                                onChange={handleChange}
                            />

                            <input
                                className="form-input my-2 p-2"
                                placeholder="Last Name"
                                name="lastName"
                                type="lastName"
                                id="lastName"
                                value={formState.lastName}
                                onChange={handleChange}
                            />

                            <input
                                className="form-input my-2 p-2"
                                placeholder="Email Address"
                                name="email"
                                type="email"
                                id="email"
                                value={formState.email}
                                onChange={handleChange}
                            />

                            <input
                                className="form-input my-2 p-2"
                                placeholder="Password"
                                name="password"
                                type="password"
                                id="password"
                                value={formState.password}
                                onChange={handleChange}
                            />
                            
                            
                            
                            
                            {/* <p><input className="p-2" type="text" name="first" placeholder="first name" /></p>
                            <p><input className="p-2" type="text" name="last" placeholder="last name" /></p>
                            <p><input className="p-2" type="email" name="address" placeholder="email address" /></p>
                            <p><input className="p-2" type="password" name="password" placeholder="password" /></p> */}
                            <button className="btn btn-primary my-3">Signup</button>
                        </div>
                    </form>
                    {error && <div>Signup failed</div>}
                </div>
            
            </div>

        </div>
            
        

    )

}

export default Signup;