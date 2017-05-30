import React from 'react';

const Concert = ({ concert }) => {
  return (
    <div>
      { concert.tour_name }
      { concert.event_date }
      { concert.venue }
      { concert.location }
    </div>
  )
};

export default Concert;