import axios from "axios";
import { getAuthToken } from "./cookie";
import { apiRoutes } from "@/const/constant";
import { generateRandomString } from "./utils";
import { redirect } from 'next/navigation'
import { cookies } from "next/headers";

export const spotifyLogin = () => {
    var state = generateRandomString(16);
    var scope = 'user-read-private user-read-email user-read-recently-played';
    redirect('https://accounts.spotify.com/authorize?' +
        new URLSearchParams({
        response_type: 'code',
        client_id: process.env.SPOTIFY_CLIENT_ID ?? '',
        scope: scope,
        redirect_uri: process.env.SPOTIFY_REDIRECT_UI ?? '',
        state: state
    }))
}

export async function spotifyCallback(spotCode: string, spotState: string) {
    var code = spotCode || null;
    var state = spotState || null;
  
    console.log(code,state)
    if (state === null) {
      return '/'
    } else {
      try{
        let response = await axios.request({
          method: "POST",
          url: process.env.API_URL + apiRoutes.post.spotifyLogin,
          data: {code, state},
          headers: {
            "content-type": "application/json",
          }
        })
        console.log(response.data)
        if(!response.data.bearerToken || !response.data.refreshToken) {
            redirect('/')
        } else {
            cookies().set({
                name: "music_history_token",
                value: response.data.bearerToken.type + " " + response.data.bearerToken.token,
                secure: true,
                httpOnly: true,
                sameSite: 'strict',
                expires: new Date(response.data.bearerToken.expiresIn * 1000)
            })
            cookies().set({
                name: "music_history_refresh",
                value: response.data.refreshToken.token,
                secure: true,
                httpOnly: true,
                sameSite: 'strict',
                expires: new Date(response.data.refreshToken.expiresIn * 1000)
            })
            console.log("redirect to dashboard")
            return'/dashboard'
        }
        //If code is not valid, then redirect 

        //return res.status(HttpStatusCodes.OK).json(response.data);
      } catch(err) {
        console.log("redirect to err", err)

        return '/'
      }
    }
}
  


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