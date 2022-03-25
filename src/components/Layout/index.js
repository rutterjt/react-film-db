import React from 'react';

import { Helmet } from 'react-helmet-async';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ title, children }) => {
  const pageTitle = title ? `${title} | RFDB` : 'React Film Database';
  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
