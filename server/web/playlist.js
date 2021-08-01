require('dotenv').config();
const {google} = require('googleapis');

module.exports = (playlistId, pageToken) => {
  return google.youtube('v3').playlistItems.list({
    key: process.env.YOUTUBE_TOKEN,
    part: ['snippet'],
    playlistId,
    maxResults: 5,
    pageToken
  });
};
