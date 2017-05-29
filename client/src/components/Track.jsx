import React from 'react';

const Track = (props) => {
  return (
    <div>
      { props.track_name }
      { props.album }
      { props.track_url }
    </div>
  )
};

export default Track;