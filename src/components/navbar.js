import React, { useState } from 'react'
import styles from '../css/navbar.module.css'
//import { Link } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaAlignRight } from 'react-icons/fa'
import links from '../constants/links'
import socialIcons from '../constants/social-icons'
// import logo from '../images/logo.png'
import logo from "../images/stlogo1.jpg"


const Navbar = () => {
  const [isOpen, setNav] = useState(false) //Hook -isOpen true/false
    const toggleNav = () => {
  setNav(isOpen => !isOpen) //Hook -false
 }
//console.log(isOpen)
 return (
  <nav className={styles.navbar}>
   <div className={styles.navCenter}>
    <div className={styles.navHeader}>
   <img src={logo} alt='intervention logo' />
     <button type='button' className={styles.logoBtn} onClick={toggleNav}>
       <FaAlignRight className={styles.logoIcon} />
     </button>
    </div>
    <ul className={isOpen? `${styles.navLinks} ${styles.showNav}` :`${styles.navLinks}`}>

      {links.map((item, index) => {
        return (
          <li key={index}>
            <AniLink fade to={item.path}>{item.text}</AniLink>
          </li>
        )
      })}
    </ul>
    
    <div className={styles.navSocialLinks}>
      {socialIcons.map((item, index) => {
        return <a key={index} href={item.url} target='_blank' rel='noopener noreferrer'>{item.icon}</a>
      })}
    </div>
   </div>
  </nav>
 )
}

export default Navbar
