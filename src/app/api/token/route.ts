import { refreshAccessToken } from "@/actions/account"
import { setCookie } from "@/actions/cookie"
import { refreshToken } from "@/lib/auth"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"


export const dynamic = 'force-dynamic' // defaults to auto


export async function GET(request: Request) {
    console.log("Redirected to fetch token")
    const access_token = await refreshAccessToken()
    const url = request.url.split('?')

    if(access_token.type && access_token.token) {

        setCookie({
            name: "music_history_token",
            value: access_token.type + " " + access_token.token,
            secure: true,
            httpOnly: true,
            sameSite: 'strict',
            expires: new Date(access_token.expiresIn * 1000)
        })

        if(url.length == 2) {
            redirect(url[1])
        }
        redirect('/dashboard')

    } else {
        cookies().delete('music_history_refresh')
        cookies().delete('music_history_token')

        redirect('/login')
    }
    
   
  }