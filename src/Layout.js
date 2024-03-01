// Layout.js

import React from 'react';
import { Analytics } from '@vercel/analytics/react';

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
};

export default Layout;
