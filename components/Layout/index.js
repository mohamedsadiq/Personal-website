import React from 'react';
import HeaderMin from "../HeaderMin";
import HeaderGlass from "../HeaderGlass";

import { Analytics } from "@vercel/analytics/react";

const Layout = ({ children }) => {
  return (
    <div className="app">
      <HeaderGlass />
      <main className="main">
        {children}
      </main>
      <Analytics />
    </div>
  );
};

export default Layout;
