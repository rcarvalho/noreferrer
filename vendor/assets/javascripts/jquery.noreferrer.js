/*
 * Guardian - jQuery plugin for removing referrers in links
 *
 * Copyright (c) 2014 Rodney Carvalho
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 */

(function($){
  NoReferrer = {
    init: function(selector, matches){
      NoReferrer.Browser.init();
      if(matches != undefined){
        for(i=0;i<matches.length;i++){
          matches[i]
        }
      }
      $(document.body).on('click', selector, function(e){
        if(matches == undefined){
          NoReferrer.Link.go($(this).attr('href'));
          return false;        
        }
        else{
          for(i=0;i<matches.length;i++){
            if(new RegExp(matches[i]).test($(this).attr('href'))){
              NoReferrer.Link.go($(this).attr('href'));
              return false;
            }
          }
        }
      });
    },
    Browser: {
      browser: {},
      init: function(){
        matched = NoReferrer.Browser.uaMatch( navigator.userAgent );

        if ( matched.browser ) {
          NoReferrer.Browser.browser[ matched.browser ] = true;
          NoReferrer.Browser.browser.version = matched.version;
        }

        // Chrome is Webkit, but Webkit is also Safari.
        if ( NoReferrer.Browser.browser.chrome ) {
          NoReferrer.Browser.browser.webkit = true;
        } else if ( NoReferrer.Browser.browser.webkit ) {
          NoReferrer.Browser.browser.safari = true;
        }
      },
      uaMatch: function(ua){
        ua = ua.toLowerCase();

        var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
          /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
          /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
          /(msie) ([\w.]+)/.exec( ua ) ||
          ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
          [];

        return {
          browser: match[ 1 ] || "",
          version: match[ 2 ] || "0"
        };
      }
    },
    Link: {
      go: function(url){
        if(NoReferrer.Browser.browser['msie']){
          if(new RegExp(/\?/).test(url)){
            window.open(url + '&_='+Math.random());
          }
          else{
            window.open(url + '?_='+Math.random());  
          }
        }
        else if(NoReferrer.Browser.browser['webkit']){
          if(new RegExp(/\?/).test(url)){
            location = "data:text/html,<script>location='" + url + '&_=' + Math.random() + "'</scr"+"ipt>";
          }
          else{
            location = "data:text/html,<script>location='" + url + '?_=' + Math.random() + "'</scr"+"ipt>";          
          }
          return false;      
        }
        else if(NoReferrer.Browser.browser['mozilla']){
          location = 'data:text/html,<html><meta http-equiv="refresh" content="0; url='+ url + '"></html>';
        }  
      }   
    }
  };

  $.fn.noreferrer = function(selector, url_matches) {
    NoReferrer.init(selector, url_matches);
    return this;
  };
})(jQuery);