import React from 'react';
import EventList from '../../components/events/EventList';
import { getAllEvents } from '../../dummy-data';

const AllEventsDetailsPage = () => {
  const events = getAllEvents();
  return (
    <div>
      <EventList items={events} />
    </div>
  );
};

export default AllEventsDetailsPage;
