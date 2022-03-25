import React from 'react';

// helpers
import { calcTime, convertMoney } from '../helpers';

const Column = ({ children }) => (
  <div className="w-full flex items-center justify-center bg-slate-700 rounded-xl px-6 py-4 my-4 md:m-0">
    {children}
  </div>
);

const MovieInfoBar = ({ time, budget, revenue }) => (
  <div className="flex items-center bg-slate-800 text-slate-50 p-6">
    <div className="max-w-site-content w-full mx-auto md:flex md:space-x-10">
      <Column>Running time: {calcTime(time)}</Column>
      <Column>Budget: {convertMoney(budget)}</Column>
      <Column>Revenue: {convertMoney(revenue)}</Column>
    </div>
  </div>
);

export default MovieInfoBar;
