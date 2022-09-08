import React from "react";


function Signup() {

    return(
            
        <div className="container">
            
            <div className="row">
            
                <div className="col p-4">
            
                    <div>
                        <h1>Signup</h1>
                    </div>

                    <div>
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