import React, { useEffect, useState } from 'react'
import { EventsCardItem } from '..'
import { Container } from '@mui/material'

const EventsCardList:React.FC = () => {
  const [data, setData] = useState(null);
  const fetchEvents = async () => {
    const res = await fetch('https://localhost:7098/api/events');
    const data = await res.json();
    data ? setData(data) : setData(null)
  }
  useEffect(() => {
    fetchEvents()
    console.log(data)
  }, [])
  return (
    <>
    <section style={{height:'100%'}}>
      <Container maxWidth='lg' sx={{display:'flex', justifyContent:'space-between', flexWrap:'wrap'}}>
    {[...new Array(9)].map((el, id) => <EventsCardItem key={id}/> )}
    </Container>
    </section>
    </>
  )
}

export default EventsCardList