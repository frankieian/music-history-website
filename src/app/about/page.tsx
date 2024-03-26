import Container from '@/components/container'
import { containerColours } from '@/const/constant'
import Image from 'next/image'

export default function About() {
    return (
      <div className='flex flex-col'>
          <Container className={containerColours.first} heading='About Music History'> 
            <div>
              <h1 className='text-2xl font-semibold'>What does it do?</h1>
              <p className='text-xl'>
                This application automatically retrieves the last recently played songs and stores them in the database.
                <br/><br/>
                In doing so, we obtain statistics like what your favourite artist was or how many songs you played this month!
              </p>
              <h1 className='text-2xl font-semibold pt-5'>How does it do it?</h1>
              <p className='text-xl'>
                This application uses AWS Lambda to retrieve your last recently played songs using Spotify&apos;s APIs. We pull the data every 1 hour.
                If there is new listening history we record it in our database
              </p>
            </div>
          </Container>
        </div>
      )
}
