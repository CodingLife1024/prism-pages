// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TitleList from './scenes/TitleList/index';
import PageLoader from './PageLoader/PageLoader';
import TopBar from './scenes/Topbar';
import SideBar from './scenes/Sidebar';
import Dashboard from './scenes/Dashboard';
import Category from './scenes/Categories';
import "./App.css"

function App() {
  return (
    <>
      {/* <PageLoader githubLink="https://api.github.com/repos/CodingLife1024/blog-content/contents/README.md" /> */}
      <div className='full'>
        <TopBar />
        <div className="main-container">
          <Category />
          <Dashboard />
          <SideBar />
        </div>
      </div>
    </>
  );
}

export default App;
