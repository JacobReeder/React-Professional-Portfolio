import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers"; 


function Navigation() {

  /** Example array used to keep the code DRY instead of hardcoding navigation. 
    Explained in 20.3.3 **/

    const categories = [
  {
    name: "Project 1:", description: "",
  },
  { name: "", description: "" },
  {
    name: "",
    description: "",
  },
];

function handleClick() {
   }
   

    return (

       <header>
          <h2>
    <a href="/">
      <span role="img"> </span> React Portfolio
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about" onClick={() => handleClick()}>
          About Me          
        </a>
      </li>
      {/**Add Portfolio page link here */}
      <li className={"mx-2"}>
        <span onClick={() => handleClick()}>
          Contact
        </span>
      </li>
      {categories.map((category) => (
        <li
          className="mx-1"
          key={category.name}
        >
        {/**May need to refactor every "category" variable//categoyry ties in with each project on project page? */} 
          <span onClick={() => { handleClick(); }}>
            {capitalizeFirstLetter(category.name)}       
         </span>
        </li>
        ))
      }
   </ul>
  </nav>
  </header>
  );
}

export default Navigation;