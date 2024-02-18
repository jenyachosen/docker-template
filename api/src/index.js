const express = require('express');
const app = express();

app.get('/test', (req, res) => {
  res.send('Our api server is working correctly')
})

app.listen('4000', () => {
  console.log('============express==============');
  console.log('Started api service again');
  console.log('====================================');
})