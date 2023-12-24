import React, { Dispatch, SetStateAction } from 'react';
import { EventsCardItem } from '..';
import { Box, Container, Skeleton } from '@mui/material';
import { EventType } from '../../types/types';

interface EventsCardListProps {
  setEventId: Dispatch<SetStateAction<Number>>;
  events: EventType[];
  transformDateAndAdress: (eventData: EventType) => { address: String; date: string };
  scrollToSection: () => void;
  isLoading: Boolean;
}

const EventsCardList: React.FC<EventsCardListProps> = ({
  setEventId,
  events,
  transformDateAndAdress,
  scrollToSection,
  isLoading,
}) => {
  return (
    <>
      <section style={{ height: '100%' }}>
        <Container
          maxWidth="lg"
          sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {isLoading
            ? [...new Array(6)].map((_el, id) => (
                <Box sx={{ maxWidth: '350px', m: '25px 0' }}>
                  <Skeleton variant="rounded" width={350} height={560} key={id} />
                </Box>
              ))
            : events.map((el, id) => (
                <EventsCardItem
                  key={id}
                  eventData={el}
                  setEventId={setEventId}
                  transformDateAndAdress={transformDateAndAdress}
                  scrollToSection={scrollToSection}
                />
              ))}
        </Container>
      </section>
    </>
  );
};

export default EventsCardList;
