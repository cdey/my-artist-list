import React from 'react';
import Concert from './Concert.jsx';

const ConcertList = (props) => {
  return (
    <div>
      { props.map((concert, index) => {
        <Concert
          key={ index }
          track={ track }
        />
      }) }
    </div>
  )
};

export default ConcertList;