import React, { useEffect, useState } from 'react'
import { EventsCardItem } from '..'
import { Container } from '@mui/material';
import {EventType} from "../../types/types"

const EventsCardList:React.FC = () => {
  const [events, setEvents] = useState<EventType[]>([]);
  const fetchEvents = async () => {
    try {
      const res = await fetch('http://localhost:5154/api/events');
      const data:EventType[] = await res.json();
      setEvents(data);
      
    } catch(err) {
      console.error(err)
    }
  }
  useEffect(() => {
    fetchEvents();
    console.log(events)
  },[])
  return (
    <>
    <section style={{height:'100%'}}>
      <Container maxWidth='lg' sx={{display:'flex', justifyContent:'space-between', flexWrap:'wrap'}}>
    {events.map((el:EventType, id) => <EventsCardItem key={id} eventData={el} /> )}
    </Container>
    </section>
    </>
  )
}

export default EventsCardList