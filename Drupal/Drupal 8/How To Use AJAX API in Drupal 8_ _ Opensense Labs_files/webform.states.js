(function($,Drupal){'use strict';Drupal.webform=Drupal.webform||{};Drupal.webform.states=Drupal.webform.states||{};Drupal.webform.states.slideDown=Drupal.webform.states.slideDown||{};Drupal.webform.states.slideDown.duration='slow';Drupal.webform.states.slideUp=Drupal.webform.states.slideUp||{};Drupal.webform.states.slideUp.duration='fast';$.fn.hasData=function(data){return(typeof this.data(data)!=='undefined');};$.fn.isWebform=function(){return $(this).closest('form[id^="webform"]').length?true:false;};Drupal.states.Trigger.states.empty.change=function change(){return this.val()==='';};var states=Drupal.states;Drupal.states.Dependent.prototype.compare=function compare(reference,selector,state){var value=this.values[selector][state.name];var name=reference.constructor.name;if(!name){name=$.type(reference);name=name.charAt(0).toUpperCase()+name.slice(1);}
if(name in states.Dependent.comparisons){return states.Dependent.comparisons[name](reference,value);}
if(reference.constructor.name in states.Dependent.comparisons){return states.Dependent.comparisons[reference.constructor.name](reference,value);}
return _compare2(reference,value);};function _compare2(a,b){if(a===b){return typeof a==='undefined'?a:true;}
return typeof a==='undefined'||typeof b==='undefined';}
Drupal.states.Dependent.comparisons.Object=function(reference,value){if('pattern'in reference){return(new RegExp(reference['pattern'])).test(value);}
else if('!pattern'in reference){return!((new RegExp(reference['!pattern'])).test(value));}
else if('less'in reference){return(value!==''&&parseFloat(reference['less'])>parseFloat(value));}
else if('greater'in reference){return(value!==''&&parseFloat(reference['greater'])<parseFloat(value));}
else{return reference.indexOf(value)!==false;}};var $document=$(document);$document.on('state:required',function(e){if(e.trigger&&$(e.target).isWebform()){var $target=$(e.target);if(e.value){$target.find('input[type="file"]').attr({'required':'required','aria-required':'true'});}
else{$target.find('input[type="file"]').removeAttr('required aria-required');}
if($target.is('.js-webform-type-radios, .js-webform-type-checkboxes, fieldset')){if(e.value){$target.find('legend span.fieldset-legend:not(.visually-hidden)').addClass('js-form-required form-required');}
else{$target.find('legend span.fieldset-legend:not(.visually-hidden)').removeClass('js-form-required form-required');}}
if($target.is('.js-webform-type-radios, .js-form-type-webform-radios-other')){if(e.value){$target.find('input[type="radio"]').attr({'required':'required','aria-required':'true'});}
else{$target.find('input[type="radio"]').removeAttr('required aria-required');}}
if($target.is('.js-webform-type-checkboxes, .js-form-type-webform-checkboxes-other')){var $checkboxes=$target.find('input[type="checkbox"]');if(e.value){$checkboxes.bind('click',checkboxRequiredhandler);if(!$checkboxes.is(':checked')){$checkboxes.attr({'required':'required','aria-required':'true'});}}
else{$checkboxes.removeAttr('required aria-required').unbind('click',checkboxRequiredhandler);}}
if($target.is('fieldset')){$target.removeAttr('required aria-required');}}});$document.on('state:readonly',function(e){if(e.trigger&&$(e.target).isWebform()){$(e.target).prop('readonly',e.value).closest('.js-form-item, .js-form-wrapper').toggleClass('webform-readonly',e.value).find('input, textarea').prop('readonly',e.value);}});$document.on('state:visible state:visible-slide',function(e){if(e.trigger&&$(e.target).isWebform()){if(e.value){$(':input',e.target).addBack().each(function(){restoreValueAndRequired(this);triggerEventHandlers(this);});}
else{$(':input',e.target).addBack().each(function(){backupValueAndRequired(this);clearValueAndRequired(this);triggerEventHandlers(this);});}}});$document.bind('state:visible-slide',function(e){if(e.trigger&&$(e.target).isWebform()){var effect=e.value?'slideDown':'slideUp';var duration=Drupal.webform.states[effect].duration;$(e.target).closest('.js-form-item, .js-form-submit, .js-form-wrapper')[effect](duration);}});Drupal.states.State.aliases['invisible-slide']='!visible-slide';$document.on('state:disabled',function(e){if(e.trigger&&$(e.target).isWebform()){$(e.target).prop('disabled',e.value).closest('.js-form-item, .js-form-submit, .js-form-wrapper').toggleClass('form-disabled',e.value).find('select, input, textarea, button').prop('disabled',e.value);$(e.target).trigger('webform:disabled').find('select, input, textarea, button').trigger('webform:disabled');}});function checkboxRequiredhandler(){var $checkboxes=$(this).closest('.js-webform-type-checkboxes, .js-form-type-webform-checkboxes-other').find('input[type="checkbox"]');if($checkboxes.is(':checked')){$checkboxes.removeAttr('required aria-required');}
else{$checkboxes.attr({'required':'required','aria-required':'true'});}}
function triggerEventHandlers(input){var $input=$(input);var type=input.type;var tag=input.tagName.toLowerCase();var extraParameters=['webform.states'];if(type==='checkbox'||type==='radio'){$input.trigger('change',extraParameters).trigger('blur',extraParameters);}
else if(tag==='select'){$input.trigger('change',extraParameters).trigger('blur',extraParameters);}
else if(type!=='submit'&&type!=='button'&&type!=='file'){$input.trigger('input',extraParameters).trigger('change',extraParameters).trigger('keydown',extraParameters).trigger('keyup',extraParameters).trigger('blur',extraParameters);}}
function backupValueAndRequired(input){var $input=$(input);var type=input.type;var tag=input.tagName.toLowerCase();if($input.prop('required')&&!$input.hasData('webform-required')){$input.data('webform-required',true);}
if(!$input.hasData('webform-value')){if(type==='checkbox'||type==='radio'){$input.data('webform-value',$input.prop('checked'));}
else if(tag==='select'){var values=[];$input.find('option:selected').each(function(i,option){values[i]=option.value;});$input.data('webform-value',values);}
else if(type!=='submit'&&type!=='button'){$input.data('webform-value',input.value);}}}
function restoreValueAndRequired(input){var $input=$(input);var value=$input.data('webform-value');if(typeof value!=='undefined'){var type=input.type;var tag=input.tagName.toLowerCase();if(type==='checkbox'||type==='radio'){$input.prop('checked',value);}
else if(tag==='select'){$.each(value,function(i,option_value){$input.find("option[value='"+option_value+"']").prop('selected',true);});}
else if(type!=='submit'&&type!=='button'){input.value=value;}
$input.removeData('webform-value');}
var required=$input.data('webform-required');if(typeof required!=='undefined'){if(required){$input.prop('required',true);}
$input.removeData('webform-required');}}
function clearValueAndRequired(input){var $input=$(input);if($input.closest('[data-webform-states-no-clear]').length){return;}
var type=input.type;var tag=input.tagName.toLowerCase();if(type==='checkbox'||type==='radio'){$input.prop('checked',false);}
else if(tag==='select'){if($input.find('option[value=""]').length){$input.val('');}
else{input.selectedIndex=-1;}}
else if(type!=='submit'&&type!=='button'){input.value=(type==='color')?'#000000':'';}
$input.prop('required',false);}})(jQuery,Drupal);