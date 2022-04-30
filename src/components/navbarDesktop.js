import React from 'react'
import * as styles from '../styles/navbarDesktop.module.scss'
import NavItem from './NavItem'

function NavbarDesktop(props) {
    return (
        <navbar className={styles.NavbarDesktop}>
            <NavItem 
                className={styles.NavbarDesktop}
                text={"Home"}
                icon={'house-solid.svg'}
                alt={'home'}
             />
            <NavItem 
                className={styles.NavbarDesktop}
                text={"Tunes"}
             />
            <NavItem 
                className={styles.NavbarDesktop}
                text={"Frog"}
             />
        </navbar>
    )
}

export default NavbarDesktop