import React, { useState } from 'react';




const PhotoList = () => {

  
  const [photos] = useState([
    {
      name: 'Counting Calz',
      url: 'https://mysterious-spire-64686.herokuapp.com/',
      repo: 'https://github.com/JacobReeder/Counting-Calz',
      screenshot: 'https://github.com/JacobReeder/Counting-Calz/raw/main/public/images/Screenshot.png'
     
    },
    {
      name: 'PWA-Budget-Tracker',
      url: ' https://mighty-temple-15168.herokuapp.com/',
      repo: 'https://github.com/JacobReeder/pwa-budget-tracker',
      screenshot: 'https://user-images.githubusercontent.com/97851357/175190935-5d004a28-bc3f-478b-9fcf-c52bbe9692d2.png'
    },
    {
      name: 'PIZZA HUNT',
      url: 'https://powerful-sea-43648.herokuapp.com/',
      repo: 'https://github.com/JacobReeder/pizza-hunt',
      screenshot: 'https://user-images.githubusercontent.com/97851357/175192121-d73d1618-3965-43a5-aa10-7d4ff36ac83b.png'
    },
    {
      name: 'Social Networking API',
      url: 'https://drive.google.com/file/d/1ND8sTkCidcdJPcdw66qGEDRPhqL02lKO/view?usp=sharing',
      repo: 'https://github.com/JacobReeder/Social-Network-API',
      screenshot: 'https://user-images.githubusercontent.com/97851357/175201576-c84cc7d8-f88e-4c5b-b0c3-bc928ccbee8a.png'
    },
    {
      name: '',
      url: '',
      repo: '',
      screenshot: ''
    },
    {
      name: '',
      url: '',
      repo: '',
      screenshot: ''
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