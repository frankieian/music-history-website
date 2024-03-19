import { refreshAccessToken } from "@/actions/account"
import { setCookie } from "@/actions/cookie"
import { refreshToken, spotifyCallback } from "@/lib/auth"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { NextRequest, NextResponse } from "next/server"

export const dynamic = 'force-dynamic' // defaults to auto


export async function GET(request: NextRequest) {
    let urlParams = request.url.split('?')

    if(urlParams.length != 2) redirect('/')

    let params = new URLSearchParams(urlParams[1])
    let code = params.get('code') as string
    let state = params.get('state') as string

    
    let response = await spotifyCallback(code, state)

    return NextResponse.redirect(new URL(response, request.url))

}