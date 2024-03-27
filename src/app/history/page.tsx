
import { getHistory } from "@/actions/account";
import Table from "@/components/table";
import { containerColours, dashboardFilterDefault, defaultPageSize } from "@/const/constant";
import Container from '@/components/container'
import SongHistory from "./songHistory";

export default async function History () {
    const data = await getHistory(dashboardFilterDefault, defaultPageSize, 1)
    
    return (
        <Container className={`${containerColours.first}`} heading="Most recently played songs">
            <div>
                <span className="text-default-500 text-small">*We parse your history every hour so this may not have your listening history yet</span>
                <SongHistory initialSongHistory={data}/>
            </div>
        </Container>
    )

}