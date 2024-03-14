import { webURL } from "@/const/constant"
import { cookies } from "next/headers"

export function getAuthToken() {
    const cookieStore = cookies()
    const token = cookieStore.get('music_history_token')?.value
    const refreshToken = cookieStore.get('music_history_refresh')?.value

    return {
        token, refreshToken
    }
}