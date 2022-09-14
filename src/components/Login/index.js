import React from "react";


function Login() {

    return(

        <div className="container">
            
            <div className="row p-2">
            
                <div className="col col-sm-12 col-md-6 col-lg-4 p-0 mx-auto">
            
                    <div className="page-title p-2">
                        <h1>Login</h1>
                    </div>

                    <div className="page-data p-3">
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