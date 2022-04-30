import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import LinkButton from '../components/linkButton'
import * as styles from '../styles/landing.module.scss'

const Landing = () => {
    return (
        //TODO: make this look not like garbage on desktop
        <div className={styles.content}>
            <StaticImage className={styles.headerImage} src="../images/FF-Header-fade-1280.png" alt="Band members smiling" />
            <h1>Free Food</h1>
            <LinkButton text="LISTEN NOW" link="https://open.spotify.com/artist/19yT2G1cULygYhO2ijQiPi?si=_HP6KXZYRuuVxqjeyA0wKw" />
        </div>
    )
}

export {Landing}