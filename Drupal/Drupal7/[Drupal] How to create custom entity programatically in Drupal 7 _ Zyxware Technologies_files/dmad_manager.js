/*
 * @file
 * Javascript file for Ad manager module
 */


/**
 * Drupal behavior that has functions to manage the ads from the javascript variables.
 */
(function ($) {
  Drupal.behaviors.dmad_manager_insert = {
    attach: function (context, settings) {
      if (settings.dmad_manager && settings.dmad_manager.content_channel) {
        for (var content_channel in campaigns) {
          if (content_channel == settings.dmad_manager.content_channel) {
            var utm_mediums = campaigns[content_channel];
            for (var utm_medium in utm_mediums) {

              var utm_campaigns = utm_mediums[utm_medium];
              console.log(utm_campaigns);
              var utm_campaign = dmad_manager_weighted_random_generator(utm_campaigns);
              for (var name in variants[utm_campaign][utm_medium]) {
                var utm_content = dmad_manager_weighted_random_generator(variants[utm_campaign][utm_medium][name]['image']);
                var utm_call_action = dmad_manager_get_link(variants[utm_campaign][utm_medium][name]['call_action']);
                if(typeof ga == 'function'){
                  ga('send', 'event', 'View', utm_campaign + ':' + utm_medium, utm_content, 1, {'nonInteraction': 1});
                }
                dmad_manager_display_ads(utm_content, utm_medium, utm_campaign, utm_call_action);
              }
            }
          }
        }
      }
      $("#block-zyxwarecustom-zyxwarecustom-banner-ads .content  img").show();
    }
  }

  /**
   * @TODO
   * Function to get the links to which the ads should redirect. Create text files in the folder structure.
   */

  /**
   * Function to display the ads in the region specified (Right Sidebar, Article body (inline) or hero-image).
   * Replaces/appends the image to the required region using jQuery.
   *
   * @param string utm_content
   * @param string utm_medium
   * @param string utm_campaign
   */
  function dmad_manager_display_ads(utm_content, utm_medium, utm_campaign, utm_call_action) {
    utm_call_action = utm_call_action.trim();
    if (utm_medium == 'right-sidebar') {
      $('div.region.region-sidebar-second > div#block-zyxwarecustom-zyxwarecustom-banner-ads > div.content > a').remove();
      $('div.region.region-sidebar-second > div#block-zyxwarecustom-zyxwarecustom-banner-ads > div.content').append('<img class="cursor-pointer" onclick="dmad_manager_track_click_event(\'' + utm_campaign + '\', \'' + utm_medium + '\', \'' + utm_content + '\', \''  + utm_call_action + '\')" id="' + utm_campaign + ':' + utm_medium + ':' + utm_content + '" src="/sites/all/modules/custom/digital_marketing_manager/dmad_manager/' + urls[utm_content] + '"/>');
    }
    else if (utm_medium == 'hero-image') {
      $('div.field.field-name-field-hero-image > div.field-items > div.field-item img').remove();
      $('div.field.field-name-field-hero-image > div.field-items > div.field-item').append('<img class="cursor-pointer" onclick="dmad_manager_track_click_event(\'' + utm_campaign + '\', \'' + utm_medium + '\', \'' + utm_content + '\', \''  + utm_call_action + '\')" id="' + utm_campaign + ':' + utm_medium + ':' + utm_content + '" src="/sites/all/modules/custom/digital_marketing_manager/dmad_manager/' + urls[utm_content] + '"/>');
    }
    else if (utm_medium == 'article-body') {
      pos = Math.floor(($('body p').length) / 2);
      $('<img class="cursor-pointer" onclick="dmad_manager_track_click_event(\'' + utm_campaign + '\', \'' + utm_medium + '\', \'' + utm_content + '\', \''  + utm_call_action + '\')" id="' + utm_campaign + ':' + utm_medium + ':' + utm_content + '" src="/sites/all/modules/custom/digital_marketing_manager/dmad_manager/' + urls[utm_content] + '"/>').insertBefore('body p:eq(' + pos + ')');
    }
  }

  /**
   * Function to generate random numbers according to weights in the array.
   *
   * @param Object object
   * @returns String utm_campaign
   */
  function dmad_manager_weighted_random_generator(object) {
  //  console.log(Object.keys(object));
    // Extract the values from the object array which are the weights.
    var weights = Object.keys(object).map(function (key) {return object[key]});
    // Extract the keys from the object array which is the campaign name.
    var items = Object.keys(object);
    var duplicate_items = [];
    for (var key in weights) {
      for (var i = 0; i < weights[key]; i++) {
        duplicate_items.push(items[key]);
      }
    }
    var item = duplicate_items[Math.floor(Math.random() * duplicate_items.length)];
    return item;
  }

  /**
   * Function to get call action links.
   *
   * @param Object object
   * @returns String utm_campaign
   */
  function dmad_manager_get_link(object) {
    for(key in object) {
      var value = object[key];
      return value;
    }
  }

}(jQuery));

/**
 * Function to track click event on ads.
 *
 * @param String track_utm_campaign
 * @param String track_utm_medium
 * @param String track_utm_content
 * @param String track_utm_call_action
 */
function dmad_manager_track_click_event(track_utm_campaign, track_utm_medium, track_utm_content, track_utm_call_action) {
  if(typeof ga == 'function'){
    ga('send', 'event', 'Click', track_utm_campaign + ':' + track_utm_medium, track_utm_content, 1, {'nonInteraction': 1});
  }
  window.open(track_utm_call_action, '_blank');
}
