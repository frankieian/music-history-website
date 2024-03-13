import axios from "axios"
import { refreshAccessToken } from "@/actions/account";
import { getAuthToken } from "./cookie";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { setCookie } from "@/actions/cookie";

export const axiosApiInstance = axios.create({
    withCredentials: true
})
axiosApiInstance.interceptors.request.use(
    async config => {
        let token = getAuthToken()
        if(!token.token && token.refreshToken) {
            const access_token = await refreshAccessToken();  
            
            if(access_token?.message ) {
                return Promise.reject(new Error('Could not refresh token, please try again or refresh page'))
            }  
              if(!access_token.type || !access_token.token) {
                return Promise.reject(new Error('Could not refresh token, please try again or refresh page'))
            }

            setCookie({
                name: "music_history_token",
                value: access_token.type + " " + access_token.token,
                secure: true,
                httpOnly: true,
                sameSite: 'strict',
                expires: new Date(access_token.expiresIn * 1000)
            })
        }

        token = getAuthToken()

        config.headers = {
            'Authorization': token.token,
            "Content-Type": "application/json",
        } as any
        return config;
        },
    error => {
      Promise.reject(error)
});
  

axiosApiInstance.interceptors.response.use((response) => {
    return response
  }, async function (error) {
    const originalRequest = error.config;
    if (error?.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const access_token = await refreshAccessToken(); 
      if(access_token?.message ) {
        return Promise.reject(new Error('Could not refresh token, please try again or refresh page'))
      }  
      if(!access_token.type || !access_token.token) {
        return Promise.reject(new Error('Could not refresh token, please try again or refresh page'))
      }
      setCookie({
                name: "music_history_token",
                value: access_token.type + " " + access_token.token,
                secure: true,
                httpOnly: true,
                sameSite: 'strict',
                expires: new Date(access_token.expiresIn * 1000)
            })
      
      return axiosApiInstance(originalRequest);
    }
    return Promise.reject(error);
});


