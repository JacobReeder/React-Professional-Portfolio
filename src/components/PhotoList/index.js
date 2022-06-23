import React, { useState } from 'react';




const PhotoList = () => {

  
  const [photos] = useState([
    {
      name: 'Counting Calz',
      url: 'https://mysterious-spire-64686.herokuapp.com/',
      repo: 'https://github.com/JacobReeder/Counting-Calz',
      screenshot: 'https://github.com/JacobReeder/Counting-Calz/raw/main/public/images/Screenshot.png'
     
    },
  ]);
    
  return (
    <>
  {photos.map((projectMapped => {
    return (
    <div className='project-div-wrapper d-grid'>
      <h2>{projectMapped.name}</h2>
      <a href={projectMapped.url}>
        <img
          src={projectMapped.screenshot}
          alt={projectMapped.name}
          className="project-img"
          key={projectMapped.name}
        />
      </a>
      <a href={projectMapped.repo}>{projectMapped.name} </a>
    </div>
    )
  }))}
</>
)
}

export default PhotoList; 