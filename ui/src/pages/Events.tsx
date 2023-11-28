import React from 'react'
import { HeadingSection,EventsCardList } from '../components'


const Events:React.FC = () => {
  return (
    <>
    <HeadingSection bgImage={'event-group'} title={'Wydarzenia'}/>
      <EventsCardList/>   
    </>
  )
}

export default Events