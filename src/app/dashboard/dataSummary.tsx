'use client'

import Heading from "@/components/heading"
import { ChangeEvent, useEffect, useState, useTransition } from "react"
import Option from "@/components/option"
import Container from "@/components/container"
import { artistSummaryAccount, songSummaryAccount } from "@/actions/account"
import { dashboardFilters, dashboardFilterDefault, containerColours } from "@/const/constant"
import TopData from "./topData"
import { redirect, useRouter } from "next/navigation"
import Cookies from 'js-cookie'

export default function UserSummary (props: {
    initialSongSummary: any,
    initialArtistSummary: any
}) {
    const [isPending, startTransition] = useTransition();

    const [filterOption, setFilterOption] = useState(dashboardFilterDefault)
    const [songSummary, setSongSummary] =  useState(props.initialSongSummary)
    const [artistSummary, setArtistSummary] = useState(props.initialArtistSummary)
    
    const onChange = (e: ChangeEvent<any>) => {
        setFilterOption(e.target.value)
        startTransition(async () => {
            let artistAction = await artistSummaryAccount(e.target.value)
            let songAction = await songSummaryAccount(e.target.value)
            
            let errorMessage = artistAction.message ?? songAction.message

            if(errorMessage) {
                alert(errorMessage)
            }

            //If no response i.e tokens expired then redirect to login
            if(artistAction == undefined || songAction == undefined) {
                redirect('/login')
            }

            setSongSummary(songAction ?? {})
            setArtistSummary(artistAction ?? {})
        })
    }

    const option =  <Option config={dashboardFilters} value={filterOption} onChange={onChange}/>

    return (
        <div className="justify-around">
            <Container 
                className={`${containerColours.first}`}
                >
                    <div>
                    <Heading text="This" option={option} rightText="you played" className=""/>

                        <div className="grid w-full grid-cols-4">
                            <div className="flex col-span-4 lg:col-span-2">
                                <h1 className="text-6xl text-[#375DE5]">{songSummary.totalCount ?? 0}</h1>
                                <h1 className="text-xl self-end text-[#375DE5]">songs</h1>
                            </div>
                            <div className="flex col-span-4 lg:col-span-2">
                                <h1 className="text-6xl text-[#375DE5]">{artistSummary.items ?? 0}</h1>
                                <h1 className="text-xl self-end text-[#375DE5]">artists</h1>
                            </div>
                            <div className="flex col-span-4 lg:col-span-2">
                                <h1 className="text-6xl text-[#375DE5]">{songSummary.items ?? 0}</h1>
                                <h1 className="text-xl self-end text-[#375DE5]">unique songs</h1>
                            </div>
                        </div>
                    </div>
            </Container>
            <TopData songData={songSummary} artistData={artistSummary}/>
        </div>
    )
}