import React from 'react';
import Track from './Track.jsx';

const TrackList = (props) => {
  return (
    <div>
      { props.map((track, index) => {
        <Track
          key={ index }
          track={ track }
        />
      }) }
    </div>
  )
};

export default TrackList;