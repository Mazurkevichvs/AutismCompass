import React, { Dispatch, SetStateAction } from 'react'
import { EventsCardItem } from '..'
import { Container } from '@mui/material';
import {EventType} from "../../types/types"

interface EventsCardListProps {
  setEventId: Dispatch<SetStateAction<Number>>,
  events: EventType[],
  transformDateAndAdress: (eventData:EventType) => {address:String, date:string},
  scrollToSection: () => void
}

const EventsCardList:React.FC<EventsCardListProps> = ({setEventId, events, transformDateAndAdress, scrollToSection}) => {
  return (
    <>
    <section style={{height:'100%'}}>
      <Container maxWidth='lg' sx={{display:'flex', justifyContent:'space-between', flexWrap:'wrap'}}>
    {events.map((el, id) => <EventsCardItem key={id} eventData={el} setEventId={setEventId} transformDateAndAdress={transformDateAndAdress} scrollToSection={scrollToSection}/>  )}
    </Container>
    </section>
    </>
  )
}

export default EventsCardList