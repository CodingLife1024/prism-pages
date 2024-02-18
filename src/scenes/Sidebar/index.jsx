import React from 'react'
import styles from './sidebar.module.css'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.texts}>My Website</div>
      <Link to="/books" className={styles.texts}>Books</Link>
      <Link to="/TV" className={styles.texts}>TV</Link>
      <Link to="/about" className={styles.texts}>About</Link>
    </div>
  )
}

export default SideBar;