// PageLoader.jsx

import React from 'react'
import GitHubFileLoader from '../FileLoader/GitHubFileLoader';
import styles from './pageloader.module.css'

const PageLoader = ( {githubLink} ) => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.sub}>
        <GitHubFileLoader githubLink={githubLink} />
      </div>
    </div>
  )
}

export default PageLoader