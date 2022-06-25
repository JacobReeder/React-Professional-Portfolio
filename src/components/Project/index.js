import React from 'react'; 
import PhotoList from '../PhotoList'; 
import background from "../../assets/Projects/fog.jpg"



const Project = () => {
   
   

    return (
     <div>
      <h1 style={{ backgroundImage: `url(${background})` }}>
      <div><PhotoList/></div>
      </h1>
       
       <h3 className="link-style"></h3>
     </div>
       
    )
}

export default Project;