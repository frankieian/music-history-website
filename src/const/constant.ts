
export const webRoutes = {
    frontPage: '/',
    login: '/login',
    signup: '/signup',
    dashboard: '/dashboard'
}

export const containerColours = {
    first: 'bg-[#A8C7CD]',
    second: 'bg-[#D0D7EF]',
    third: 'bg-[#f6cffd]'
}

export const webURL = process.env.WEB_URL

export enum dashboardFilterOptions {
    'Day' = 'Day',
    'Week' = 'Week',
    'Month' = 'Month',
}

export const dashboardFilters = Object.keys(dashboardFilterOptions)
export const dashboardFilterDefault = dashboardFilterOptions.Month

export const defaultPageSize = 20

export const apiRoutes = {
    post: {
        login: '/auth/login',
        spotifyLogin: '/auth/login/spotify',
        refresh_token: '/auth/refresh-token',
        revoke_token: '/auth/revoke-token'
    },
    get: {
        user: '/user',
        userSongSummary: '/user/stats/song',
        userArtistSummary: '/user/stats/artist',
        history: '/user/history'
    }
}

export const apiTypes = {
    post: "POST",
    get: "GET"
}