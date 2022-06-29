import React, { useState } from 'react';




const PhotoList = () => {

  
  const [photos] = useState([
    {
      name: 'Counting Calz',
      url: 'https://mysterious-spire-64686.herokuapp.com/',
      repo: 'https://github.com/JacobReeder/Counting-Calz',
      screenshot: 'https://github.com/JacobReeder/Counting-Calz/raw/main/public/images/Screenshot.png',
      clicklink: 'Click for Counting Calz Repo'
     
    },
    {
      name: 'PWA-Budget-Tracker',
      url: ' https://mighty-temple-15168.herokuapp.com/',
      repo: 'https://github.com/JacobReeder/pwa-budget-tracker',
      screenshot: 'https://user-images.githubusercontent.com/97851357/175190935-5d004a28-bc3f-478b-9fcf-c52bbe9692d2.png',
      /*clicklink: 'Click for Budget Tracker Repo'*/
    },
    {
      name: 'PIZZA HUNT',
      url: 'https://powerful-sea-43648.herokuapp.com/',
      repo: 'https://github.com/JacobReeder/pizza-hunt',
      screenshot: 'https://user-images.githubusercontent.com/97851357/175192121-d73d1618-3965-43a5-aa10-7d4ff36ac83b.png',
      /*clicklink: 'Click for Pizza Hunt Repo'*/
    },
    {
      name: 'Social Networking API',
      url: 'https://drive.google.com/file/d/1ND8sTkCidcdJPcdw66qGEDRPhqL02lKO/view?usp=sharing',
      repo: 'https://github.com/JacobReeder/Social-Network-API',
      screenshot: 'https://user-images.githubusercontent.com/97851357/175201576-c84cc7d8-f88e-4c5b-b0c3-bc928ccbee8a.png',
      /*clicklink: 'Clck for Social Network Repo'*/
    },
    {
      name: 'README.MD Generator',
      url: 'https://drive.google.com/file/d/1BpTRtz_8-BWdOUcvGdu-R2b86N5oaMO0/view?usp=sharing',
      repo: 'https://github.com/JacobReeder/Proffesional-Readme-Generator',
      screenshot: 'https://user-images.githubusercontent.com/97851357/175748966-b9c0a63b-6e2e-4e42-a1cc-d4ba4b16b850.png',
      /*clicklink: 'Click for README.MD Generator Repo'*/
    },
    {
      name: 'Team Profile Generator',
      url: 'https://drive.google.com/file/d/1D9FQcurw2_nTIjn64RoUrH-zCfGsYHQ2/view?usp=sharing',
      repo: 'https://github.com/JacobReeder/Team-Profile-Generator',
      screenshot: 'https://user-images.githubusercontent.com/97851357/175754375-551750af-7ee6-45b4-9564-9ebf800d9488.png'
    },
  ]);
    
  return (
    <>
  {photos.map((projectMapped => {
    return (
    <div>
      <h2>{projectMapped.name}</h2>
      <h3>
      <a href={projectMapped.url}>
        <img
          src={projectMapped.screenshot}
          alt={projectMapped.name}
          key={projectMapped.name}
        />
      </a>
      </h3>
      <a href={projectMapped.repo}>{projectMapped.name} </a>
      
    </div>
    )
  }))}
</>
)
}

export default PhotoList; 