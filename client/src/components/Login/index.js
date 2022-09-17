import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import { useNavigate } from "react-router-dom";
import Auth from "../../utils/auth";

// const navigate = useNavigate();

const Login = (props) => {
    const [formState, setFormState] = useState({ email: "", password: "" });
    const [ login, { error } ] = useMutation(LOGIN_USER);
    const navigate = useNavigate();
    // update state based on form input
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        });
    };

    // submit form
    const handleFormSubmit = async event => {
        event.preventDefault();

        
        try {
            const { data } = await login({
                variables: { ...formState }
            });

            Auth.login(data.login.token);

            // navigate("/cards");
        
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            email: "",
            password: "",
        });
        
    };

    return(

        <div className="container">
            
            <div className="row p-2">
            
                <div className="col col-sm-12 col-md-6 col-lg-4 p-0 mx-auto">
            
                    <div className="page-title p-2">
                        <h1>Login</h1>
                    </div>
                    <form onSubmit={handleFormSubmit}>
                        <div className="page-data p-3">
                            
                            <input
                                className="form-input my-2 p-2"
                                placeholder="email address"
                                name="email"
                                type="email"
                                id="email"
                                value={formState.email}
                                onChange={handleChange}
                            />

                            <input
                                className="form-input my-2 p-2"
                                placeholder="password"
                                name="password"
                                type="password"
                                id="password"
                                value={formState.password}
                                onChange={handleChange}
                            />
                            <button className="btn btn-primary xd-block xw-100 my-3" type="submit">Login</button>
                            
                            
                            {/* <p><input className="p-2" type="email" placeholder="email address" /></p>
                            <p><input className="p-2" type="password" placeholder="password" /></p>
                            <button className="btn btn-primary">Login</button> */}
                        </div>
                    </form>
                    {error && <div>Login failed</div>}
                </div>
            
            </div>

        </div>

    )

}

export default Login;