import React from 'react';

// fallback image
import NoImage from '../images/no_profile_picture.png';

const Actor = ({ name, character, imageUrl }) => (
  <div>
    <section className="h-auto bg-gray-800 p-2 rounded-2xl text-white text-center">
      <img
        className="block w-full h-auto rounded-xl"
        src={imageUrl}
        alt={`Thumbnail image of ${name}`}
      />
      <h3 className="mt-4 mb-2 text-lg font-bold">{name}</h3>
      <p className="mb-2 text-base">{character}</p>
    </section>
  </div>
);

export default Actor;
