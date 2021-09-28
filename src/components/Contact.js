import React from "react";



function Contact() {
    return (
    <section className="contact">
        <section className="emailForm">
            <p><input type="text" placeholder="Name">
                <input type="text" placeholder="Email"></p>
            <p><input type="text" placeholder="Subject"></p>
            <p><textarea rows="5" cols="40" placeholder="Message"></textarea></p>
            <button>Submit</button> 
        </section>

        <section className="contactInfo">
            <span className="headingName">Tyler P. Thompson</span>
            <section className="tagline">Web Developer</section>
            <span className="heading">Phone:</span>
            <section className="textLine">801-787-5574</section> 
            <span className="heading">Email:</span>
            <section className="textLine"><a href="mailto:alpinetyler@gmail.com">alpinetyler@gmail.com</a></section>
        </section>
    </section>
    );
}

export default Contact;