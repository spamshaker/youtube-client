const express = require('express');
const app = express();
const path = require('path');
const playlist = require('./playlist');

app.use('/', express.static(path.join(__dirname, 'public')));

const getPlaylist = (req, res) => {
  console.log(req.params);
  playlist(req.params.playlistId, req.params.nextPageToken).then(
    ({data: {items, pageInfo, nextPageToken, tokenPagination}}) =>
      res.json({
        items: items.map(
          ({
             snippet: {
               thumbnails,
               resourceId: {videoId}
             }
           }) => ({thumbnails, videoId})
        ),
        pageInfo,
        nextPageToken,
        tokenPagination
      })
  );
};

app.get('/api/playlist/:playlistId/:nextPageToken', getPlaylist);
app.get('/api/playlist/:playlistId', getPlaylist);

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
