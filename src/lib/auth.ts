import axios from "axios";
import { getAuthToken } from "./cookie";
import { apiRoutes } from "@/const/constant";




export const refreshToken = async () => {
    const token = getAuthToken()

    try {
        let response = await axios.get(process.env.API_URL + apiRoutes.post.refresh_token, {
            headers: {
                'Cookie': `music_history_refresh=${token.refreshToken}`
            }
        })

        if (response.status != 200) {
            const err = await response.data
            throw new Error(err?.error ?? "Network response was not OK");
        }

        const result = await response.data

        return {success: true, result}

    } catch (e:any) {
        return { success: false, message: e?.message ?? "Coult not obtain user data" };
    }
}