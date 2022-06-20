import React, { useState } from 'react'



function PhotoList({ category }) {

  const [photos] = useState([
    {
      name: 'Counting Calz',
      category: 'Projects',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
  ]);
    
  const currentPhotos = photos.filter((photo) => photo.category === category);

  return (
    <div>
      <div className="flex-row">
        {photos.map((image, i) => (
          <img
            src={require(`../../assets/Projects/${category}/${i}.png`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
            
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;