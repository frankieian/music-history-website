'use client'

import Heading from "@/components/heading"
import { ChangeEvent, useEffect, useState, useTransition } from "react"
import Option from "@/components/option"
import Container from "@/components/container"
import { dashboardFilters, dashboardFilterDefault, containerColours } from "@/const/constant"
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

    return (
        
        <div className="">
            <Container 
                className={`${containerColours.second}`}
                >
                    <div>
                        <Heading text="Your top songs were" className="text-[#187F6C]"/>
                        {songTable}
                    </div>
            </Container>
            <Container 
                className={`${containerColours.third}`}
                >
                    <div>
                    <Heading text="Your top artists were" className="text-[#375152]"/>
                    {artistTable}
                    </div>
            </Container>
        </div>
    )
}