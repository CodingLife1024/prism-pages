import React from 'react'
import styles from './sidebar.module.css'

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.texts}>My Website</div>
      <div className={styles.texts}>Books</div>
      <div className={styles.texts}>Movies</div>
      <div className={styles.texts}>About</div>
    </div>
  )
}

export default SideBar