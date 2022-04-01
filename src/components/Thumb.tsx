import React from 'react';

type Props = {
  image: string;
  title: string;
};

const Thumb: React.FC<Props> = ({ image, title }) => {
  return (
    <div>
      <img
        src={image}
        title={title}
        alt={`Movie thumbnail${title ? ' for ' + title : ''}`}
        className={`animate-fadeIn w-full max-w-[720px] object-cover rounded-3xl`}
      />
    </div>
  );
};

export default Thumb;
