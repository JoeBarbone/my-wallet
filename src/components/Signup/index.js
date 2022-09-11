import React from "react";


function Signup() {

    return(
            
        <div className="container">
            
            <div className="row">
            
                <div className="col col-sm-12 col-md-6 col-lg-4 p-0 mx-auto">
            
                    <div className="page-title p-2">
                        <h1>Signup</h1>
                    </div>

                    <div className="page-data p-3">
                        <p><input className="p-2" type="text" name="first" placeholder="first name" /></p>
                        <p><input className="p-2" type="text" name="last" placeholder="last name" /></p>
                        <p><input className="p-2" type="email" name="address" placeholder="email address" /></p>
                        <p><input className="p-2" type="password" name="password" placeholder="password" /></p>
                        <button className="btn btn-primary">Login</button>
                    </div>

                </div>
            
            </div>

        </div>
            
        

    )

}

export default Signup;