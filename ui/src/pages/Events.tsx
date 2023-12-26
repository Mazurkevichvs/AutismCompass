import React, {  useEffect, useRef, useState } from 'react';
import { HeadingSection, EventsCardList, EventInfo } from '../components';
import { EventType } from '../types/types';
import { scrollToSection } from '../consts/consts';

const Events: React.FC = () => {
  const [eventID, setEventId] = useState<Number>(0);
  const [events, setEvents] = useState<EventType[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);
  const eventInfoRef = useRef<HTMLDivElement>(null);
  const eventSectionRef = useRef<HTMLDivElement>(null);
  const clickedEvent = events.find((el) => el.id === eventID);

 
  const transformDateAndAdress = (
    eventData:EventType
  ) => {
    return {
      date: new Date(eventData.date).toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'} ),
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
      setIsLoading(false)
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
      <HeadingSection eventSectionRef={eventSectionRef} bgImage={'event-group'} title={'Wydarzenia'} scrollToSection={scrollToSection} />
      <EventsCardList
        eventSectionRef={eventSectionRef}
        setEventId={setEventId}
        events={events}
        transformDateAndAdress={transformDateAndAdress}
        scrollToSection={scrollToSection}
        isLoading={isLoading}
        eventInfoRef={eventInfoRef}
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
