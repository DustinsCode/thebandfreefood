import React, {useEffect} from 'react'
import app from 'gatsby-plugin-firebase-v9.0'
import { getAnalytics, logEvent } from 'firebase/analytics'
import AudioPlayer from './audioPlayer'
import * as styles from '../styles/listenModal.module.scss'
import LinkButton from './linkButton'

function ListenModal({ setIsOpen }) {

    useEffect(() => {
        if(app) {
            const analytics = getAnalytics(app)
            logEvent(analytics,'audio player opened')
        }
    }, [app])

    const links = [
        {
            text: 'Spotify',
            link: 'https://open.spotify.com/artist/19yT2G1cULygYhO2ijQiPi?si=_HP6KXZYRuuVxqjeyA0wKw'
        },
        {
            text: 'Apple Music',
            link: 'https://music.apple.com/us/artist/free-food/1437601603'
        },
        {
            text: 'Amazon Music',
            link: 'https://www.amazon.com/gp/product/B07X489T5S'
        },
        {
            text: 'SoundCloud (Demos)',
            link: 'https://soundcloud.com/thebandfreefood'
        }
    ]

    // return(
    //     <div>
    //         <h1>Audio</h1>
    //         <AudioPlayer />
    //     </div>
    // )

    return (
        <div>
            <div
                className={styles.darkBackground}
                onClick={() => setIsOpen(false)}
            />{' '}
            {/* this is the darkened background */}
            <div className={styles.centered}>
                <div className={styles.modal}>
                    <div className={styles.header}>
                        <h2>Listen Now!</h2>
                    </div>{' '}
                    {/* header*/}
                    <div className={styles.modalContent}>
                        {' '}
                        {/* content*/}
                        {links.map((link) => (
                            <LinkButton key={link.text} link={link} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListenModal
