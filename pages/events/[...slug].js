import { useRouter } from 'next/router';
import React from 'react';
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/results-title';
import Buttton from '../../components/ui/button';
import ErorAlert from '../../components/ui/error-alert';
import { getFilteredEvents } from '../../dummy-data';

const FilteredEventsPage = () => {
  const router = useRouter();
  const filtredData = router.query.slug;
  if (!filtredData) {
    return <p className='center'>Loading...</p>;
  }
  const filtredYear = filtredData[0];
  const filtredMonth = filtredData[1];
  const numYear = +filtredYear;
  const numMonth = +filtredMonth;
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <>
        <ErorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErorAlert>
        <div className='center'>
          <Buttton link={'/events'}>Show All Events</Buttton>
        </div>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErorAlert>
          <p>No events for the chosen filter</p>
        </ErorAlert>
        <div className='center'>
          <Buttton link={'/events'}>Show All Events</Buttton>
        </div>
      </>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
};

export default FilteredEventsPage;
