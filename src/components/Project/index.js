import React from 'react'; 
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/Projects/Screenshot.png";  //Refactor this to include your projects

/**
 * This page is the equivalent of "portfolio" for the project requirements
 */
function Project(props) {

    const CurrentCategory = {
        name: "Counting Calz",
        description: "A fitness apllication", //What it was made with/how/why
    };
    return (

        <section className="my-5">

            <h1>{capitalizeFirstLetter(CurrentCategory.name)}</h1>
            <p>{CurrentCategory.name}</p>
            <div className="flex-row">
                <img
                 src={photo}
                 alt="Counting Calz example"
                 ClassName="img-thumbnail mx-1"
                 />
            </div>

          { /** <h1 id="Projects">Projects</h1>
            <img src={coverImage} className="my-2" 
            style={{ width: "100%" }} alt='cover' /> */}
             
        </section>
    );
}

export default Project;