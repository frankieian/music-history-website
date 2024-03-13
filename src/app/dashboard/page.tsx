'use server'
import Container from "@/components/container"
import Heading from "@/components/heading"
import Option from "@/components/option"
import Table from "@/components/table"
import { getSongSummary, getArtistSummary } from "@/lib/account"
import UserSummary from "./dataSummary"
import { artistSummaryAccount, songSummaryAccount } from "@/actions/account"
import { dashboardFilterDefault } from "@/const/constant"

export default async function dashboard() {
    //let songSummary = await songSummaryAccount(dashboardFilterDefault, true) ?? {}
    //let artistSummary = await artistSummaryAccount(dashboardFilterDefault, true) ?? {}
    //let errorMessage = songSummary.message ?? artistSummary.message
    let errorMessage = ''

    return (
        <div>
            {errorMessage ?
            <Container className="bg-[#dc6161]" heading={errorMessage}> 
                <p className="text-xl">Some error has occured and we cannot connect to the server. Sorry!</p>
            </Container>
            :
            <UserSummary/>
            }
        </div>
    )
}