import React from 'react';



const Navigation = ({ currentPage, handlePageChange }) => {

  return ( 

  <header className="flex-row px-1">
   <h2>
      <a data-testid="link" href="/">
       {/*<span role="img"></span> */}
        React Portfolio
      </a>
    </h2>

    <Navigation>
    <ul className="flex-row">
          

        <a href="#project"
        onClick={() => handlePageChange('project')} 
        className={currentPage === 'project' ? 'nav-link active' : 'nav-link'}>
        Projects</a>
 
       <li className="mx-2">
          <a href="#about" 
            onClick={() => handlePageChange('about')} 
            className={currentPage === 'about' ? 'nav-link active' : 'nav-link'}>
            About
          </a>
        </li>

        <a href="#resume"
        onClick={() => handlePageChange('resume')} 
        className={currentPage === 'resume' ? 'nav-link active' : 'nav-link'}>
        Resume
        </a>

        <a href="#contact"
        onClick={() => handlePageChange('contact')} 
        className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'}>
        Contact</a>
     
    </ul>
    </Navigation>
  </header>
  )
}

export default Navigation;


/*
<nav>
             
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
</nav>

);
}*/

