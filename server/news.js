'use strict';

const NewsAPI = require('newsapi');
const watson = require('./watson');

const app = new NewsAPI('cffd5c18704145eb89a7156717753b11');




// Takes user query returns reults into promise then feeds them into watson analyze and calls watson
const articles = function(userQuery, startDate, endDate) {
    app.v2.everything({
      q: userQuery,
      // sources: 'bbc-news,the-verge',
      // domains: 'bbc.co.uk, techcrunch.com',
      from: startDate,
      to: endDate,
      language: 'en',
      sortBy: 'relevancy',
      page: 2
    }).then(response => {
      // response is Object returned from News API query, contains articles.url
      let currentURL = [];
      // take url from news results and push to array
      // CHANGE LENGTH FROM i < 2 !!!
      for( let i = 0; i < 2; i++) {
        currentURL.push(response.articles[i].url);
        // console.log(currentURL);
      }

      for (let i = 0; i < currentURL.length; i++) {
        let parametersArray = {};
          const parameters = {
              'url': `${currentURL[i]}`,
              'features': {
              'emotion': {
              'document': true,
              },
            }
          }; // end parameters
        console.log(parametersArray);
        return parameters;
        }
      });
  };
  
    

  module.exports.articles = articles;


// console.log(articles('bitcoin', '12-10-17', '12-19-17'));


