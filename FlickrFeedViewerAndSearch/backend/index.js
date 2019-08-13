var express = require('express');
var Flickr = require("flickrapi"),
    flickrOptions = {
      api_key: "6fac53f9ce00b70c5ece1518df526a17",
      secret: "2cfc79fb0bff067e"
    };

var app = express();

app.get('/flickrFeedsSearch/:tags', (req, res) => {
  console.log('tags:' + req.params.tags);
  Flickr.tokenOnly(flickrOptions, function(error, flickr) {
    flickr.photos.search({
      user_id: 'publicfeed',
      extras: 'description,url_o',
      tags: req.params.tags,
    }, function(err, result) {
      res.send(result);
    });
  });
});

app.listen(8080);