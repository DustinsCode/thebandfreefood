import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import * as styles from '../styles/landing.module.scss'

const Landing = () => {
    return (
        <div className={styles.content}>
            <StaticImage className={styles.headerImage} src="../images/FF-Header-fade-1280.png" alt="Band members smiling" />
            <h1>Free Food</h1>
        </div>
    )
}

export {Landing}