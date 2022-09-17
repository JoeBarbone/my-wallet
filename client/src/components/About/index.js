import React from "react";


function About() {

    return (
        
        <section className="home">

            {/* <h3 id="home" className="mx-5">About My Wallet</h3> */}
            
            <div className="container">
                <div className="row d-flex justify-content-center">
                    
                    <div className="col-sm-12 col-md-6 xcol-lg-4 xd-flex xflex-column xjustify-content-center hero-text">
                        <h1>
                            <p>About My Wallet</p>
                        </h1>

                        {/* <h6> */}
                            {/* <div className="about-text"> */}
                                <p>Thank you for visiting My Wallet! The idea for this web app first came to be when I thought I lost my wallet.
                                    I immediately did what most people would do, and I panicked. After momentary heart-failure, I realized I left my wallet in my Jeep. But, that
                                    got me thinking, what would I do if I really did lose my wallet? Who would I call? Would I be able to recall all of the items in my wallet
                                    or would I have to wait until my identity was stolen before I remembered something?
                                </p>
                                
                                <p>
                                    Enter My Wallet. Losing your wallet, is there anything more stressful? Wouldn't having a single app to keep track of the contents of your
                                    wallet come in handy? We certainly hope you never have to use it, but if you do, it is a life saver.
                                    My Wallet contains all of the necessary information, title, issuer, type, number (only the last four), and contact phone number. Everything
                                    you need to quickly contact your banks and other card issuers to prevent an issue before it gets started. And there is no need to worry
                                    about security, My Wallet doesn't ask for or store any personal information. Only card names, descriptions and contact information. 
                                </p>

                                <p>
                                    My Wallet, chaos simplified.
                                </p>
                            {/* </div> */}
                        {/* </h6> */}
                        
                        <a href="/#/signup"><button className="btn btn-primary">Get Started</button></a>
                    </div>
                
                </div>
            </div>

        



            
        
        </section>

    )

}


export default About;