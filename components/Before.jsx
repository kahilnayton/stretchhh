import React from 'react';

// Create an array of object with all the stretch details
// iterate over that array and run a function for each object

const stretches = [
  {
    duration: 10,
    instructions: 'lean against the wall',
  },
  {
    duration: 10,
    instructions: 'Other leg',
  },
  {
    duration: 10,
    instructions: 'Lean on table',
  },
];

const beginStretches = stretches.map(stretch => <h1>{stretch.instructions}</h1>)

const Before = () => {
  return <div>{beginStretches}</div>;
};

export default Before;
