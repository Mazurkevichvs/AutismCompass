import React from 'react'
import { HeadingSection,EventsCardList, EventInfo } from '../components'


const Events:React.FC = () => {
  return (
    <>
    <HeadingSection bgImage={'event-group'} title={'Wydarzenia'}/>
      <EventsCardList/> 
      <EventInfo/>  
    </>
  )
}

export default Events