import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../components/Layout';

const NotFound = () => (
  <Layout title="404">
    404: Not found. Please return to the{' '}
    <Link to="/" className="underline">
      home page
    </Link>
    .
  </Layout>
);

export default NotFound;
