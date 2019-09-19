/**
* jQuery Cookie plugin
*
* Copyright (c) 2010 Klaus Hartl (stilbuero.de)
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*
*/
jQuery.cookie = function (key, value, options) {

    // key and at least value given, set cookie...
    if (arguments.length > 1 && String(value) !== "[object Object]") {
        options = jQuery.extend({}, options);

        if (value === null || value === undefined) {
            options.expires = -1;
        }

        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }

        value = String(value);

        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? value : encodeURIComponent(value),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }

    // key and possibly options given, get cookie...
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};



;/*})'"*/
;/*})'"*/
Drupal.behaviors.socialtracking = function (context) {

// We are going to track social events in Google Analytics using the code below
//

  //We are tracking twitter tweet events here
  function trackTwitter() {
    try {
      if (twttr && twttr.events && twttr.events.bind) {
        twttr.events.bind('tweet', function(event) {
          if (event) {
            if (typeof ga === 'function') {
              ga('send', 'event', '_trackSocial', 'Twitter', 'tweet');
            }
          }
        });
      }
    }
    catch(e) {
    }
  }

  function trackFacebook() {
    window.fbAsyncInit = function() {

      // We are tracking Facebook Social events

      // We need to track facebook like events here
      FB.Event.subscribe('edge.create', function(targetUrl) {
        ga('send', 'event', '_trackSocial', 'Facebook', 'like');
      });

      // We need to track Facebok unlike events here
      FB.Event.subscribe('edge.remove', function(targetUrl) {
        ga('send', 'event', '_trackSocial', 'Facebook', 'unlike');
      });

      // We need to track Facebook send events here
      FB.Event.subscribe('message.send', function(targetUrl) {
        ga('send', 'event', '_trackSocial', 'Facebook', 'send');
      });
    }
  }

  trackTwitter();
  trackFacebook();
};

;/*})'"*/
;/*})'"*/
(function ($) {

  // Redirecting from subdomains created for CDN
  var host = window.location.hostname;
  var res = host.split(".");
  var sub = res[0].match(/cdn/gi);
  if (sub == 'cdn') {
    var location = "http://www" + host.replace(res[0], "");
    window.location.href = location;
  }

  Drupal.behaviors.zyxware_custom_page_load = {
    attach: function (context, settings) {
      // BEGIN Google Analytics tracking code
      // If this is a node view page then push information about the node as custom ga variables / events
      if (Drupal.settings.zyxwarecustom && Drupal.settings.zyxwarecustom.node_author_uid) {
        if (typeof ga === 'function') {
          ga('send', 'event', 'View', 'Node Author', Drupal.settings.zyxwarecustom.node_author_uid + ':' + Drupal.settings.zyxwarecustom.node_author_name, 1, {'nonInteraction': 1});
          ga('send', 'event', 'View', 'Node Created', Drupal.settings.zyxwarecustom.node_age + ' days', 1, {'nonInteraction': 1});
          ga('send', 'event', 'View', 'Node Type', Drupal.settings.zyxwarecustom.node_type, 1, {'nonInteraction': 1});
          ga('send', 'event', 'View', 'Node Published', Drupal.settings.zyxwarecustom.node_created, 1, {'nonInteraction': 1});
          for (var tid in Drupal.settings.zyxwarecustom.taxonomy) {
            ga('send', 'event', 'View', 'Taxonomy', tid + ':' + Drupal.settings.zyxwarecustom.taxonomy[tid], 1, {'nonInteraction': 1});
          }
        }
      }
      // Set cookie when a user first visits the site
      if (!$.cookie('entry_author')) {
        if (Drupal.settings.zyxwarecustom && Drupal.settings.zyxwarecustom.node_author_uid) {
          $.cookie('entry_author', Drupal.settings.zyxwarecustom.node_author_uid + ':' + Drupal.settings.zyxwarecustom.node_author_name, { path: '/' });
          $.cookie('entry_node', Drupal.settings.zyxwarecustom.node_nid, { path: '/' });
        }
        else {
          $.cookie('entry_node', 'NA', { path: '/' });
          $.cookie('entry_author', 'NA', { path: '/' });
        }
        $.cookie('entry_url', window.location.pathname, { path: '/' });
        $.cookie('entry_referrer', document.referrer, { path: '/' });
      }

      // Store tracking information about the origin of the lead for the different conversion systems
      $('input[name="submitted[wf_ac_submitted_url]"]').each(function(){$(this).val(window.location.pathname);});
      if (Drupal.settings.zyxwarecustom && Drupal.settings.zyxwarecustom.node_author_uid) {
        $('input[name="submitted[wf_ac_node_author]"]').each(function(){$(this).val(Drupal.settings.zyxwarecustom.node_author_uid + ':' + Drupal.settings.zyxwarecustom.node_author_name);});
      }
      $('input[name="submitted[wf_ac_entry_url]"]').each(function(){$(this).val($.cookie('entry_url'));});
      $('input[name="submitted[wf_ac_entry_node]"]').each(function(){$(this).val($.cookie('entry_node'));});
      $('input[name="submitted[wf_ac_entry_author]"]').each(function(){$(this).val($.cookie('entry_author'));});
      $('input[name="submitted[wf_ac_entry_referrer]"]').each(function(){$(this).val($.cookie('entry_referrer'));});
      
      /*$.get("https://ipinfo.io", function(response) {
      	console.log(response.city, response.country);
      	if(response.country == 'AU' || response.country == 'AUS') {
      		setTimeout(function(){
      		  $("#doodle-popup-show").modal('show');	
      		},3000);
      	} 
      }, "jsonp");*/
      
    }
  };
}(jQuery));

;/*})'"*/
;/*})'"*/
(function ($) {

  Drupal.behaviors.captcha = {
    attach: function (context) {

      // Turn off autocompletion for the CAPTCHA response field.
      // We do it here with JavaScript (instead of directly in the markup)
      // because this autocomplete attribute is not standard and
      // it would break (X)HTML compliance.
      $("#edit-captcha-response").attr("autocomplete", "off");

    }
  };

  Drupal.behaviors.captchaAdmin = {
    attach: function (context) {
      // Add onclick handler to checkbox for adding a CAPTCHA description
      // so that the textfields for the CAPTCHA description are hidden
      // when no description should be added.
      // @todo: div.form-item-captcha-description depends on theming, maybe
      // it's better to add our own wrapper with id (instead of a class).
      $("#edit-captcha-add-captcha-description").click(function() {
        if ($("#edit-captcha-add-captcha-description").is(":checked")) {
          // Show the CAPTCHA description textfield(s).
          $("div.form-item-captcha-description").show('slow');
        }
        else {
          // Hide the CAPTCHA description textfield(s).
          $("div.form-item-captcha-description").hide('slow');
        }
      });
      // Hide the CAPTCHA description textfields if option is disabled on page load.
      if (!$("#edit-captcha-add-captcha-description").is(":checked")) {
        $("div.form-item-captcha-description").hide();
      }
    }

  };

})(jQuery);

;/*})'"*/
;/*})'"*/
(function($) {

  Drupal.behaviors.morecomments = {
    attach: function() {
      var pager = Drupal.settings.morecomments_pager;
      // Replace the default pager with the more comments pager
      $("#comments .pager").replaceWith(pager);
      //$(".morecomments-button").live('click', morecomments_load);
      $(".morecomments-button").on('click', function() {
        morecomments_load();
      });
      function morecomments_load(event) {
        var classes = $(this).attr("class");
        var info = classes.match("node-([0-9]+) page-([0-9]+)");
        $(".morecomments-button").append("<div class = 'wait'>&nbsp;</div>");
        $.get(Drupal.settings.basePath + "morecomments/" + info[1] + "/" + info[2], function(data) {
          $(".morecomments-button").replaceWith(data);
        });
      }
    }
  };

})(jQuery);

;/*})'"*/
;/*})'"*/
(function ($) {

Drupal.googleanalytics = {};

$(document).ready(function() {

  // Attach mousedown, keyup, touchstart events to document only and catch
  // clicks on all elements.
  $(document.body).bind("mousedown keyup touchstart", function(event) {

    // Catch the closest surrounding link of a clicked element.
    $(event.target).closest("a,area").each(function() {

      // Is the clicked URL internal?
      if (Drupal.googleanalytics.isInternal(this.href)) {
        // Skip 'click' tracking, if custom tracking events are bound.
        if ($(this).is('.colorbox') && (Drupal.settings.googleanalytics.trackColorbox)) {
          // Do nothing here. The custom event will handle all tracking.
          //console.info("Click on .colorbox item has been detected.");
        }
        // Is download tracking activated and the file extension configured for download tracking?
        else if (Drupal.settings.googleanalytics.trackDownload && Drupal.googleanalytics.isDownload(this.href)) {
          // Download link clicked.
          ga("send", {
            "hitType": "event",
            "eventCategory": "Downloads",
            "eventAction": Drupal.googleanalytics.getDownloadExtension(this.href).toUpperCase(),
            "eventLabel": Drupal.googleanalytics.getPageUrl(this.href),
            "transport": "beacon"
          });
        }
        else if (Drupal.googleanalytics.isInternalSpecial(this.href)) {
          // Keep the internal URL for Google Analytics website overlay intact.
          ga("send", {
            "hitType": "pageview",
            "page": Drupal.googleanalytics.getPageUrl(this.href),
            "transport": "beacon"
          });
        }
      }
      else {
        if (Drupal.settings.googleanalytics.trackMailto && $(this).is("a[href^='mailto:'],area[href^='mailto:']")) {
          // Mailto link clicked.
          ga("send", {
            "hitType": "event",
            "eventCategory": "Mails",
            "eventAction": "Click",
            "eventLabel": this.href.substring(7),
            "transport": "beacon"
          });
        }
        else if (Drupal.settings.googleanalytics.trackOutbound && this.href.match(/^\w+:\/\//i)) {
          if (Drupal.settings.googleanalytics.trackDomainMode !== 2 || (Drupal.settings.googleanalytics.trackDomainMode === 2 && !Drupal.googleanalytics.isCrossDomain(this.hostname, Drupal.settings.googleanalytics.trackCrossDomains))) {
            // External link clicked / No top-level cross domain clicked.
            ga("send", {
              "hitType": "event",
              "eventCategory": "Outbound links",
              "eventAction": "Click",
              "eventLabel": this.href,
              "transport": "beacon"
            });
          }
        }
      }
    });
  });

  // Track hash changes as unique pageviews, if this option has been enabled.
  if (Drupal.settings.googleanalytics.trackUrlFragments) {
    window.onhashchange = function() {
      ga("send", {
        "hitType": "pageview",
        "page": location.pathname + location.search + location.hash
      });
    };
  }

  // Colorbox: This event triggers when the transition has completed and the
  // newly loaded content has been revealed.
  if (Drupal.settings.googleanalytics.trackColorbox) {
    $(document).bind("cbox_complete", function () {
      var href = $.colorbox.element().attr("href");
      if (href) {
        ga("send", {
          "hitType": "pageview",
          "page": Drupal.googleanalytics.getPageUrl(href)
        });
      }
    });
  }

});

/**
 * Check whether the hostname is part of the cross domains or not.
 *
 * @param string hostname
 *   The hostname of the clicked URL.
 * @param array crossDomains
 *   All cross domain hostnames as JS array.
 *
 * @return boolean
 */
Drupal.googleanalytics.isCrossDomain = function (hostname, crossDomains) {
  /**
   * jQuery < 1.6.3 bug: $.inArray crushes IE6 and Chrome if second argument is
   * `null` or `undefined`, http://bugs.jquery.com/ticket/10076,
   * https://github.com/jquery/jquery/commit/a839af034db2bd934e4d4fa6758a3fed8de74174
   *
   * @todo: Remove/Refactor in D8
   */
  if (!crossDomains) {
    return false;
  }
  else {
    return $.inArray(hostname, crossDomains) > -1 ? true : false;
  }
};

/**
 * Check whether this is a download URL or not.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isDownload = function (url) {
  var isDownload = new RegExp("\\.(" + Drupal.settings.googleanalytics.trackDownloadExtensions + ")([\?#].*)?$", "i");
  return isDownload.test(url);
};

/**
 * Check whether this is an absolute internal URL or not.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isInternal = function (url) {
  var isInternal = new RegExp("^(https?):\/\/" + window.location.host, "i");
  return isInternal.test(url);
};

/**
 * Check whether this is a special URL or not.
 *
 * URL types:
 *  - gotwo.module /go/* links.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isInternalSpecial = function (url) {
  var isInternalSpecial = new RegExp("(\/go\/.*)$", "i");
  return isInternalSpecial.test(url);
};

/**
 * Extract the relative internal URL from an absolute internal URL.
 *
 * Examples:
 * - http://mydomain.com/node/1 -> /node/1
 * - http://example.com/foo/bar -> http://example.com/foo/bar
 *
 * @param string url
 *   The web url to check.
 *
 * @return string
 *   Internal website URL
 */
Drupal.googleanalytics.getPageUrl = function (url) {
  var extractInternalUrl = new RegExp("^(https?):\/\/" + window.location.host, "i");
  return url.replace(extractInternalUrl, '');
};

/**
 * Extract the download file extension from the URL.
 *
 * @param string url
 *   The web url to check.
 *
 * @return string
 *   The file extension of the passed url. e.g. "zip", "txt"
 */
Drupal.googleanalytics.getDownloadExtension = function (url) {
  var extractDownloadextension = new RegExp("\\.(" + Drupal.settings.googleanalytics.trackDownloadExtensions + ")([\?#].*)?$", "i");
  var extension = extractDownloadextension.exec(url);
  return (extension === null) ? '' : extension[1];
};

})(jQuery);

;/*})'"*/
;/*})'"*/
