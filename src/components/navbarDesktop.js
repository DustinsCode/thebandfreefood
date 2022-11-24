import React from 'react'
import * as styles from '../styles/navbarDesktop.module.scss'
import NavItem from './NavItem'
import { FaHome } from 'react-icons/fa'
import { FaHeadphones } from 'react-icons/fa'
import { FaFrog } from 'react-icons/fa'

function NavbarDesktop(props) {
    const iconSize = 50
    //TODO: make list that holds objects for nav items, then loop through to render it

    return (
        <navbar className={styles.NavbarDesktop}>
            <NavItem
                className={styles.NavbarDesktop}
                text={'Home'}
                icon={<FaHome size={iconSize} />}
                link={'/'}
                target="_self"
            />

            <NavItem
                className={styles.NavbarDesktop}
                text={'Tunes'}
                icon={<FaHeadphones size={iconSize} />}
                link="https://open.spotify.com/artist/19yT2G1cULygYhO2ijQiPi?si=_HP6KXZYRuuVxqjeyA0wKw"
                target="_blank"
            />

            <NavItem
                className={styles.NavbarDesktop}
                text={'Frog'}
                icon={<FaFrog size={iconSize} />}
                link={'https://en.pimg.jp/048/818/553/1/48818553.jpg'}
                target="_blank"
            />
        </navbar>
    )
}

export default NavbarDesktop
