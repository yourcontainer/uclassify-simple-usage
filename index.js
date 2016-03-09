'use strict';
var request = require('request');

var uClassify = function(apiKey){
  this.apiKey = apiKey;
};

module.exports = uClassify;

(function(){
  this.detectLang = function(url, callback){
    var API_ENDPOINT = 'http://uclassify.com/browse/uClassify/Text Language/ClassifyUrl';
    var options = {
      url: API_ENDPOINT,
      headers: {
        'User-Agent': 'request',
      },
      qs: {
        readKey: this.apiKey,
        url: url,
        output: 'json'
      }
    };
    request(options, callback);
  }

  this.tonality = function(url, callback){
    var API_ENDPOINT = 'http://uclassify.com/browse/prfekt/tonality/ClassifyUrl';
    var options = {
      url: API_ENDPOINT,
      headers: {
        'User-Agent': 'request',
      },
      qs: {
        readKey: this.apiKey,
        url: url,
        output: 'json'
      }
    };
    request(options, callback);
  }

  this.category = function(url, callback){
    var API_ENDPOINT = 'http://uclassify.com/browse/uclassify/topics/ClassifyUrl';
    var options = {
      url: API_ENDPOINT,
      headers: {
        'User-Agent': 'request',
      },
      qs: {
        readKey: this.apiKey,
        url: url,
        output: 'json'
      }
    };
    request(options, callback);
  }

  this.gender = function(url, callback){
    var API_ENDPOINT = 'http://uclassify.com/browse/uclassify/genderanalyzer_v5/ClassifyUrl';
    var options = {
      url: API_ENDPOINT,
      headers: {
        'User-Agent': 'request',
      },
      qs: {
        readKey: this.apiKey,
        url: url,
        output: 'json'
      }
    };
    request(options, callback);
  }
}).call(uClassify.prototype);
