import React, { Dispatch, RefObject, SetStateAction } from 'react';
import { EventsCardItem } from '..';
import { Box, Container, Skeleton } from '@mui/material';
import { EventType } from '../../types/types';

interface EventsCardListProps {
  setEventId: Dispatch<SetStateAction<Number>>;
  events: EventType[];
  transformDateAndAdress: (eventData: EventType) => { address: String; date: string };
  scrollToSection: (ref:RefObject<HTMLElement>) => void;
  isLoading: Boolean;
  eventSectionRef: RefObject<HTMLElement>;
  eventInfoRef: RefObject<HTMLElement>;
}

const EventsCardList: React.FC<EventsCardListProps> = ({
  setEventId,
  events,
  transformDateAndAdress,
  scrollToSection,
  isLoading,
  eventSectionRef,
  eventInfoRef
}) => {
  return (
    <>
      <section ref={eventSectionRef} style={{ height: '100%' }}>
        <Container
          maxWidth="lg"
          sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {isLoading
            ? [...new Array(6)].map((_el, id) => (
                <Box key={id} sx={{ maxWidth: '350px', m: '25px 0' }}>
                  <Skeleton variant="rounded" width={350} height={560}/>
                </Box>
              ))
            : events.map((el) => (
                <EventsCardItem
                  key={el.id}
                  eventData={el}
                  setEventId={setEventId}
                  transformDateAndAdress={transformDateAndAdress}
                  scrollToSection={scrollToSection}
                  eventInfoRef={eventInfoRef}
                />
              ))}
        </Container>
      </section>
    </>
  );
};

export default EventsCardList;
