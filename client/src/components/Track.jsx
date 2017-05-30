import React from 'react';

const Track = ({ track }) => {
  return (
      <div className="media">
        <div className="media-left">
          <img className="media-object" src={ track.track_url } alt="..."/>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{ track.track_name }</h4>
          { track.album }
        </div>
      </div>
  )
};

export default Track;