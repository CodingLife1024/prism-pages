// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TitleList from './scenes/TitleList/index';
import PageLoader from './PageLoader/PageLoader';
import TopBar from './scenes/Topbar';
import SideBar from './scenes/Sidebar';
import Dashboard from './scenes/Dashboard';
import Category from './scenes/Categories';

function App() {
  return (
    <>
      {/* <PageLoader githubLink="https://api.github.com/repos/CodingLife1024/blog-content/contents/README.md" /> */}
      <TopBar />
      <div>
        <SideBar />
        <Dashboard />
        <Category />
      </div>
    </>
  );
}

export default App;
