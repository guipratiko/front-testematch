import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen">
      {!isHomePage && <Header />}
      <main className={isHomePage ? '' : ''}>
        <Outlet />
      </main>
      {!isHomePage && <Footer />}
    </div>
  );
};
