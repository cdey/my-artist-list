import React from 'react';
import Concert from './Concert.jsx';

const ConcertList = ({ concerts }) => {
  return (
    <div>
      { concerts.map((concert, index) => {
        return <Concert
          key={ index }
          concert={ concert }
        />
      }) }
    </div>
  )
};

export default ConcertList;