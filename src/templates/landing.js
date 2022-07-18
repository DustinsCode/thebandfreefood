import { StaticImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import * as styles from '../styles/landing.module.scss'
import ListenModal from '../components/listenModal'

const Landing = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className={styles.content}>
            <StaticImage 
                className={styles.headerImage}
                placeholder="blurred"
                src="../images/FF-Header-fade-1280.png" alt="Band members smiling" />
            <h1>Free Food</h1>
            
            <button onClick={() => setIsModalOpen(true)}>
                LISTEN NOW
            </button>
            {isModalOpen && <ListenModal setIsOpen={setIsModalOpen} />}
        </div>
    )
}

export {Landing}