import React from 'react';

type Props = {
  title: string;
};

const Grid: React.FC<Props> = ({ title, children }) => (
  <div className="px-6 py-8">
    <div className="max-w-site-content mx-auto text-xl">
      <h2 className="text-slate-900 mb-4 md:mb-8 text-3xl">{title}</h2>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-6">
        {children}
      </div>
    </div>
  </div>
);

export default Grid;
