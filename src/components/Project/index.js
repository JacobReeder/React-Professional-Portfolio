import React from 'react'; 
import PhotoList from '../PhotoList'; 
import { capitalizeFirstLetter } from '../../utils/helpers';

/* This page is the equivalent of "portfolio" for the project requirements */

function Project(props) {
   
    const { CurrentCategory } = props;

    return (

        <section>
         <h1 data-testid="h1tag">{capitalizeFirstLetter(CurrentCategory.name)}</h1>
         <p>{CurrentCategory.description}</p>
         <PhotoList category={CurrentCategory.name} />       
        </section>
    );
}

export default Project;