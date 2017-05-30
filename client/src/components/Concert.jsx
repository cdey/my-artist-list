import React from 'react';

const Concert = ({ concert }) => {
  return (
    <div className="media">
      <div className="media-body">
        <h4 className="media-heading">
          { concert.tour_name }
        </h4>
        <h5>{ concert.venue + ' | ' + concert.location }</h5>
        { concert.event_date }
      </div>
    </div>

  )
};

export default Concert;