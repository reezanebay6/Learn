(function($){Drupal.behaviors.DruentCollapsibleMenu={attach:function(context,settings){var maxWidth=445;if($('#main-menu-links a').length==0){return;}
if($('a#menu-toggle').length==0){$('nav#main-menu').append('<a href="#" id="menu-toggle">'+Drupal.t('Menu')+'</a>');}
else{return;}
$('a#menu-toggle').click(function(){$('#main-menu-links').slideToggle('fast');return false;});$(window).resize(function(){var w=$(window).width();if(w>maxWidth&&$('#main-menu-links').is(':hidden')){$('#main-menu-links').removeAttr('style');}});}}})(jQuery);;