import Container from '@/components/container'
import { containerColours } from '@/const/constant'
import Image from 'next/image'

export default function LoginError() {
    return (
      <div className='flex flex-col'>
          <Container className={containerColours.first} heading='Error'> 
            <div>
              <p className='text-xl'>
                This application is current in Dev Mode. You must have been given access to login. Please ask the developer.
              </p>
            </div>
          </Container>
        </div>
      )
}
