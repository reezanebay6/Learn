(function($,Drupal,debounce){$.fn.drupalGetSummary=function(){var callback=this.data('summaryCallback');return this[0]&&callback?$.trim(callback(this[0])):'';};$.fn.drupalSetSummary=function(callback){var self=this;if(typeof callback!=='function'){var val=callback;callback=function callback(){return val;};}
return this.data('summaryCallback',callback).off('formUpdated.summary').on('formUpdated.summary',function(){self.trigger('summaryUpdated');}).trigger('summaryUpdated');};Drupal.behaviors.formSingleSubmit={attach:function attach(){function onFormSubmit(e){var $form=$(e.currentTarget);var formValues=$form.serialize();var previousValues=$form.attr('data-drupal-form-submit-last');if(previousValues===formValues){e.preventDefault();}else{$form.attr('data-drupal-form-submit-last',formValues);}}
$('body').once('form-single-submit').on('submit.singleSubmit','form:not([method~="GET"])',onFormSubmit);}};function triggerFormUpdated(element){$(element).trigger('formUpdated');}
function fieldsList(form){var $fieldList=$(form).find('[name]').map(function(index,element){return element.getAttribute('id');});return $.makeArray($fieldList);}
Drupal.behaviors.formUpdated={attach:function attach(context){var $context=$(context);var contextIsForm=$context.is('form');var $forms=(contextIsForm?$context:$context.find('form')).once('form-updated');var formFields=void 0;if($forms.length){$.makeArray($forms).forEach(function(form){var events='change.formUpdated input.formUpdated ';var eventHandler=debounce(function(event){triggerFormUpdated(event.target);},300);formFields=fieldsList(form).join(',');form.setAttribute('data-drupal-form-fields',formFields);$(form).on(events,eventHandler);});}
if(contextIsForm){formFields=fieldsList(context).join(',');var currentFields=$(context).attr('data-drupal-form-fields');if(formFields!==currentFields){triggerFormUpdated(context);}}},detach:function detach(context,settings,trigger){var $context=$(context);var contextIsForm=$context.is('form');if(trigger==='unload'){var $forms=(contextIsForm?$context:$context.find('form')).removeOnce('form-updated');if($forms.length){$.makeArray($forms).forEach(function(form){form.removeAttribute('data-drupal-form-fields');$(form).off('.formUpdated');});}}}};Drupal.behaviors.fillUserInfoFromBrowser={attach:function attach(context,settings){var userInfo=['name','mail','homepage'];var $forms=$('[data-user-info-from-browser]').once('user-info-from-browser');if($forms.length){userInfo.forEach(function(info){var $element=$forms.find('[name='+info+']');var browserData=localStorage.getItem('Drupal.visitor.'+info);var emptyOrDefault=$element.val()===''||$element.attr('data-drupal-default-value')===$element.val();if($element.length&&emptyOrDefault&&browserData){$element.val(browserData);}});}
$forms.on('submit',function(){userInfo.forEach(function(info){var $element=$forms.find('[name='+info+']');if($element.length){localStorage.setItem('Drupal.visitor.'+info,$element.val());}});});}};var handleFragmentLinkClickOrHashChange=function handleFragmentLinkClickOrHashChange(e){var url=void 0;if(e.type==='click'){url=e.currentTarget.location?e.currentTarget.location:e.currentTarget;}else{url=window.location;}
var hash=url.hash.substr(1);if(hash){var $target=$('#'+hash);$('body').trigger('formFragmentLinkClickOrHashChange',[$target]);setTimeout(function(){return $target.trigger('focus');},300);}};var debouncedHandleFragmentLinkClickOrHashChange=debounce(handleFragmentLinkClickOrHashChange,300,true);$(window).on('hashchange.form-fragment',debouncedHandleFragmentLinkClickOrHashChange);$(document).on('click.form-fragment','a[href*="#"]',debouncedHandleFragmentLinkClickOrHashChange);})(jQuery,Drupal,Drupal.debounce);