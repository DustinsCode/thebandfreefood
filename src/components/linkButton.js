import React from 'react'
import * as styles from '../styles/linkButton.module.scss'

function LinkButton(props) {
    return (
        //TODO: add hover animation
        //TODO: make this pull up modal with links to other music outlets
        <button>
            <a href='https://open.spotify.com/artist/19yT2G1cULygYhO2ijQiPi?si=_HP6KXZYRuuVxqjeyA0wKw' target="_blank">
                {props.text}
            </a>
        </button>
    )
}

export default LinkButton