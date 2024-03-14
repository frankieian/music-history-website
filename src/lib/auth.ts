import axios from "axios";
import { getAuthToken } from "./cookie";
import { apiRoutes } from "@/const/constant";


export const refreshToken = async () => {
    const token = getAuthToken()
    try {
        if(!token.refreshToken) {
            return {success: false, message: 'No refresh token found'}
        }
        let cookie = `music_history_refresh=${token.refreshToken}`
        let response = await fetch(
            process.env.API_URL + apiRoutes.post.refresh_token, 
            {
                method: "post",
                headers: {
                    'Cookie': cookie,
                },
                credentials: 'include',
            }
        )

        if (!response.ok) {
            const err = await response.json()
            throw new Error(err?.error ?? "Network response was not OK");
        }

        const result = await response.json()  

        return {success: true, result}

    } catch (e:any) {
        return { success: false, message: e?.message ?? "Could not refresh token" };
    }
}