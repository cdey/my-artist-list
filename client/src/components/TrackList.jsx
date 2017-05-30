import React from 'react';
import Track from './Track.jsx';

const TrackList = ({ tracks }) => {
  return (
    <div>
      { tracks.map((track, index) => {
        return <Track
          key={ index }
          track={ track }
        />
      }) }
    </div>
  )
};

export default TrackList;