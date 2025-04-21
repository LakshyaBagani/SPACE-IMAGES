import React from 'react';

function DateSelector({ date, handleDateChange }) {
  const today = new Date().toISOString().split('T')[0];
  
  return (
    <div className="flex justify-center mb-10">
      <div className="bg-slate-800/80 p-6 rounded-2xl shadow-lg border border-slate-700">
        <label htmlFor="date-picker" className="block text-blue-300 mb-3 font-medium">Select a date:</label>
        <input
          id="date-picker"
          type="date"
          value={date}
          onChange={handleDateChange}
          max={today}
          min="1995-06-16"
          className="p-3 rounded-lg bg-slate-700 text-white border border-slate-600 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-md"
        />
      </div>
    </div>
  );
}

export default DateSelector;