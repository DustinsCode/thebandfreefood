require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
    siteMetadata: {
        title: `Free Food 🎵`,
        siteUrl: `http://freefood.band`
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-plugin-firebase-v9.0',
            options: {
                credentials: {
                    apiKey: process.env.FB_API_KEY,
                    authDomain: process.env.FB_AUTH_DOMAIN,
                    projectId: process.env.FB_PROJECT_ID,
                    storageBucket: process.env.FB_STORAGE_BUCKET,
                    messagingSenderId: process.env.FB_MESSAGE_SENDER_ID,
                    appId: process.env.FB_APP_ID,
                    measurementId: process.env.FB_MEASUREMENT_ID
                }
            }
        },

    ]
}
