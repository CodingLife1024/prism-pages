import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PageLoader from '../../PageLoader/PageLoader'
import TitleList from '../TitleList'

const Dashboard = () => {
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<TitleList />} />
        <Route path="/ttt" element={<PageLoader githubLink="https://api.github.com/repos/CodingLife1024/blog-content/contents/README.md" />} />
      </Routes> */}
      Dashboard
    </div>
  )
}

export default Dashboard