import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CARDS } from "../../../client/src/utils/queries";

import Table from 'react-bootstrap/Table';

const Card = () => {
    // use useQuery hook to make query request
    const { loading, data } = useQuery(QUERY_CARDS);
    const cards = data?.cards || [];

    console.log(cards);
  
    return (
      <main>
        <div className='flex-row justify-space-between'>
          <div className='col-12 mb-3'>{/* PRINT THOUGHT LIST */}</div>
        </div>
      </main>
    );
  };

export default Card;

// function Cards() {
//     return (
//       <Table striped bordered hover table-responsive>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Card Title</th>
//             <th>Card Issuer</th>
//             <th>Card Type</th>
//             <th>Card Number</th>
//             <th>Contact Phone</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>631e1af1eef67160e9ddffc6</td>
//             <td>Drivers License</td>
//             <td>FLDMV</td>
//             <td>License</td>
//             <td>0035</td>
//             <td>(888) 555-1212</td>
//             <td><button className="btn btn-primary">Edit</button><button className="btn btn-danger mx-2">Delete</button></td>
//           </tr>
//           <tr>
//             <td>631deaf4e0e65233267b38ca</td>
//             <td>BoA Debit</td>
//             <td>Bank of America</td>
//             <td>Debit</td>
//             <td>3500</td>
//             <td>(888) 795-8888</td>
//             <td><button className="btn btn-primary">Edit</button><button className="btn btn-danger mx-2">Delete</button></td>
//           </tr>
//           <tr>
//             <td>631deaf4e0e65233267b38cb</td>
//             <td>Red Royal</td>
//             <td>Red Robin</td>
//             <td>Rewards</td>
//             <td>2333</td>
//             <td>(800) 222-1345</td>
//             <td><button className="btn btn-primary">Edit</button><button className="btn btn-danger mx-2">Delete</button></td>
//           </tr>
//         </tbody>
//       </Table>
//     );
//   }
  
  //export default Cards;

// function Cards() {

//     return(

//         <div className="container">
            
//             <div className="row">
            
//                 <div className="col col-sm-12 col-md-8 xcol-lg-4 p-0 mx-auto">
            

//                     <table className="table">
//                         <tr>
//                             <th>ID</th>
//                             <th>Title</th>
//                             <th>Issuer</th>
//                             <th>Type</th>
//                             <th>Number</th>
//                             <th>Contact</th>
//                             <th>Email</th>
//                             <th>Actions</th>
//                         </tr>

//                         <tr>
//                             <td>1234567890</td>
//                             <td>BoA Debit</td>
//                             <td>Bank of America</td>
//                             <td>Debit</td>
//                             <td>0095</td>
//                             <td>800-555-1212</td>
//                             <td>JoeBarbone@ucf.edu</td>
//                             <td>edit delete</td>
//                         </tr>

//                         <tr>
//                             <td>0123456789</td>
//                             <td>BoA Credit</td>
//                             <td>Bank of America</td>
//                             <td>Credit</td>
//                             <td>5525</td>
//                             <td>800-555-1212</td>
//                             <td>JoeBarbone@ucf.edu</td>
//                             <td>edit delete</td>
//                         </tr>
//                     </table>
                    

//                 </div>
            
//             </div>

//         </div>

//     )

// }

// export default Cards;