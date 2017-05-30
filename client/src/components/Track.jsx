import React from 'react';

const Track = ({ track }) => {
  return (
    <div>
      { track.track_name }
      { track.album }
      <img src={ track.track_url } />
    </div>
  )
};

export default Track;