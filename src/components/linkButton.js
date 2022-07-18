import React from 'react'
import * as styles from '../styles/linkButton.module.scss'

function LinkButton(props) {
    return (
        <button>
            <a href={props.link.link} target="_blank">
                <span>{props.link.text}</span>
            </a>
            
        </button>
    )
}

export default LinkButton