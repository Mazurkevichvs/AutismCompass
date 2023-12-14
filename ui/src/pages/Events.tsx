import React, { useEffect, useState } from 'react';
import { HeadingSection, EventsCardList, EventInfo } from '../components';
import { EventType } from '../types/types';

const Events: React.FC = () => {
  const [eventID, setEventId] = useState<Number>(0);
  const [events, setEvents] = useState<EventType[] | []>([]);
  const transformDateAndAdress = (
    eventDate: String,
    eventAddress: {
      id: Number;
      city: String;
      street: String;
      house: Number;
      apartment: Number;
      link: String;
    },
  ) => {
    return {
      date: new Date(eventDate).toLocaleString(),
      address: eventAddress.type
        ? 'Online'
        : `${eventAddress.city}, ul. ${eventAddress.street} ${eventAddress.house}/${eventAddress.apartment}`,
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
      />
      <EventInfo
        eventID={eventID}
        events={events}
        transformDateAndAdress={transformDateAndAdress}
      />
    </>
  );
};

export default Events;
