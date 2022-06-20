import React, { useRef } from 'react';
import Buttton from '../ui/button';

import classes from './event-search.module.css';
const EventSearch = (props) => {
  const yearInpRef = useRef();
  const monthInpRef = useRef();
  const SumbitHandler = (event) => {
    event.preventDefault();
    const selectedYear = yearInpRef.current.value;
    const selectedMonth = monthInpRef.current.value;
    props.onSearch(selectedYear, selectedMonth);
  };
  return (
    <form className={classes.form} onSubmit={SumbitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor='year'>Year</label>
          <select id='year' ref={yearInpRef}>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor='month'>Month</label>
          <select id='month' ref={monthInpRef}>
            <option value='1'>January</option>
            <option value='2'>February</option>
            <option value='3'>March</option>
            <option value='4'>April</option>
            <option value='5'>May</option>
            <option value='6'>Jun</option>
            <option value='7'>July</option>
            <option value='8'>August</option>
            <option value='9'>September</option>
            <option value='10'>Octomber</option>
            <option value='11'>November</option>
            <option value='12'>December</option>
          </select>
        </div>
      </div>
      <Buttton>Find Events</Buttton>
    </form>
  );
};

export default EventSearch;
