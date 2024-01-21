import React from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import PageLoader from '../../PageLoader/PageLoader'
import TitleList from '../TitleList'
import styles from './dashboard.module.css'

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.topics}>Ode to Frankenstein</div>
      <div className={styles.topics}>Ode to Frankenstein</div>
    </div>
  )
}

export default Dashboard