import React, { useEffect, useRef, useState } from 'react';
import { HeadingSection, EventsCardList, EventInfo } from '../components';
import { EventType } from '../types/types';

const Events: React.FC = () => {
  const [eventID, setEventId] = useState<Number>(0);
  const [events, setEvents] = useState<EventType[] | []>([]);
  const eventInfoRef = useRef<HTMLDivElement>(null);
  const clickedEvent = events.find((el) => el.id === eventID);

  const scrollToSection = () => {
    if (eventInfoRef.current) {
      eventInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const transformDateAndAdress = (
    eventData:EventType
  ) => {
    return {
      date: new Date(eventData.date).toLocaleString(),
      address: eventData.type
        ? 'Online' 
        : `${eventData.address.city}, ul. ${eventData.address.street} ${eventData.address.house}/${eventData.address.apartment}`
    };
  };
  const fetchEvents = async () => {
    try {
      const res = await fetch('http://localhost:5154/api/events');
      const data: EventType[] = await res.json();
      setEvents(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchEvents();
    console.log(events);
  }, []);
  return (
    <>
      <HeadingSection bgImage={'event-group'} title={'Wydarzenia'} />
      <EventsCardList
        setEventId={setEventId}
        events={events}
        transformDateAndAdress={transformDateAndAdress}
        scrollToSection={scrollToSection}
      />
      {clickedEvent && <EventInfo
        transformDateAndAdress={transformDateAndAdress}
        clickedEvent={clickedEvent}
        eventInfoRef={eventInfoRef}
      />}
    </>
  );
};

export default Events;
