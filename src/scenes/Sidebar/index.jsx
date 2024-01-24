import React from 'react'
import styles from './sidebar.module.css'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.texts}>My Website</div>
      <div className={styles.texts}>Books</div>
      <div className={styles.texts}>Movies</div>
      <Link to="/about" className={styles.texts}>About</Link>
    </div>
  )
}

export default SideBar;