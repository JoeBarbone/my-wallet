import React from "react";
// import profilePic from "../../images/joe_small.png";
import heroPic from "../../images/hero-cropped.png";


function Home() {

    return (
        
        <section className="home">

            {/* <h3 id="home">Home</h3> */}
            
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-12 col-md-4">
                        <img src={heroPic} className="img-fluid img-responsive my-3" alt="worried girl biting her nail" />
                    </div>


                    <div className="col-sm-12 col-md-4 d-flex flex-column justify-content-center">
                        <h1>
                            <p className="home-text">What would you do?</p>
                        </h1>

                        <h3>
                            <p>Losing your wallet can be a frightening experience. But, My Wallet is here to help simplify the chaos.</p>
                        </h3>

                        <a href="/#/signup"><button className="btn btn-primary">Get Started</button></a>
                    </div>
                
                </div>
            </div>




            
        
        </section>

    )

}


export default Home;