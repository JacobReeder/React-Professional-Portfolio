import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers"; 


function Navigation(props) {

    const {
      categories = [],
      setCurrentCategory,
      currentCategory,
    } = props;

    const handleClick = (item) => {
      console.log(item);
      return item;
    };

   
    return (

       <header classNAme="flex-row px-1">
          <h2>
            <a data-testid="link" href="/">
              <span role="img"></span> 
              React Portfolio
            </a>
          </h2>
       <nav>
         <ul className="flex-row">
           <li className="mx-2">
            <a data-testid="about" href="#about">
             About Me          
            </a>
            </li>              
             <li className={"mx-2"}>
                <span onClick={() => handleClick('Projects')}>
                  Projects         
                </span>
             </li>
               {categories.map((category) => (
                <li className={`mx-1 ${
                  currentCategory.name === category.name
                }`} key={category.name}>
                <span
                  onClick={() => {
                      setCurrentCategory(category);
                  }}
                >
                  {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;