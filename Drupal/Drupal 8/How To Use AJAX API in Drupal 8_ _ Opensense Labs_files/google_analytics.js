(function($,Drupal,drupalSettings){'use strict';Drupal.google_analytics={};$(document).ready(function(){$(document.body).on('mousedown keyup touchstart',function(event){$(event.target).closest('a,area').each(function(){if(Drupal.google_analytics.isInternal(this.href)){if($(this).is('.colorbox')&&(drupalSettings.google_analytics.trackColorbox)){}
else if(drupalSettings.google_analytics.trackDownload&&Drupal.google_analytics.isDownload(this.href)){ga('send',{hitType:'event',eventCategory:'Downloads',eventAction:Drupal.google_analytics.getDownloadExtension(this.href).toUpperCase(),eventLabel:Drupal.google_analytics.getPageUrl(this.href),transport:'beacon'});}
else if(Drupal.google_analytics.isInternalSpecial(this.href)){ga('send',{hitType:'pageview',page:Drupal.google_analytics.getPageUrl(this.href),transport:'beacon'});}}
else{if(drupalSettings.google_analytics.trackMailto&&$(this).is("a[href^='mailto:'],area[href^='mailto:']")){ga('send',{hitType:'event',eventCategory:'Mails',eventAction:'Click',eventLabel:this.href.substring(7),transport:'beacon'});}
else if(drupalSettings.google_analytics.trackOutbound&&this.href.match(/^\w+:\/\//i)){if(drupalSettings.google_analytics.trackDomainMode!==2||(drupalSettings.google_analytics.trackDomainMode===2&&!Drupal.google_analytics.isCrossDomain(this.hostname,drupalSettings.google_analytics.trackCrossDomains))){ga('send',{hitType:'event',eventCategory:'Outbound links',eventAction:'Click',eventLabel:this.href,transport:'beacon'});}}}});});if(drupalSettings.google_analytics.trackUrlFragments){window.onhashchange=function(){ga('send',{hitType:'pageview',page:location.pathname+location.search+location.hash});};}
if(drupalSettings.google_analytics.trackColorbox){$(document).on('cbox_complete',function(){var href=$.colorbox.element().attr('href');if(href){ga('send',{hitType:'pageview',page:Drupal.google_analytics.getPageUrl(href)});}});}});Drupal.google_analytics.isCrossDomain=function(hostname,crossDomains){return $.inArray(hostname,crossDomains)>-1?true:false;};Drupal.google_analytics.isDownload=function(url){var isDownload=new RegExp('\\.('+drupalSettings.google_analytics.trackDownloadExtensions+')([\?#].*)?$','i');return isDownload.test(url);};Drupal.google_analytics.isInternal=function(url){var isInternal=new RegExp('^(https?):\/\/'+window.location.host,'i');return isInternal.test(url);};Drupal.google_analytics.isInternalSpecial=function(url){var isInternalSpecial=new RegExp('(\/go\/.*)$','i');return isInternalSpecial.test(url);};Drupal.google_analytics.getPageUrl=function(url){var extractInternalUrl=new RegExp('^(https?):\/\/'+window.location.host,'i');return url.replace(extractInternalUrl,'');};Drupal.google_analytics.getDownloadExtension=function(url){var extractDownloadextension=new RegExp('\\.('+drupalSettings.google_analytics.trackDownloadExtensions+')([\?#].*)?$','i');var extension=extractDownloadextension.exec(url);return(extension===null)?'':extension[1];};})(jQuery,Drupal,drupalSettings);