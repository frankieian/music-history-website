'use client'
import Table from "@/components/table";
import { useMemo, useState } from "react";

export default async function SongHistory (props: {
    initialSongHistory: {
        pages: number,
        items: number,
        data: {song_id: string, played_at: string, song_name: string, artist_name: string[]} []
    }
}) {

    const songData = (props.initialSongHistory?.data ?? []).map(o => {
        let date = new Date(o.played_at).toLocaleString()

        return {...o, played_at: date}

    })

    const songTable = <Table 
        tableHeadings={['Played At', 'Song Name', 'Artists']}
        tableDataFormat={['played_at', 'song_name', 'artist_name']}
        tableData={songData}
        tableName="history_song"
    />
    return (
        <div>
            {songTable}
        </div>
    )

}