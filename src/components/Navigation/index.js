import React from 'react'; 

/**
 * 
 *  function categorySelected() {
 * }
 */

function Navigation() {

  /**
   * Example array used to keep the code DRY instead of hardcoding navigation. 
   * Explained in 20.3.3
   * 
   * const categories = [
  {
    name: "Project 1:", description: "",
  },
  { name: "", description: "" },
  {
    name: "",
    description: "",
  },
];
   */

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
        <a href="#about">
          About Me          
        </a>
      </li>
      {/**Add Portfolio page link here */}
      <li>
        <span>Contact</span>
      </li>
      {categories.map((category) => (
        <li
          className="mx-1"
          key={category.name}
        >
        {/**May need to refactor every "category" variable//categoyry ties in with each project on project page? */} 
          <span onClick={() => categorySelected(category.name)} >
      {category.name}
        </span>
        </li>
         ))}

    </ul>
  </nav>
       </header>
    );
}

export default Navigation;