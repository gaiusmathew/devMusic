import React from 'react';

const TimeTrack = () => (

  <div className="p-4 w-full max-w-sm bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <h5 className="mb-4 text text-xl font-bold text-gray-500 dark:text-gray-400"> 25 MINUTES OF WORK </h5>
    <div className="flex items-baseline text-gray-900 dark:text-white">
      <h2 className="text-6xl font-extrabold tracking-tight ml-10 mb-5">25:00</h2>
    </div>
    <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Start</button>
  </div>

);

export default TimeTrack;
