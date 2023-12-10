import React from 'react'
import { EventsCardItem } from '..'
import { Container } from '@mui/material'

const EventsCardList:React.FC = () => {
  return (
    <>
    <section style={{height:'100%'}}>
      <Container maxWidth='lg' sx={{display:'flex', justifyContent:'space-between', flexWrap:'wrap'}}>
    {[...new Array(9)].map(el => <EventsCardItem/> )}
    </Container>
    </section>
    </>
  )
}

export default EventsCardList