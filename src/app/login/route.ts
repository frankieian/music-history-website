import { spotifyLogin } from "@/lib/auth";
import { refreshToken, spotifyCallback } from "@/lib/auth"
import { NextRequest, NextResponse } from "next/server"
import { redirect } from "next/navigation"

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(request: NextRequest) {
    spotifyLogin()
}