import React, { useState, useEffect, useRef } from 'react';

// icon
import { FaSearch } from 'react-icons/fa';

const Icon = React.memo(() => (
  <div className="absolute top-0 bottom-0 left-6 flex flex-col justify-center -z-10">
    <FaSearch className="block text-xl" aria-hidden="true" />
  </div>
));

const Searchbar = ({ setSearchTerm }) => {
  const [input, setInput] = useState('');
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timeout = setTimeout(() => {
      setSearchTerm(input);
    }, 500);
    return () => clearTimeout(timeout);
  }, [setSearchTerm, input]);

  const handle = (setter) => (e) => setter(e.currentTarget.value);

  return (
    <div className="bg-slate-700 text-slate-50 w-full px-6 py-8">
      <div className="max-w-site-content mx-auto">
        <div className="max-w-full rounded-full bg-slate-800 relative z-10 text-lg">
          <input
            id="search-input"
            type="text"
            onChange={handle(setInput)}
            value={input || ''}
            className="block w-full min-w-full h-full min-h-full py-4 pl-16 pr-2 bg-transparent rounded-full peer focus:outline-none focus:ring-2  focus:ring-slate-50 transition-all"
          />
          <label
            htmlFor="search-input"
            className={`leading-normal absolute top-4 left-16 search-input text-slate-300 -z-10 transition-all origin-left peer-focus:scale-75 peer-focus:-translate-y-6 ${
              input ? 'scale-75 -translate-y-6' : ''
            }`}
          >
            Search for movies
          </label>
          <Icon />
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
