'use server'
import { cookies } from "next/headers"

export async function setCookie(cookieObject: any) {
    cookies().set(cookieObject)
}


export async function getCookies() {
    return cookies().getAll()
}
