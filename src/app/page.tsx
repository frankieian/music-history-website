import Image from 'next/image'
import { FormEvent } from 'react'

import Button from '@/components/button'
import Form from '@/components/form'

import { loginAccount } from '@/actions/account'
import Container from '@/components/container'
import Grid from '@/components/grid'

export default function Home() {

  const gridConfig = [
    {
      src:"/Sort.svg",
      alt:"Sort Feature"
    },
    "See what your favourite songs and artists are",
    {
      src:"/Refresh_2_light.svg",
      alt:"Refresh Feature"
    },
    "View your last played songs",
    {
      src:"/Calendar_light.svg",
      alt:"Calendar Feature"
    },
    "Filter based on dates"
  ]

  return (
    <div className='flex flex-col'>
      {/** First Part / Middle Part */}
      <Container className='bg-[#A8C7CD]'>
        <p className='w-full text-xl'>
          Welcome to Bored Tea’s Spotify History Application. This application automatically 
          retrieves the last recently played songs and stores them in the database. 
          <br/><br/>
          In doing so, we obtain statistics like what your favourite artist was or how many songs 
          you played this month!
        </p>
      </Container>
      <Container className='bg-[#D0D7EF]' heading='Features'>
        <Grid columns={3} span={[1,2]} config={gridConfig}/>
      </Container>
    </div>
  )
}
