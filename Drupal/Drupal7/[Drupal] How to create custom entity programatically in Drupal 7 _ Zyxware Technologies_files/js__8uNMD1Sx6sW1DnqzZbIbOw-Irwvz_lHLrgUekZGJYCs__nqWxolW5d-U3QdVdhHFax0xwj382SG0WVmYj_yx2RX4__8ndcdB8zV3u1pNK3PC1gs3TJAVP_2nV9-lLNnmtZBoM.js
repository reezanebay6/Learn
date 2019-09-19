(function ($) {
var captcha_status = new Array(); 
Drupal.behaviors.boost_captcha = {
  attach: function (context) {
    $('div.boost-captcha-process-form:not(boost-captcha-processed)').each(function() {
      var form_id = $(this).find('input[name="form_id"]').attr('value');
      var form_wrapper = $(this);
      // Don't do anything if there is no captcha fieldset
      if (form_wrapper.find('fieldset.captcha').length == 0) {
        return;
      }
      captcha_status[form_id] = 'default';
      form_wrapper.click(function(e) {
        if (captcha_status[form_id] == 'default') {
          // Disable form submission till AJAX returns
          form_wrapper.find('form').submit(function() {
            if (captcha_status[form_id] != 'loaded') {
              e.preventDefault();
              return false;
            }
            return true;
          });
          captcha_status[form_id] = 'processing';
          // Fetch captcha using ajax
          $.ajax({
            url: Drupal.settings.basePath + 'ajax/boost-captcha/get-captcha/' + form_id,
            dataType: "html",
            success: function(data) {
              form_wrapper.find('fieldset.captcha').replaceWith(data);
              Drupal.attachBehaviors(form_wrapper.find('fieldset.captcha'));
              captcha_status[form_id] = 'loaded';
              // If captcha is recaptcha re-process the recaptcha and refresh it
              if (form_wrapper.find('input[name="captcha_response"]').attr('value') == 'reCAPTCHA') {
                var recaptcha_id = 'recaptcha_ajax_api_container_' + form_id;
                if (form_wrapper.find('div.' + recaptcha_id).length == 0) {
                  form_wrapper.find('fieldset.captcha div.form-item').before($('<div id="' + recaptcha_id + '"></div>'));
                }
                // load Recaptcha if not already loaded
                if (typeof(Recaptcha) != "object") {
                  $.ajax({
                    url: 'http://www.google.com/recaptcha/api/js/recaptcha.js',
                    dataType: "script",
                    success: function() {
                      if (Recaptcha && Recaptcha.create) {
                        Recaptcha.create(Drupal.settings.boost_captcha.recaptcha_public_key, recaptcha_id, RecaptchaOptions.theme);
                      }
                    }
                  });
                }
                else {
                  if (Recaptcha && Recaptcha.create) {
                    Recaptcha.create(Drupal.settings.boost_captcha.recaptcha_public_key, recaptcha_id, RecaptchaOptions.theme);
                  }
                }
              }
            }
          });
        }
      });
    }).addClass('boost-captcha-processed');
  }
};  
})(jQuery);

;/*})'"*/
;/*})'"*/
(function ($) {
Drupal.behaviors.spam_blackhole = {
  attach: function (context) {
    if (Drupal.settings.spam_blackhole && Drupal.settings.spam_blackhole.forms) {
      $('input[name="form_id"]:not(.spam-blackhole-processed)', context).each(function () {
        if (Drupal.settings.spam_blackhole && Drupal.settings.spam_blackhole.forms) {
          forms = Drupal.settings.spam_blackhole.forms;
          for (var i = 0; i < forms.length; i++) {
            form_id = $(this).attr('value');
            if (forms[i] == form_id) {
              cur_form = $(this).parents('form')[0];
              action = $(cur_form).attr('action');
              $(cur_form).attr('action', action.replace(Drupal.settings.spam_blackhole.dummy_url, Drupal.settings.spam_blackhole.base_url));
            }
          }
        }
      }).addClass('spam-blackhole-processed');
    }
  }
};
})(jQuery);

;/*})'"*/
;/*})'"*/
/**
 * @file
 * Modifies the file selection and download access expiration interfaces.
 */

var uc_file_list = {};

/**
 * Adds files to delete to the list.
 */
function _uc_file_delete_list_populate() {
  jQuery('.affected-file-name').empty().append(uc_file_list[jQuery('#edit-recurse-directories').attr('checked')]);
}

jQuery(document).ready(
  function() {
    _uc_file_delete_list_populate();
  }
);

// When you (un)check the recursion option on the file deletion form.
Drupal.behaviors.ucFileDeleteList = {
  attach: function(context, settings) {
    jQuery('#edit-recurse-directories:not(.ucFileDeleteList-processed)', context).addClass('ucFileDeleteList-processed').change(
      function() {
        _uc_file_delete_list_populate()
      }
    );
  }
}

/**
 * Give visual feedback to the user about download numbers.
 *
 * TODO: would be to use AJAX to get the new download key and
 * insert it into the link if the user hasn't exceeded download limits.
 * I dunno if that's technically feasible though.
 */
function uc_file_update_download(id, accessed, limit) {
  if (accessed < limit || limit == -1) {

    // Handle the max download number as well.
    var downloads = '';
    downloads += accessed + 1;
    downloads += '/';
    downloads += limit == -1 ? 'Unlimited' : limit;
    jQuery('td#download-' + id).html(downloads);
    jQuery('td#download-' + id).attr("onclick", "");
  }
}

;/*})'"*/
;/*})'"*/
(function ($) {

Drupal.behaviors.commentNotify = {
  attach: function (context) {
    $('#edit-notify', context)
      .bind('change', function() {
        $('#edit-notify-type', context)
          [this.checked ? 'show' : 'hide']()
          .find('input[type=checkbox]:checked').attr('checked', 'checked');
      })
      .trigger('change');
  }
}

})(jQuery);

;/*})'"*/
;/*})'"*/
