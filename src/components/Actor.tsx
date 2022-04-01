import React from 'react';

// fallback image
import NoImage from '../images/no-avatar.png';

type Props = {
  name: string;
  character: string;
  imageUrl: string;
};

const Actor: React.FC<Props> = ({ name, character, imageUrl }) => (
  <section className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-2 text-white text-center">
    <img
      src={imageUrl || NoImage}
      alt={`Thumbnail of ${name}`}
      className="block w-full h-52 object-cover rounded-2xl mb-4"
    />
    <h3 className="text-xl font-bold mb-2">{name}</h3>
    <p className="text-base mb-2">{character}</p>
  </section>
);

export default Actor;
