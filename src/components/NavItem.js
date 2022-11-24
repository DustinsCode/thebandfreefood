import React from 'react'
import * as styles from '../styles/navbarDesktop.module.scss'

function NavItem(props) {
    return (
        <a target={props.target} href={props.link} className={styles.navButton}>
            <div>{props.text}</div>
            <nav className={styles.navbarDesktop}>{props.icon}</nav>
        </a>
    )
}

export default NavItem
