import React from 'react'
import * as styles from '../styles/navbarDesktop.module.scss'
import { StaticImage } from 'gatsby-plugin-image'

function NavItem(props) {
    return (
        <a href={props.link} className={styles.navbarDesktop}>
            <div>{props.text}</div>
            <StaticImage className={styles.navbarDesktop} src={`../images/" ${props.icon}`} alt={props.alt} />
        </a>
    )
}

export default NavItem