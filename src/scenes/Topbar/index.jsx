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
      <div className={styles.intro}>
        <p>Hi, I am Riddhi, a pre-final year Computer Science undergraduate student at IIT Delhi.My interests are AI and ML algorithms, Web and App Development and Game Theory.</p>
      </div>
      <div className={styles.interests}>
        I am a part of <a href="https://facciitd.netlify.app/" target="_blank">Azure</a> (IITD Art Club) and <a href="https://indradhanuiitd.in/" target="_blank">Indradhanu</a> (Queer Collective).
      </div>
    </div>
  )
}

export default TopBar