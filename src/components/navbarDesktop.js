import React from 'react'
import * as styles from '../styles/navbarDesktop.module.scss'
import NavItem from './NavItem'
import { FaHome } from 'react-icons/fa';
import { FaHeadphones } from 'react-icons/fa';
import { FaFrog } from 'react-icons/fa';

function NavbarDesktop(props) {

    const iconSize = 50

    return (
        <navbar className={styles.NavbarDesktop}>
            <NavItem 
                className={styles.NavbarDesktop}
                text = {"Home"}
                icon = {<FaHome size={iconSize}/>}
                link = {"https://thebandfreefoodmain.gatsbyjs.io/"}
            />

            <NavItem 
                className={styles.NavbarDesktop}
                text={"Tunes"}
                icon = {<FaHeadphones size={iconSize}/>}
                link="https://open.spotify.com/artist/19yT2G1cULygYhO2ijQiPi?si=_HP6KXZYRuuVxqjeyA0wKw"
             />

            <NavItem 
                className={styles.NavbarDesktop}
                text={"Frog"}
                icon = {<FaFrog size={iconSize}/>}
                link = {"https://en.pimg.jp/048/818/553/1/48818553.jpg"}
             />
             
        </navbar>
    )
}

export default NavbarDesktop