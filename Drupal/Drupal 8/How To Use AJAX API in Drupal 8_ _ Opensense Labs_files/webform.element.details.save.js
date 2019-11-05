(function($,Drupal){'use strict';Drupal.behaviors.webformDetailsSave={attach:function(context){if(!window.localStorage){return;}
$('details > summary',context).once('webform-details-summary-save').click(function(){var $details=$(this).parent();if($details[0].hasAttribute('data-webform-details-nosave')){return;}
var name=Drupal.webformDetailsSaveGetName($details);if(!name){return;}
var open=($details.attr('open')!=='open')?'1':'0';localStorage.setItem(name,open);});$('details',context).once('webform-details-save').each(function(){var $details=$(this);var name=Drupal.webformDetailsSaveGetName($details);if(!name){return;}
var open=localStorage.getItem(name);if(open===null){return;}
if(open==='1'){$details.attr('open','open');}
else{$details.removeAttr('open');}});}};Drupal.webformDetailsSaveGetName=function($details){if(!window.localStorage){return '';}
var webformId=$details.attr('data-webform-element-id');if(webformId){return 'Drupal.webform.'+webformId.replace('--','.');}
var detailsId=$details.attr('id');if(!detailsId){return '';}
var $form=$details.parents('form');if(!$form.length||!$form.attr('id')){return '';}
var formId=$form.attr('id');if(!formId){return '';}
formId=formId.replace(/--.+?$/,'').replace(/-/g,'_');detailsId=detailsId.replace(/--.+?$/,'').replace(/-/g,'_');return 'Drupal.webform.'+formId+'.'+detailsId;};})(jQuery,Drupal);