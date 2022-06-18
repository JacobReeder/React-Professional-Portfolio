import React from 'react'; 
import coverImage from "../../assets/cover/cover-image.jpg";  //Refactor this to include your projects

/**
 * 
 * Is the "Project" component the equivalent of the "Gallery component in module 20 lesson 3?"
 * 
 */
function Project() {

    return (

        <section className="my-5">

            <h1 id="Projects">Projects</h1>
            <img src={coverImage} className="my-2" 
            style={{ width: "100%" }} alt='cover' />
             
        </section>
    );
}

export default Project;