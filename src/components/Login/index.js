import React from "react";


function Login() {

    return(

        <div className="container">
            
            <div className="row">
            
                <div className="col p-4">
            
                    <div>
                        <h1>Login</h1>
                    </div>

                    <div>
                        <p><input className="p-2" type="email" placeholder="email address" /></p>
                        <p><input className="p-2" type="password" placeholder="password" /></p>
                        <button className="btn btn-primary">Login</button>
                    </div>

                </div>
            
            </div>

        </div>

    )

}

export default Login;