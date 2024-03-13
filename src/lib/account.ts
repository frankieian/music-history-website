import { apiRoutes, apiTypes } from "@/const/constant";
import axios, { AxiosInstance } from "axios"
import { cookies } from "next/headers";
import { getAuthToken } from "./cookie";
import { axiosApiInstance } from "./axios";

export async function getAccount() {
    const token = getAuthToken()

    try {
        let response = await axios.get(process.env.API_URL + apiRoutes.get.user, {
            headers: {
                Authorization: token.token
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


export async function getSongSummary(option: string, notUseInstance?: boolean) {
    const token = getAuthToken()
    const dateNow = new Date()
    const dateFrom = new Date()
    if(option == 'Month') dateFrom.setMonth(dateNow.getMonth() - 1)
    if(option == 'Week') dateFrom.setDate(dateNow.getDate() - 7)
    if(option == 'Day') dateFrom.setDate(dateNow.getDate() - 1)

    try {
        let response = await  (notUseInstance ? axios :axiosApiInstance).get(process.env.API_URL + apiRoutes.get.userSongSummary, {
            headers: {
                "Content-Type": "application/json",
                Authorization: token.token
            },
            data: {
                "pageSize": 3,
                "page": 1,
                "dateFrom": dateFrom.toISOString(),
                "dateTo": dateNow.toISOString(),
                
            }
        })

        if (response.status != 200) {
            const err = await response.data
            throw new Error(err?.error ?? "Network response was not OK");
        }

        const result = await response.data

        return result

    } catch (e:any) {
        return { message: e?.message ?? "Coult not obtain user data" };
    }
}

export async function getArtistSummary(option: string, notUseInstance?: boolean) {
    const token = getAuthToken()
    const dateNow = new Date()
    const dateFrom = new Date()
    if(option == 'Month') dateFrom.setMonth(dateNow.getMonth() - 1)
    if(option == 'Week') dateFrom.setDate(dateNow.getDate() - 7)
    if(option == 'Day') dateFrom.setDate(dateNow.getDate() - 1)
    try {
        let response = await (notUseInstance ? axios :axiosApiInstance).get(process.env.API_URL + apiRoutes.get.userArtistSummary, {
            headers: {
                "Content-Type": "application/json",
                Authorization: token.token
            },
            data: {
                "pageSize": 3,
                "page": 1,
                "dateFrom": dateFrom.toISOString(),
                "dateTo": dateNow.toISOString()
            }
        })

        if (response.status != 200) {
            const err = await response.data
            throw new Error(err?.error ?? "Network response was not OK");
        }

        const result = await response.data

        return result

    } catch (e:any) {
        return { message: e?.message ?? "Coult not obtain user data" };
    }
}
