import React from "react";

function Projects() {
    return (
        <section className="projects">
            <section className="projectTitle">PROJECTS</section>
                <section class="rowProject">
                    <section class="projectItem">pic1</section>
                    <section class="projectItem">pic2</section>
                </section>  
                <section class="rowProject">  
                    <section class="projectItem">pic3</section>
                    <section class="projectItem">pic4</section>
                </section> 
                <section class="rowProject">
                    <section class="projectItem">pic5</section>
                    <section class="projectItem">pic6</section>
                </section>
                <section class="rowProject">
                        <section class="projectDescription">
                            <span class="heading">Lamppost Properties</span>
                                lprentals.live - personally developed. Lamppost Rentals 
                                is rental management software that uses Twilio and Stripe 
                                to allow a renter to send a maintenance request by text 
                                message directly to the property manager from the app 
                                and to pay rent online. Renters can also browse through 
                                pictures of rentals online. The admin portal allows the 
                                property manager to track all general ledger expenses, 
                                appliances and equipment for each rental, and to produce financial, 
                                equipment, and renter reports. Won best business solution for personal projects.
                                <p>Technologies Used:</p>
                                REACT | NODE | STRIPE | EXPRESS |MASSIVE | POSTGRESQL | JAVASCRIPT | AXIOS| REDUX | TWILIO | S3
                            <br></br>
                            <a class="projectLinks" href="http://www.lprentals.live">Go To Lamppost Rentals Site</a>
                            <a  class="projectLinks" href="https://github.com/alpinetyler/lprentals">Go To Lamppost Rentals GitHub</a>
                            
                            </section>
                        <section class="projectDescription">
                            <span class="heading">Flüber (working title)</span>
                                Group Developed. Flüber is an app that creates a marketplace
                                for charter airplane companies to sell extra seats on existing
                                private flights. Users can log in and search for private flights 
                                to any destination available.
                                <p>Technologies Used:</p>
                                 REACT | NODE | STRIPE | EXPRESS |MASSIVE | POSTGRESQL | JAVASCRIPT | AXIOS| REDUX | TWILIO | S3 |
                                <br></br>
                                <a class="projectLinks" href="http://138.68.233.208:5020">Go To Flüber Site</a>
                                <a class="projectLinks" href="https://github.com/fluberteam/fluber">Go To Flüber GitHub</a>
                                
                                </section>
        </section> 
    </section>
    );
}

export default Projects;