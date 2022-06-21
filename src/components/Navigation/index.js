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

    <nav>
     <ul class="Navigation"> 
        <li>       
        <a href="#project"
        onClick={() => handlePageChange('Project')} 
        className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}>
        Projects</a>
        </li>
 
       <li className="mx-2">
          <a href="#about" 
            onClick={() => handlePageChange('About')} 
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
            About
          </a>
        </li>
        <li>
        <a href="#resume"
        onClick={() => handlePageChange('Resume')} 
        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
        Resume
        </a>
        </li>
       <li>
        <a href="#contact"
        onClick={() => handlePageChange('Contact')} 
        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
        Contact</a>
        </li>    
      </ul>
    </nav>
  </header>
  )
}

export default Navigation;


