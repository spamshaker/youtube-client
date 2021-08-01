import React from 'react';

export default function Player({videoId} = {videoId: 'cGV1NGkxxI8'}) {
  if (videoId) {
    return <div style={{height: '50vh'}}>
      <iframe width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?listType=playlist&list=PL4U3VFDm6ZaL1ruwRrUG22yht9lBBZXhe`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen/>

    </div>;
  }
  return null;
}
