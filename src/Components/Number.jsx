import React from 'react';
import CountUp from 'react-countup';

const Number = ({ number }) => (
  <CountUp end={number} duration={2} />
);

export default Number;
