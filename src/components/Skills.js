import React from "react";



function Skills() {
    return (
        <section className="skills">
            <section className="skillsTitle">SKILLS</section>
            {/* <section className="skillsWrapper">  */}
            <section className="row">
                <section className="skillsItem">Javascript</section>
                <section className="skillsItem">NodeJS</section>
            </section>  
            <section className="row">  
                <section className="skillsItem">React</section>
                <section className="skillsItem">Redux</section>
            </section> 
            <section className="row">
                <section className="skillsItem">PostgrSQL</section>
                <section className="skillsItem">PHP</section>
            </section>
         {/* </section>   */}
        </section>
    );
}

export default Skills;