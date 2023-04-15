import React from 'react'
import Slideshow from './home/slideshow'
import ReservationCard from './home/reservation_card'

function Home() {
  return (
    <div>
      <div>
        Catchy phrase
      </div>
      <div className='flex justify-between'>
        <div>
          <Slideshow/>
        </div>
        <div>
          <ReservationCard/>
        </div>
      </div>
    </div>
  )
}

export default Home