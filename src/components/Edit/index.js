import React from "react";


function Edit() {

    return(
            
        <div className="container">
            
            <div className="row p-2">
            
                <div className="col col-sm-12 col-md-8 col-lg-6 p-0 mx-auto">
            
                    <div className="page-title p-2">
                        <h1>Edit Card</h1>
                    </div>

                    <div className="page-data p-3">
                        <p><input className="p-2" type="text" name="cardTitle" placeholder="card title" /></p>
                        <p><input className="p-2" type="text" name="cardIssuer" placeholder="card issuer" /></p>
                        <p><input className="p-2" type="text" name="cardType" placeholder="card type (Debit, Credit, License, Rewards, Insurance or Membership)" /></p>
                        <p><input className="p-2" type="text" name="cardNumber" placeholder="last four characters" /></p>
                        <p><input className="p-2" type="text" name="contactPhone" placeholder="contact phone" /></p>
                        <button className="btn btn-danger">Cancel</button>
                        <button className="btn btn-primary">Update Card</button>
                    </div>

                </div>
            
            </div>

        </div>
            
        

    )

}

export default Add;