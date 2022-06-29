import React from 'react';
import background from "../../assets/Projects/fog.jpg"




const Navigation = ({ currentPage, handlePageChange }) => {

  return ( 
    
      
  <header style={{ backgroundImage: `url(${background})` }}>
   <h2>
   
   <div>
      
      <a data-testid="link" href="/">
        React Portfolio
      </a>
      </div>
    </h2>

    <nav>
     <ul className="navigation"> 
       <li>        
          <a href="#project"
          onClick={() => handlePageChange('Project')} 
          className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}>
           Projects</a>
       </li>  
       <li>
         <a href="#about" 
            onClick={() => handlePageChange('About')} 
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
            About
         </a>
       </li>
        
        
        <a href="#resume"
        onClick={() => handlePageChange('Resume')} 
        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
        Resume
        </a>
        
       
        <a href="#contact"
        onClick={() => handlePageChange('Contact')} 
        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
        Contact</a>
           
      </ul>
    </nav>
  </header>
  
  )
}

export default Navigation;


