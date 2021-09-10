import React from "react";


function Top() {
    return (
        <section className="top">
            <section className="picture">
                <img src="../images/BW.jpg" alt="pic of Tyler" />
            </section>
            <section className="contactInfo">
                <span className="headingName">Tyler Thompson</span>
                <section className="tagline">Web Developer</section>
                <span className="heading">Phone:</span>
                <section className="textLine">801-787-5574</section>
                <span className="heading">Email:</span>
                <section className="textLine">alpinetyler@gmail.com</section>
                <span className="heading">Address:</span>
                <section className="textLine">120 E Center St</section>
                <section className="textLine">Alpine, UT 84004</section>
            </section>
        </section>
    );
}

export default Top;
