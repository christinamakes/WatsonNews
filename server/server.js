'use strict';

const express = require('express');
const news = require('./news');
const watson = require('./watson');

const app = express();

app.use(express.static('public'));

console.log('server ready');
// GET articles from news.js
    // user provide userQuery
    // user provide startDate & endDate

  app.get('/question', (req, res) => {
    const { input } = req.query;
    const testParameters = {
      'url': 'https://stackoverflow.com/questions/33108326/how-to-pass-client-side-parameters-to-the-server-side-in-angular-node-js-express',
      'features': {
      'emotion': {
      'document': true,
      }
    }};
      // console.log(news.articles('bitcoin', '12-10-17', '12-19-17') + ' from server');
      watson.callWatson(testParameters).then(results => res.json(results));

  });

app.listen(8080, function () {
  console.info(`Server listening on ${this.address().port}`);
}).on('error', err => {
  console.error(err);
});




