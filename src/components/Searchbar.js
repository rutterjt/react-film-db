import React, { useState, useEffect, useRef } from 'react';

// icon
import { FaSearch } from 'react-icons/fa';

const Searchbar = ({ setSearchTerm }) => {
  const [state, setState] = useState('');
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timeout = setTimeout(() => {
      setSearchTerm(state);
    }, 500);
    return () => clearTimeout(timeout);
  }, [setSearchTerm, state]);

  const handle = (setter) => (e) => setter(e.currentTarget.value);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-700 py-5 flex item-center h-24 px-5">
      <div className="text-white relative max-w-screen-xl w-full h-full mx-auto bg-gray-700 rounded-full">
        <input
          className="block h-full bg-transparent text-xl absolute left-0 px-16 w-full outline-none rounded-full focus:ring-2 focus:ring-gray-400"
          type="text"
          placeholder="Search for movies"
          onChange={handle(setState)}
          value={state}
        />
        <FaSearch className="absolute left-4 top-4 text-2xl" />
      </div>
    </div>
  );
};

export default Searchbar;
