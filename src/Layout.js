// Layout.js

import React from 'react';
import { Analytics } from '@vercel/analytics/react';

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-FZG9F8BZPG"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-FZG9F8BZPG');
      </script>
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
