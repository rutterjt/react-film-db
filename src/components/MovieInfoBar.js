import React from 'react';

// helpers
import { calcTime, convertMoney } from '../helpers';

const Column = ({ children }) => (
  <div className="flex items-center justify-center bg-gray-700 rounded-2xl flex-1 py-4 my-5 md:my-0">
    <p>{children}</p>
  </div>
);

const MovieInfoBar = ({ time, budget, revenue }) => (
  <div className="flex items-center min-h-100 bg-gray-800 text-white px-5">
    <div className="block max-w-screen-xl w-full mx-auto md:space-x-5 md:flex">
      <Column>Running time: {calcTime(time)}</Column>
      <Column>Budget: {convertMoney(budget)}</Column>
      <Column>Revenue: {convertMoney(revenue)}</Column>
    </div>
  </div>
);

export default MovieInfoBar;
