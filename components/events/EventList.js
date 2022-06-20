import React from 'react';
import EventItem from './EventItem';

import classes from './event-list.module.css';
const EventList = (props) => {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem {...event} key={event.id} />
      ))}
    </ul>
  );
};

export default EventList;
