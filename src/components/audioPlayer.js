import React, { useEffect } from 'react'
import app from 'gatsby-plugin-firebase-v9.0'
import { getAnalytics, logEvent } from 'firebase/analytics'

function AudioPlayer() {

    // const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        if(app) {
            const analytics = getAnalytics(app)
            logEvent(analytics,'audio player opened')
        }
    }, [app])


    return (
        <div>Audio Player</div>
    )
}

export default AudioPlayer
