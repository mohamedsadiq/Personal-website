import React from 'react';
import HeaderMin from "../HeaderMin";
import { Analytics } from "@vercel/analytics/react";

const Layout = ({ children }) => {
  return (
    <div className="app">
      <HeaderMin />
      <main className="main">
        {children}
      </main>
      <Analytics />
    </div>
  );
};

export default Layout;
