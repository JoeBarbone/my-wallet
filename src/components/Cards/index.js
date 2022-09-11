import React from "react";


function Cards() {

    return(

        <div className="container">
            
            <div className="row">
            
                <div className="col col-sm-12 col-md-8 xcol-lg-4 p-0 mx-auto">
            

                    <table className="table">
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Issuer</th>
                            <th>Type</th>
                            <th>Number</th>
                            <th>Contact</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>

                        <tr>
                            <td>1234567890</td>
                            <td>BoA Debit</td>
                            <td>Bank of America</td>
                            <td>Debit</td>
                            <td>0095</td>
                            <td>800-555-1212</td>
                            <td>JoeBarbone@ucf.edu</td>
                            <td>edit delete</td>
                        </tr>

                        <tr>
                            <td>0123456789</td>
                            <td>BoA Credit</td>
                            <td>Bank of America</td>
                            <td>Credit</td>
                            <td>5525</td>
                            <td>800-555-1212</td>
                            <td>JoeBarbone@ucf.edu</td>
                            <td>edit delete</td>
                        </tr>
                    </table>
                    

                </div>
            
            </div>

        </div>

    )

}

export default Cards;