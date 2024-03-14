
export const webRoutes = {
    frontPage: '/',
    login: '/login',
    signup: '/signup',
    dashboard: '/dashboard'
}

export const webURL = process.env.WEB_URL

export enum dashboardFilterOptions {
    'Day' = 'Day',
    'Week' = 'Week',
    'Month' = 'Month',
}

export const dashboardFilters = Object.keys(dashboardFilterOptions)
export const dashboardFilterDefault = dashboardFilterOptions.Month

export const apiRoutes = {
    post: {
        login: '/auth/login',
        refresh_token: '/auth/refresh-token',
        revoke_token: '/auth/revoke-token'
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