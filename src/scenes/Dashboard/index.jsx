import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PageLoader from '../../PageLoader/PageLoader'
import TitleList from '../TitleList'
import styles from './dashboard.module.css'

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      {/* <Routes>
        <Route path="/" element={<TitleList />} />
        <Route path="/ttt" element={<PageLoader githubLink="https://api.github.com/repos/CodingLife1024/blog-content/contents/README.md" />} />
      </Routes> */}
      <div className={styles.topics}>Ode to Frankenstein</div>
      <div className={styles.topics}>Ode to Frankenstein</div>
    </div>
  )
}

export default Dashboard