import React, {useEffect, useState} from 'react';
import {fetchFromYoutube} from './fetchFromYoutube';
import Player from './player';


export function App() {
  const [items, setItems] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState('');
  const [pageInfo, setPageInfo] = useState({});
  useEffect(() => {
    fetchFromYoutube('playlistItems', {
      playlistId: 'PL4U3VFDm6ZaL1ruwRrUG22yht9lBBZXhe',
      part: 'snippet,contentDetails',
      maxResults: 25
    }).then(({items, pageInfo}) => {
      console.log({items});
      setItems(items.map(({snippet, id}) => {
        const {thumbnails, title, resourceId} = snippet;
        const {url, width, height} = thumbnails.high;
        return <a onClick={() => setSelectedVideo(resourceId.videoId)} key={id}  style={{width,height}}><img src={url}
          width={width}
          height={height}
          alt={title}/></a>;
      }));
    });
  }, []);

  return <div>
    <Player videoId={selectedVideo}/>
    <div className='container'>
      {items}
    </div>
  </div>;
}
