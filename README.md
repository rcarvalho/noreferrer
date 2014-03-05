noreferrer
==========

Gem for a Rails project that removes referrer information on an html link


Include this in your application.js file:
//= require jquery.noreferrer.js

$('a').noreferrer([css selector],[array of strings to be regex matched with link hrefs])

Example:
The following exmaple will intercept and remove the referrer information to any links that link to google.

  $(document).ready(function(){
    $(document).noreferrer('a', ['google', 'yahoo.com']);
  });

--
A LIVE example application can be seen at
http://test-referrer.herokuapp.com/