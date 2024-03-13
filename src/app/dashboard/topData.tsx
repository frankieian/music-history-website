'use client'

import Heading from "@/components/heading"
import { ChangeEvent, useEffect, useState, useTransition } from "react"
import Option from "@/components/option"
import Container from "@/components/container"
import { artistSummaryAccount, songSummaryAccount } from "@/actions/account"
import { dashboardFilters, dashboardFilterDefault } from "@/const/constant"
import Table from "@/components/table"


export default function TopData (props: {
    songData: any,
    artistData: any
}) {

    const songTable = <Table 
        tableHeadings={['Song', 'Artist', 'Amount']}
        tableDataFormat={['songName', 'artistName', 'count']}
        tableData={props.songData?.data ?? []}
        tableName="top_song"
    />

    const artistTable = <Table 
        tableHeadings={['Artist', 'Amount']}
        tableDataFormat={['name', 'count']}
        tableData={props.artistData?.data ?? []}
        tableName="top_artist"
    />
    //const topSongs = (props.songData?.data ?? []).map((song:any) => <p className="text-2xl py-2 font-semibold">{song.count} x {song.songName}</p>)

    //const topArtists = (props.artistData?.data ?? []).map((artist:any) => <p className="text-2xl py-2 font-semibold">{artist.count} x {artist.name}</p>)
    //md:flex justify-center m-auto w-11/12 md:w-1/2 h-fit
    return (
        
        <div className="">
            <Container 
                className="bg-[#60aab3]"
                >
                    <div>
                        <Heading text="Top songs"/>
                        {songTable}
                    </div>
            </Container>
            <Container 
                className="bg-[#95baed]"
                >
                    <div>
                    <Heading text="Top artists"/>
                    {artistTable}
                    </div>
            </Container>
        </div>
    )
}