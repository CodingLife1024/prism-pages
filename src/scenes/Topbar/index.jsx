import React from 'react'
import styles from './topbar.module.css'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const TopBar = () => {
  const style = { color: "#DBF8FA", fontSize: "30px"}
  return (
    <div className={styles.topbar}>
      <div className={styles.name}>Riddhi</div>
      <div className={styles.social}>
        <FaGithub style={style} />
        <FaLinkedin style={style} />
        <FaInstagram style={style} />
        <FaFacebook style={style} />
        <FaTwitter style={style} />
      </div>
      <div className={styles.intro}><p>Just a Computer Science student.</p> </div>
      <div className={styles.interests}>I am interested in....</div>
    </div>
  )
}

export default TopBar