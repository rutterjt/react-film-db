import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../components/Layout';

const NotFound = () => (
  <Layout title="404">
    <div className="min-h-[60vh] py-12 px-6 max-w-site-content mx-auto">
      <div className="max-w-prose">
        <h1 className="text-2xl md:text-4xl mb-6">404: Not found.</h1>
        <p className="mb-4">
          Sorry! We couldn't find the page you were looking for.
        </p>
        <p className="mb-6">
          It may have been moved or deleted, or never existed at all.
        </p>
        <Link
          to="/"
          className="inline-block bg-slate-700 text-slate-50 py-2 px-6 rounded-2xl hover:opacity-80 focus:opacity-80 transition-opacity text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white"
        >
          Home
        </Link>
      </div>
    </div>
  </Layout>
);

export default NotFound;
