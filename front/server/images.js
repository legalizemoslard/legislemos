const express = require('express');
const request = require('request');
const { API_HOST, API_PORT } = require('./getApiData');

const app = express();

app.use('/uploads', (req, res) => {
  console.log('getting image from: ', `http://${API_HOST}:${API_PORT}/uploads/${req.url}`);
  return req
    .pipe(request(`http://${API_HOST}:${API_PORT}/uploads/${req.url}`))
    .pipe(res); 
});

app.listen(4000, () => {
  console.log('Image upload proxy started on port 4000');
});
