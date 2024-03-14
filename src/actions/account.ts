'use server'
import { revalidatePath } from 'next/cache';
import { z } from 'zod'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
import { apiRoutes, apiTypes } from '@/const/constant';
import { getArtistSummary, getSongSummary } from '@/lib/account';
import { getAuthToken } from '@/lib/cookie';
import { refreshToken } from '@/lib/auth';

export async function loginAccount(prevState: {
    message: string
}, formData: FormData) {
    console.log('triggered')
    const schema = z.object({
        username: z.string().min(1, {message: 'Must be 1 or more characters long'}),
        password: z.string().min(1, {message: 'Must be 1 or more characters long'})
    });

    //Validate form fields
    const validatedFields = schema.safeParse({
        username: formData.get("username"),
        password: formData.get("password"),

    });

    if (!validatedFields.success) {
        return { message: 'Invalid Fields In Form', ...validatedFields.error.flatten().fieldErrors };
    }

    const data = validatedFields.data;

    try {
        let response = await fetch(
            process.env.API_URL + apiRoutes.post.login,
            {
                method: apiTypes.post,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data) 
            }
        )

        if (!response.ok) {
            const err = await response.json()
            throw new Error(err?.error ?? "Network response was not OK");
        }

        const result = await response.json()  
        const bearerToken = result.bearerToken
        const refreshToken = result.refreshToken

        revalidatePath("/");

        console.log(bearerToken, refreshToken, new Date(bearerToken.expiresIn * 1000))

        cookies().set({
            name: "music_history_token",
            value: bearerToken.type + " " + bearerToken.token,
            secure: true,
            httpOnly: true,
            sameSite: 'strict',
            expires: new Date(bearerToken.expiresIn * 1000)
        })
        cookies().set({
            name: "music_history_refresh",
            value: refreshToken.token,
            secure: true,
            httpOnly: true,
            sameSite: 'strict',
            expires: new Date(refreshToken.expiresIn * 1000)
        })
    } catch (e:any) {
        console.log(e)
        return { message: e?.message ?? "Could not login" };
    }

    redirect('/dashboard')
}

export async function refreshAccessToken() {
    try {
        console.log("trying to refresh token")
        let response = await refreshToken()

        if(response.success && response.result) {
            return response.result
        } 
        else {
            return {message: 'Could not refresh token please try again'}
        }
    } catch (e:any) {
        console.log('refreshAccessToken', e)
        return {message: e?.message ?? 'Could not refresh token please try again'}
    }
}

export async function logoutAccount() {
    let refreshToken = cookies().get('music_history_refresh')
    try {
        let response = await fetch(
            process.env.API_URL + apiRoutes.post.revoke_token,
            {
                method: apiTypes.post,
                headers: {
                    "Content-Type": "application/json",
                    Cookie: `music_history_refresh=${refreshToken}`
                }
            }
        )
        if (!response.ok) {
            const err = await response.json()
            throw new Error(err?.error ?? "Network response was not OK");
        }
    } catch (e:any) {
    }

    cookies().delete('music_history_token')
    cookies().delete('music_history_refresh')
    redirect('/')


}

export async function getServerTokens() {
    let response = getAuthToken()
    return response
}


export async function songSummaryAccount(option: string, notUseInstance?: boolean) {
    try {
        console.log('songSummaryAccount')
        let data = await getSongSummary(option, notUseInstance)

        return data
    } catch (e:any) {
        return { message: e?.message ?? "Could not login" };
    }
}

export async function artistSummaryAccount(option: string, notUseInstance?: boolean) {
    try {
        console.log('artistSummaryAccount')

        let data = await getArtistSummary(option, notUseInstance)

        return data
    } catch (e:any) {
        return { message: e?.message ?? "Could not login" };
    }
}