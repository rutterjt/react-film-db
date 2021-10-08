import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <main>
    404: Not found. Please return to the{' '}
    <Link to="/" className="underline">
      home page
    </Link>
    .
  </main>
);

export default NotFound;
