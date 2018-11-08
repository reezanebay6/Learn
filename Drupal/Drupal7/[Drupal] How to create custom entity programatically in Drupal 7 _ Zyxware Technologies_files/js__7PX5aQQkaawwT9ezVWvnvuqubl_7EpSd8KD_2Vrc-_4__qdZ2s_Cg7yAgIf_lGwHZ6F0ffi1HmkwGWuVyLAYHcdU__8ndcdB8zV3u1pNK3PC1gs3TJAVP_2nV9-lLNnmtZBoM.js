
(function ($) {
  var BrowserClass = {
    init: function() {
      this.classes = [];
      this.agent = navigator.userAgent.toLowerCase();
      this.checkBrowser();
      this.checkPlatform();
      if (this.isMobile(this.classes)) {
        this.classes.push('mobile');
      } else {
        this.classes.push('desktop');
      }
    },

    checkBrowser: function() {
      var matches = Array();
      var aresult = '';
      var aversion = '';
      var resultant = '';

      var iePattern = /(?:\b(ms)?ie\s+|\btrident\/7\.0;.*\s+rv:)(\d+)/;
      var ieMatch = this.agent.match(iePattern);

      if (ieMatch) {
        this.classes.push('ie');

        if (typeof ieMatch[2] !== 'undefined') {
          this.classes.push('ie' + ieMatch[2]);
        }
      }

      if (this.agent.match(/opera/)) {
        this.classes.push('opera');
        
        aresult = this.stristr(this.agent, 'version').split('/');
        if(aresult[1]) {
          aversion = aresult[1].split(' ');
          this.classes.push('opera' + this.clearVersion(aversion[0]));
        }
      }

      // Check for chrome desktop first, then chrome mobile, lastly check for
      // safari, as these are mutually exclusive.
      if (this.agent.match(/chrome/)) {
        this.classes.push('chrome');
        
        aresult = this.stristr(this.agent, 'chrome').split('/');
        aversion = aresult[1].split(' ');
        this.classes.push('chrome' + this.clearVersion(aversion[0]));
      } else if (this.agent.match(/crios/)) {
        this.classes.push('chrome');
        aresult = this.stristr(this.agent, 'crios').split('/');

        if (aresult[1]) {
          aversion = aresult[1].split(' ');
          this.classes.push('chrome' + this.clearVersion(aversion[0]));
        }
      } else if (this.agent.match(/safari/)) {
        this.classes.push('safari');
        aresult = this.stristr(this.agent, 'version').split('/');
        
        if(aresult[1]) {
          aversion = aresult[1].split(' ');
          this.classes.push('safari' + this.clearVersion(aversion[0]));
        }
      }

      if (this.agent.match(/netscape/)) {
        this.classes.push('netscape');
        
        matches = this.agent.match(/navigator\/([^ ]*)/);
        if (matches) {
          this.classes.push('netscape' + this.clearVersion(matches[1]));
        }
        else {
          matches = this.agent.match(/netscape6?\/([^ ]*)/);
          if (matches) {
            this.classes.push('netscape' + this.clearVersion(matches[1]));
          }
        }
      }

      if (this.agent.match(/firefox/)) {
        this.classes.push('ff');
        matches = this.agent.match(/firefox[\/ \(]([^ ;\)]+)/);
        if(matches) {
          this.classes.push('ff' + this.clearVersion(matches[1]));
        }
      }

      if (this.agent.match(/konqueror/)) {
        this.classes.push('konqueror');
        
        aresult = this.stristr(this.agent, 'konqueror').split(' ');
        aversion = aresult[0].split('/');
        this.classes.push('konqueror' + this.clearVersion(aversion[1]));
      }

      if (this.agent.match(/dillo/)) {
        this.classes.push('dillo');
      }

      if (this.agent.match(/chimera/)) {
        this.classes.push('chimera');
      }

      if (this.agent.match(/beonex/)) {
        this.classes.push('beonex');
      }

      if (this.agent.match(/aweb/)) {
        this.classes.push('aweb');
      }

      if (this.agent.match(/amaya/)) {
        this.classes.push('amaya');
      }

      if (this.agent.match(/icab/)) {
        this.classes.push('icab');
      }

      if (this.agent.match(/lynx/)) {
        this.classes.push('lynx');
      }

      if (this.agent.match(/galeon/)) {
        this.classes.push('galeon');
      }

      if (this.agent.match(/opera mini/)) {
        this.classes.push('operamini');
        
        resultant = this.stristr(this.agent, 'opera mini');
        if(resultant.match('/\//')) {
          aresult = resultant.split('/');
          aversion = aresult[1].split(' ');
          this.classes.push('operamini' + this.clearVersion(aversion[0]));
        }
        else {
          aversion = this.stristr(resultant, 'opera mini').split(' ');
          this.classes.push('operamini' + this.clearVersion(aversion[1]));
        }
      }
    },

    checkPlatform: function() {
      if (this.agent.match(/windows/)) {
        this.classes.push('win');
      }

      if (this.agent.match(/ipad/)) {
        this.classes.push('ipad');
      }

      if (this.agent.match(/ipod/)) {
        this.classes.push('ipod');
      }

      if (this.agent.match(/iphone/)) {
        this.classes.push('iphone');
      }

      if (this.agent.match(/mac/)) {
        this.classes.push('mac');
      }

      if (this.agent.match(/android/)) {
        this.classes.push('android');
      }

      if (this.agent.match(/linux/)) {
        this.classes.push('linux');
      }

      if (this.agent.match(/nokia/)) {
        this.classes.push('nokia');
      }

      if (this.agent.match(/blackberry/)) {
        this.classes.push('blackberry');
      }

      if (this.agent.match(/freebsd/)) {
        this.classes.push('freebsd');
      }

      if (this.agent.match(/openbsd/)) {
        this.classes.push('openbsd');
      }

      if (this.agent.match(/netbsd/)) {
        this.classes.push('netbsd');
      }
    },

    isMobile: function(classes) {
      var mobile_devices = ['ipad', 'ipod', 'iphone', 'android', 'blackberry', 'operamini'];
      var mobile_devices_test = false;

      $.each(mobile_devices, function(index, value) {
        if ($.inArray(value, classes) != -1) {
          mobile_devices_test = true;

          // Terminate the $.each() loop, since a match has been found.
          return false;
        }
      });

      if (mobile_devices_test || this.agent.match(/(up.browser|up.link|mmp|symbian|smartphone|midp|wap|vodafone|o2|pocket|kindle|mobile|pda|psp|treo)/)) {
        return true;
      }
    },
    
    clearVersion: function(version) {
      version = version.replace('/[^0-9,.,a-z,A-Z-]/', '');
      var find = (version + '').indexOf('.');
      return version.substr(0, find);
    },
    
    stristr: function(haystack, needle, bool) {
      // Finds first occurrence of a string within another, case insensitive  
      // 
      // version: 1103.1210
      // discuss at: http://phpjs.org/functions/stristr
      // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
      // +   bugfxied by: Onno Marsman
      // *     example 1: stristr('Kevin van Zonneveld', 'Van');
      // *     returns 1: 'van Zonneveld'
      // *     example 2: stristr('Kevin van Zonneveld', 'VAN', true);
      // *     returns 2: 'Kevin '
      var pos = 0;

      haystack += '';
      pos = haystack.toLowerCase().indexOf((needle + '').toLowerCase());
      if (pos == -1) {
          return false;
      } else {
          if (bool) {
              return haystack.substr(0, pos);
          } else {
              return haystack.slice(pos);
          }
      }
    }

  };

  BrowserClass.init();
  $('body').addClass(BrowserClass.classes.join(' '));
})(jQuery);

;/*})'"*/
;/*})'"*/
(function ($) {
  'use strict';

  Drupal.behaviors.eu_cookie_compliance_popup = {
    attach: function (context, settings) {
      $('body').once('eu-cookie-compliance', function () {
        // If configured, check JSON callback to determine if in EU.
        if (Drupal.settings.eu_cookie_compliance.popup_eu_only_js) {
          if (Drupal.eu_cookie_compliance.showBanner()) {
            var url = Drupal.settings.basePath + 'eu-cookie-compliance-check';
            var data = {};
            $.getJSON(url, data, function (data) {
              // If in the EU, show the compliance banner.
              if (data.in_eu) {
                Drupal.eu_cookie_compliance.execute();
              }

              // If not in EU, set an agreed cookie automatically.
              else {
                Drupal.eu_cookie_compliance.setStatus(2);
              }
            });
          }
        }

        // Otherwise, fallback to standard behavior which is to render the banner.
        else {
          Drupal.eu_cookie_compliance.execute();
        }
      });
    }
  };

  Drupal.eu_cookie_compliance = {};

  Drupal.eu_cookie_compliance.execute = function () {
    try {
      if (!Drupal.settings.eu_cookie_compliance.popup_enabled) {
        return;
      }

      if (!Drupal.eu_cookie_compliance.cookiesEnabled()) {
        return;
      }

      Drupal.eu_cookie_compliance.updateCheck();
      var status = Drupal.eu_cookie_compliance.getCurrentStatus();
      if (status === 0 || status === null) {
        if (!Drupal.settings.eu_cookie_compliance.disagree_do_not_show_popup || status === null) {
          // Detect mobile here and use mobile_popup_html_info, if we have a mobile device.
          if (window.matchMedia('(max-width: ' + Drupal.settings.eu_cookie_compliance.mobile_breakpoint + 'px)').matches && Drupal.settings.eu_cookie_compliance.use_mobile_message) {
            Drupal.eu_cookie_compliance.createPopup(Drupal.settings.eu_cookie_compliance.mobile_popup_html_info);
          }
          else {
            Drupal.eu_cookie_compliance.createPopup(Drupal.settings.eu_cookie_compliance.popup_html_info);
          }

          Drupal.eu_cookie_compliance.attachAgreeEvents();
        }
      } else if (status === 1 && Drupal.settings.eu_cookie_compliance.popup_agreed_enabled) {
        Drupal.eu_cookie_compliance.createPopup(Drupal.settings.eu_cookie_compliance.popup_html_agreed);
        Drupal.eu_cookie_compliance.attachHideEvents();
      }
    }
    catch (e) {
    }
  };

  Drupal.eu_cookie_compliance.createPopup = function (html) {
    // This fixes a problem with jQuery 1.9.
    var $popup = $('<div></div>').html(html);
    $popup.attr('id', 'sliding-popup');
    if (!Drupal.settings.eu_cookie_compliance.popup_use_bare_css) {
      $popup.height(Drupal.settings.eu_cookie_compliance.popup_height)
          .width(Drupal.settings.eu_cookie_compliance.popup_width);
    }

    $popup.hide();
    var height = 0;
    if (Drupal.settings.eu_cookie_compliance.popup_position) {
      $popup.prependTo('body');
      height = $popup.outerHeight();
      $popup.show()
        .attr({ class: 'sliding-popup-top clearfix' })
        .css({ top: -1 * height })
        .animate({ top: 0 }, Drupal.settings.eu_cookie_compliance.popup_delay, null, function () {
          $popup.trigger('eu_cookie_compliance_popup_open');
        });
    } else {
      if (Drupal.settings.eu_cookie_compliance.better_support_for_screen_readers) {
        $popup.prependTo('body');
      } else {
        $popup.appendTo('body');
      }

      height = $popup.outerHeight();
      $popup.show()
        .attr({ class: 'sliding-popup-bottom' })
        .css({ bottom: -1 * height })
        .animate({ bottom: 0 }, Drupal.settings.eu_cookie_compliance.popup_delay, null, function () {
          $popup.trigger('eu_cookie_compliance_popup_open');
        });
    }
  };

  Drupal.eu_cookie_compliance.attachAgreeEvents = function () {
    var clickingConfirms = Drupal.settings.eu_cookie_compliance.popup_clicking_confirmation;
    var scrollConfirms = Drupal.settings.eu_cookie_compliance.popup_scrolling_confirmation;

    $('.agree-button').click(Drupal.eu_cookie_compliance.acceptAction);

    if (clickingConfirms) {
      $('a, input[type=submit], button[type=submit]').bind('click.euCookieCompliance', Drupal.eu_cookie_compliance.acceptAction);
    }

    if (scrollConfirms) {
      var alreadyScrolled = false;
      var scrollHandler = function () {
        if (alreadyScrolled) {
          Drupal.eu_cookie_compliance.acceptAction();
          $(window).off('scroll', scrollHandler);
        } else {
          alreadyScrolled = true;
        }
      };

      $(window).bind('scroll', scrollHandler);
    }

    $('.find-more-button').not('.find-more-button-processed').addClass('find-more-button-processed').click(Drupal.eu_cookie_compliance.moreInfoAction);
  };

  Drupal.eu_cookie_compliance.attachHideEvents = function () {
    var popupHideAgreed = Drupal.settings.eu_cookie_compliance.popup_hide_agreed;
    var clickingConfirms = Drupal.settings.eu_cookie_compliance.popup_clicking_confirmation;
    $('.hide-popup-button').click(function () {
      Drupal.eu_cookie_compliance.changeStatus(2);
    }
    );
    if (clickingConfirms) {
      $('a, input[type=submit], button[type=submit]').unbind('click.euCookieCompliance');
    }

    if (popupHideAgreed) {
      $('a, input[type=submit], button[type=submit]').bind('click.euCookieComplianceHideAgreed', function () {
        Drupal.eu_cookie_compliance.changeStatus(2);
      });
    }

    $('.find-more-button').not('.find-more-button-processed').addClass('find-more-button-processed').click(Drupal.eu_cookie_compliance.moreInfoAction);
  };

  Drupal.eu_cookie_compliance.acceptAction = function () {
    var agreedEnabled = Drupal.settings.eu_cookie_compliance.popup_agreed_enabled;
    var nextStatus = 1;
    if (!agreedEnabled) {
      Drupal.eu_cookie_compliance.setStatus(1);
      nextStatus = 2;
    }

    Drupal.eu_cookie_compliance.changeStatus(nextStatus);
  };

  Drupal.eu_cookie_compliance.moreInfoAction = function () {
    if (Drupal.settings.eu_cookie_compliance.disagree_do_not_show_popup) {
      Drupal.eu_cookie_compliance.setStatus(0);
      $('#sliding-popup').remove().trigger('eu_cookie_compliance_popup_close');
    } else {
      if (Drupal.settings.eu_cookie_compliance.popup_link_new_window) {
        window.open(Drupal.settings.eu_cookie_compliance.popup_link);
      } else {
        window.location.href = Drupal.settings.eu_cookie_compliance.popup_link;
      }
    }
  };

  Drupal.eu_cookie_compliance.getCurrentStatus = function () {
    var cookieName = (typeof Drupal.settings.eu_cookie_compliance.cookie_name === 'undefined' || Drupal.settings.eu_cookie_compliance.cookie_name === '') ? 'cookie-agreed' : Drupal.settings.eu_cookie_compliance.cookie_name;
    var value = $.cookie(cookieName);
    value = parseInt(value);
    if (isNaN(value)) {
      value = null;
    }

    return value;
  };

  Drupal.eu_cookie_compliance.changeStatus = function (value) {
    var status = Drupal.eu_cookie_compliance.getCurrentStatus();
    var reloadPage = Drupal.settings.eu_cookie_compliance.reload_page;
    if (status === value) {
      return;
    }

    if (Drupal.settings.eu_cookie_compliance.popup_position) {
      $('.sliding-popup-top').animate({ top: $('#sliding-popup').outerHeight() * -1 }, Drupal.settings.eu_cookie_compliance.popup_delay, function () {
        if (status === null && !reloadPage) {
          $('#sliding-popup').html(Drupal.settings.eu_cookie_compliance.popup_html_agreed).animate({ top: 0 }, Drupal.settings.eu_cookie_compliance.popup_delay);
          Drupal.eu_cookie_compliance.attachHideEvents();
        } else if (status === 1) {
          $('#sliding-popup').remove().trigger('eu_cookie_compliance_popup_close');
        }
      });
    } else {
      $('.sliding-popup-bottom').animate({ bottom: $('#sliding-popup').outerHeight() * -1 }, Drupal.settings.eu_cookie_compliance.popup_delay, function () {
        if (status === null && !reloadPage) {
          $('#sliding-popup').html(Drupal.settings.eu_cookie_compliance.popup_html_agreed).animate({ bottom: 0 }, Drupal.settings.eu_cookie_compliance.popup_delay);
          Drupal.eu_cookie_compliance.attachHideEvents();
        } else if (status === 1) {
          $('#sliding-popup').remove().trigger('eu_cookie_compliance_popup_close');
        }
      });
    }

    if (reloadPage) {
      location.reload();
    }

    Drupal.eu_cookie_compliance.setStatus(value);
  };

  Drupal.eu_cookie_compliance.setStatus = function (status) {
    var date = new Date();
    var domain = Drupal.settings.eu_cookie_compliance.domain ? Drupal.settings.eu_cookie_compliance.domain : '';
    var path = Drupal.settings.basePath;
    var cookieName = (typeof Drupal.settings.eu_cookie_compliance.cookie_name === 'undefined' || Drupal.settings.eu_cookie_compliance.cookie_name === '') ? 'cookie-agreed' : Drupal.settings.eu_cookie_compliance.cookie_name;
    if (path.length > 1) {
      var pathEnd = path.length - 1;
      if (path.lastIndexOf('/') === pathEnd) {
        path = path.substring(0, pathEnd);
      }
    }

    date.setDate(date.getDate() + parseInt(Drupal.settings.eu_cookie_compliance.cookie_lifetime));
    $.cookie(cookieName, status, { expires: date, path: path, domain: domain });
    $(document).trigger('eu_cookie_compliance.changeStatus', [status]);
  };

  Drupal.eu_cookie_compliance.hasAgreed = function () {
    var status = Drupal.eu_cookie_compliance.getCurrentStatus();
    return (status === 1 || status === 2);
  };

  Drupal.eu_cookie_compliance.showBanner = function () {
    var showBanner = false;
    var status = Drupal.eu_cookie_compliance.getCurrentStatus();
    if (status === 0 || status === null) {
      if (!Drupal.settings.eu_cookie_compliance.disagree_do_not_show_popup || status === null) {
        showBanner = true;
      }
    } else if (status === 1 && Drupal.settings.eu_cookie_compliance.popup_agreed_enabled) {
      showBanner = true;
    }

    return showBanner;
  };

  Drupal.eu_cookie_compliance.cookiesEnabled = function () {
    var cookieEnabled = navigator.cookieEnabled;
    if (typeof navigator.cookieEnabled === 'undefined' && !cookieEnabled) {
      document.cookie = 'testCookie';
      cookieEnabled = (document.cookie.indexOf('testCookie') !== -1);
    }

    return cookieEnabled;
  };

  // This code upgrades the cookie agreed status when upgrading for an old version.
  Drupal.eu_cookie_compliance.updateCheck = function () {
    var legacyCookie = 'cookie-agreed-' + Drupal.settings.eu_cookie_compliance.popup_language;
    var domain = Drupal.settings.eu_cookie_compliance.domain ? Drupal.settings.eu_cookie_compliance.domain : '';
    var path = Drupal.settings.basePath;
    var cookie = $.cookie(legacyCookie);
    var date = new Date();
    var cookieName = (typeof Drupal.settings.eu_cookie_compliance.cookie_name === 'undefined' || Drupal.settings.eu_cookie_compliance.cookie_name === '') ? 'cookie-agreed' : Drupal.settings.eu_cookie_compliance.cookie_name;


    // jQuery.cookie 1.0 (bundled with Drupal) returns null,
    // jQuery.cookie 1.4.1 (bundled with some themes) returns undefined.
    // We had a 1.4.1 related bug where the value was set to 'null' (string).
    if (cookie !== undefined && cookie !== null && cookie !== 'null') {
      date.setDate(date.getDate() + parseInt(Drupal.settings.eu_cookie_compliance.cookie_lifetime));
      $.cookie(cookieName, cookie, { expires: date, path:  path, domain: domain });

      // Use removeCookie if the function exists.
      if (typeof $.removeCookie !== 'undefined') {
        $.removeCookie(legacyCookie);
      } else {
        $.cookie(legacyCookie, null, { path: path, domain: domain });
      }
    }
  };

})(jQuery);

;/*})'"*/
;/*})'"*/
