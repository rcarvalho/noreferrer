noreferrer
==========

Gem for a Rails project that removes referrer information on an html link


Include this in your application.js file:
//= require jquery.noreferrer.js

$('a').noreferrer(<array of strings to be regex matched with link hrefs>)

Example:
The following exmaple will intercept and remove the referrer information to any links that link to google.

  $(document).ready(function(){
    $('a').noreferrer(['google', 'yahoo.com']);
  });
