import React from 'react'; 
import background from "../../assets/Projects/fog.jpg"

function Resume() {

    return (

        <section>
            <h1 style={{ backgroundImage: `url(${background})` }}>Resume</h1>
             <ul>
                 <li>Relevant Experience: </li>
                 <li>  Full Stack Web Development Certification from UCB Berkely in 2022.</li>     
            </ul> 
            <ul>
                 <li>Proficient in the Following Coding Languages:</li>
                 <li>Html, CSS, Javascript, JSX </li>
            </ul>
            <ul>
                 <li>Also proficient with:</li>
                 <li>Third party API's ex. Bootstrap, JQUERY; Object-Oriented Programming, ORM, MVC; </li>
                 <li>Node.js and various packages such as (but not limited to) Express.js, Jest testing framework, Handlebars;</li>
                 <li>Various Databases such as SQL, NOSQL, and Mongoose;</li>
                 <li>as well as Testing Frameworks such as Insomnia, Heroku, and React.</li>
            </ul>
        </section>
    );
}

export default Resume;