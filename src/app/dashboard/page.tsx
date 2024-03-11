import Container from "@/components/container"
import Heading from "@/components/heading"
import Option from "@/components/option"
import Table from "@/components/table"
import { getSongSummary, getArtistSummary } from "@/lib/account"

export default async function dashboard() {
    const songSummary = await getSongSummary()
    const artistSummary = await getArtistSummary()

    const options = [
        'Week',
        'Month',
        'Year'
    ]

    return (
        <div className="md:flex justify-around">
            <Container 
                className="bg-[#A8C7CD]"
                >
                    <div>
                        <div className="grid w-full grid-cols-4">
                            <div className="flex col-span-4 md:col-span-2">
                                <h1 className="text-6xl text-[#375DE5]">{songSummary.totalCount ?? 0}</h1>
                                <h1 className="text-xl self-end text-[#375DE5]">songs</h1>
                            </div>
                            <div className="flex col-span-4 md:col-span-2">
                                <h1 className="text-6xl text-[#375DE5]">{artistSummary.items ?? 0}</h1>
                                <h1 className="text-xl self-end text-[#375DE5]">artists</h1>
                            </div>
                            <div className="flex col-span-4 md:col-span-2">
                                <h1 className="text-6xl text-[#375DE5]">{songSummary.items ?? 0}</h1>
                                <h1 className="text-xl self-end text-[#375DE5]">unique songs</h1>
                            </div>
                        </div>
                    </div>
            </Container>
        </div>
    )
}