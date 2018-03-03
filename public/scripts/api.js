//ajax call to server 
/* global $ */
'use strict';

console.log('api');


const api = (function () {

  const getNews = function(path, query) {
    return $.ajax({
      type: 'GET',
      url: path,
      dataType: 'json',
      data: {'input': query}
    });
  };

  return {
    getNews
  };

})();