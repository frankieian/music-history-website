
export const webRoutes = {
    frontPage: '/',
    login: '/login',
    signup: '/signup',
    dashboard: '/dashboard'
}



export const apiRoutes = {
    post: {
        login: '/auth/login',
        refresh_token: '/auth/refresh-token'
    },
    get: {
        user: '/user',
        userSongSummary: '/user/stats/song',
        userArtistSummary: '/user/stats/artist'
    }
}

export const apiTypes = {
    post: "POST",
    get: "GET"
}