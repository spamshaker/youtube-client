const express = require('express');
const app = express();
const path = require('path')

app.use('/', express.static(path.join(__dirname, 'public')));

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
