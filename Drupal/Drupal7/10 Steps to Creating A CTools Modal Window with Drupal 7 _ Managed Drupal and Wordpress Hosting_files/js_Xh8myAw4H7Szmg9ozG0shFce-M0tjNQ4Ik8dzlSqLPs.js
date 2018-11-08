(function($){Drupal.behaviors.custom_search={attach:function(context){if(!Drupal.settings.custom_search.solr){$('form.search-form',context).submit(function(){var $this=$(this);var box=$this.find('input.custom-search-box');if(box.val()!=undefined&&box.val()==''){$this.find('input.custom-search-box').addClass('error');return false;}
if($this.find('#edit-keys').parents('div.element-invisible').attr('class')=='element-invisible'){$this.find('#edit-keys').val($this.find('#edit-or').val());$this.find('#edit-or').val('');}
return true;});}
$('form.search-form').attr('target',Drupal.settings.custom_search.form_target);$('form.search-form input.custom-search-box',context).bind('click focus',function(e){var $parentForm=$(this).parents('form');var popup=$parentForm.find('fieldset.custom_search-popup');if(popup.find('input,select').length&&!popup.hasClass('opened')){popup.fadeIn().addClass('opened');}
e.stopPropagation();});$(document).bind('click focus',function(){$('fieldset.custom_search-popup').hide().removeClass('opened');});$('.custom-search-selector input:checkbox',context).each(function(){var el=$(this);if(el.val()=='c-all'){el.change(function(){$(this).parents('.custom-search-selector').find('input:checkbox[value!=c-all]').attr('checked',false);});}
else{if(el.val().substr(0,2)=='c-'){el.change(function(){$('.custom-search-selector input:checkbox').each(function(){if($(this).val().substr(0,2)=='o-'){$(this).attr('checked',false);}});$(this).parents('.custom-search-selector').find('input:checkbox[value=c-all]').attr('checked',false);});}else{el.change(function(){$(this).parents('.custom-search-selector').find('input:checkbox[value!='+el.val()+']').attr('checked',false);});}}});var popup=$('fieldset.custom_search-popup:not(.custom_search-processed)',context).addClass("custom_search-processed");popup.click(function(e){e.stopPropagation();})
popup.append('<a class="custom_search-popup-close" href="#">'+Drupal.t('Close')+'</a>');$('a.custom_search-popup-close').click(function(e){$('fieldset.custom_search-popup.opened').hide().removeClass('opened');e.preventDefault();});}}})(jQuery);;(function($){Drupal.Views={};Drupal.behaviors.viewsTabs={attach:function(context){if($.viewsUi&&$.viewsUi.tabs){$('#views-tabset').once('views-processed').viewsTabs({selectedClass:'active'});}
$('a.views-remove-link').once('views-processed').click(function(event){var id=$(this).attr('id').replace('views-remove-link-','');$('#views-row-'+id).hide();$('#views-removed-'+id).attr('checked',true);event.preventDefault();});$('a.display-remove-link').addClass('display-processed').click(function(){var id=$(this).attr('id').replace('display-remove-link-','');$('#display-row-'+id).hide();$('#display-removed-'+id).attr('checked',true);return false;});}};Drupal.Views.parseQueryString=function(query){var args={};var pos=query.indexOf('?');if(pos!=-1){query=query.substring(pos+1);}
var pairs=query.split('&');for(var i in pairs){if(typeof(pairs[i])=='string'){var pair=pairs[i].split('=');if(pair[0]!='q'&&pair[1]){args[decodeURIComponent(pair[0].replace(/\+/g,' '))]=decodeURIComponent(pair[1].replace(/\+/g,' '));}}}
return args;};Drupal.Views.parseViewArgs=function(href,viewPath){if(Drupal.settings.pathPrefix){var viewPath=Drupal.settings.pathPrefix+viewPath;}
var returnObj={};var path=Drupal.Views.getPath(href);if(viewPath&&path.substring(0,viewPath.length+1)==viewPath+'/'){var args=decodeURIComponent(path.substring(viewPath.length+1,path.length));returnObj.view_args=args;returnObj.view_path=path;}
return returnObj;};Drupal.Views.pathPortion=function(href){var protocol=window.location.protocol;if(href.substring(0,protocol.length)==protocol){href=href.substring(href.indexOf('/',protocol.length+2));}
return href;};Drupal.Views.getPath=function(href){href=Drupal.Views.pathPortion(href);href=href.substring(Drupal.settings.basePath.length,href.length);if(href.substring(0,3)=='?q='){href=href.substring(3,href.length);}
var chars=['#','?','&'];for(var i in chars){if(href.indexOf(chars[i])>-1){href=href.substr(0,href.indexOf(chars[i]));}}
return href;};})(jQuery);;(function($){Drupal.progressBar=function(id,updateCallback,method,errorCallback){var pb=this;this.id=id;this.method=method||'GET';this.updateCallback=updateCallback;this.errorCallback=errorCallback;this.element=$('<div class="progress" aria-live="polite"></div>').attr('id',id);this.element.html('<div class="bar"><div class="filled"></div></div>'+
'<div class="percentage"></div>'+
'<div class="message">&nbsp;</div>');};Drupal.progressBar.prototype.setProgress=function(percentage,message){if(percentage>=0&&percentage<=100){$('div.filled',this.element).css('width',percentage+'%');$('div.percentage',this.element).html(percentage+'%');}
$('div.message',this.element).html(message);if(this.updateCallback){this.updateCallback(percentage,message,this);}};Drupal.progressBar.prototype.startMonitoring=function(uri,delay){this.delay=delay;this.uri=uri;this.sendPing();};Drupal.progressBar.prototype.stopMonitoring=function(){clearTimeout(this.timer);this.uri=null;};Drupal.progressBar.prototype.sendPing=function(){if(this.timer){clearTimeout(this.timer);}
if(this.uri){var pb=this;$.ajax({type:this.method,url:this.uri,data:'',dataType:'json',success:function(progress){if(progress.status==0){pb.displayError(progress.data);return;}
pb.setProgress(progress.percentage,progress.message);pb.timer=setTimeout(function(){pb.sendPing();},pb.delay);},error:function(xmlhttp){pb.displayError(Drupal.ajaxError(xmlhttp,pb.uri));}});}};Drupal.progressBar.prototype.displayError=function(string){var error=$('<div class="messages error"></div>').html(string);$(this.element).before(error).hide();if(this.errorCallback){this.errorCallback(this);}};})(jQuery);;(function($){Drupal.behaviors.ViewsAjaxView={};Drupal.behaviors.ViewsAjaxView.attach=function(){if(Drupal.settings&&Drupal.settings.views&&Drupal.settings.views.ajaxViews){$.each(Drupal.settings.views.ajaxViews,function(i,settings){Drupal.views.instances[i]=new Drupal.views.ajaxView(settings);});}};Drupal.views={};Drupal.views.instances={};Drupal.views.ajaxView=function(settings){var selector='.view-dom-id-'+settings.view_dom_id;this.$view=$(selector);var ajax_path=Drupal.settings.views.ajax_path;if(ajax_path.constructor.toString().indexOf("Array")!=-1){ajax_path=ajax_path[0];}
var queryString=window.location.search||'';if(queryString!==''){var queryString=queryString.slice(1).replace(/q=[^&]+&?|&?render=[^&]+/,'');if(queryString!==''){queryString=((/\?/.test(ajax_path))?'&':'?')+queryString;}}
this.element_settings={url:ajax_path+queryString,submit:settings,setClick:true,event:'click',selector:selector,progress:{type:'throbber'}};this.settings=settings;this.$exposed_form=$('#views-exposed-form-'+settings.view_name.replace(/_/g,'-')+'-'+settings.view_display_id.replace(/_/g,'-'));this.$exposed_form.once(jQuery.proxy(this.attachExposedFormAjax,this));this.links=[];this.$view.filter(jQuery.proxy(this.filterNestedViews,this)).once(jQuery.proxy(this.attachPagerAjax,this));var self_settings=this.element_settings;self_settings.event='RefreshView';this.refreshViewAjax=new Drupal.ajax(this.selector,this.$view,self_settings);};Drupal.views.ajaxView.prototype.attachExposedFormAjax=function(){var button=$('input[type=submit], button[type=submit], input[type=image]',this.$exposed_form);button=button[0];$(button).click(function(){if(Drupal.autocompleteSubmit){Drupal.autocompleteSubmit();}});this.exposedFormAjax=new Drupal.ajax($(button).attr('id'),button,this.element_settings);};Drupal.views.ajaxView.prototype.filterNestedViews=function(){return!this.$view.parents('.view').length;};Drupal.views.ajaxView.prototype.attachPagerAjax=function(){this.$view.find('ul.pager > li > a, th.views-field a, .attachment .views-summary a').each(jQuery.proxy(this.attachPagerLinkAjax,this));};Drupal.views.ajaxView.prototype.attachPagerLinkAjax=function(id,link){var $link=$(link);var viewData={};var href=$link.attr('href');$.extend(viewData,this.settings,Drupal.Views.parseQueryString(href),Drupal.Views.parseViewArgs(href,this.settings.view_base_path));$.extend(viewData,Drupal.Views.parseViewArgs(href,this.settings.view_base_path));this.element_settings.submit=viewData;this.pagerAjax=new Drupal.ajax(false,$link,this.element_settings);this.links.push(this.pagerAjax);};Drupal.ajax.prototype.commands.viewsScrollTop=function(ajax,response,status){var offset=$(response.selector).offset();var scrollTarget=response.selector;while($(scrollTarget).scrollTop()==0&&$(scrollTarget).parent()){scrollTarget=$(scrollTarget).parent();}
if(offset.top-10<$(scrollTarget).scrollTop()){$(scrollTarget).animate({scrollTop:(offset.top-10)},500);}};})(jQuery);;(function($){Drupal.behaviors.textarea={attach:function(context,settings){$('.form-textarea-wrapper.resizable',context).once('textarea',function(){var staticOffset=null;var textarea=$(this).addClass('resizable-textarea').find('textarea');var grippie=$('<div class="grippie"></div>').mousedown(startDrag);grippie.insertAfter(textarea);function startDrag(e){staticOffset=textarea.height()-e.pageY;textarea.css('opacity',0.25);$(document).mousemove(performDrag).mouseup(endDrag);return false;}
function performDrag(e){textarea.height(Math.max(32,staticOffset+e.pageY)+'px');return false;}
function endDrag(e){$(document).unbind('mousemove',performDrag).unbind('mouseup',endDrag);textarea.css('opacity',1);}});}};})(jQuery);;(function($){Drupal.behaviors.filterGuidelines={attach:function(context){$('.filter-guidelines',context).once('filter-guidelines').find(':header').hide().closest('.filter-wrapper').find('select.filter-list').bind('change',function(){$(this).closest('.filter-wrapper').find('.filter-guidelines-item').hide().siblings('.filter-guidelines-'+this.value).show();}).change();}};})(jQuery);;