StackExchange.postValidation=function(){function e(e,t,n,i){var o=e.find('input[type="submit"]:visible, button[type="submit"]:visible'),d=o.length&&o.is(":enabled");d&&o.attr("disabled",!0),a(e,i),r(e,t,n,i),c(e),u(e),l(e);var f=function(){1!=t||e.find(E).length?(s(e,i),d&&o.attr("disabled",!1)):setTimeout(f,250)};f()}function t(t,a,r,s,c){e(t,a,s,r);var u,l=function(e){if(e.success)if(c)c(e);else{var n=window.location.href.split("#")[0],i=e.redirectTo.split("#")[0];0==i.indexOf("/")&&(i=window.location.protocol+"//"+window.location.hostname+i),u=!0,window.location=e.redirectTo,n.toLowerCase()==i.toLowerCase()&&window.location.reload(!0)}else e.captchaHtml?StackExchange.nocaptcha.init(e.captchaHtml,l):e.errors?(t.find("input[name=priorAttemptCount]").val(function(e,t){return(+t+1||0).toString()}),h(e.errors,t,a,r,e.warnings)):t.find('input[type="submit"]:visible, button[type="submit"]:visible').parent().showErrorMessage(e.message)};t.submit(function(){var e=t.find('input[type="submit"]:visible, button[type="submit"]:visible');if(t.find("#answer-from-ask").is(":checked"))return!0;var a=t.find(j);if("[Edit removed during grace period]"==$.trim(a.val()))return m(a,["Comment reserved for system use. Please use an appropriate comment."],d()),!1;if(o(),StackExchange.navPrevention&&StackExchange.navPrevention.stop(),e.parent().addSpinner(),StackExchange.helpers.disableSubmitButton(t),StackExchange.options.site.enableNewTagCreationWarning){var s=t.find(E).parent().find("input#tagnames"),c=s.prop("defaultValue");if(s.val()!==c)return $.ajax({"type":"GET","url":"/posts/new-tags-warning","dataType":"json","data":{"tags":s.val()},"success":function(e){if(e.showWarning){var o={"closeOthers":!0,"shown":function(){$(".js-confirm-tag-creation").on("click",function(e){return StackExchange.helpers.closePopups(),i(t,r,u,l),e.preventDefault(),!1})},"dismissing":function(){n(t,u)},"returnElements":$("#tagnames").parent().find("input:visible")};StackExchange.helpers.showModal($(e.html).elementNodesOnly(),o),StackExchange.helpers.bindMovablePopups()}else i(t,r,u,l)}}),!1}return setTimeout(function(){i(t,r,u,l)},0),!1})}function n(e,t){StackExchange.helpers.removeSpinner(),t||StackExchange.helpers.enableSubmitButton(e)}function i(e,t,i,o){$.ajax({"type":"POST","dataType":"json","data":e.serialize(),"url":e.attr("action"),"success":o,"error":function(){var n;switch(t){case"question":n="An error occurred submitting the question.";break;case"answer":n="An error occurred submitting the answer.";break;case"edit":n="An error occurred submitting the edit.";break;case"tags":n="An error occurred submitting the tags.";break;case"post":default:n="An error occurred submitting the post."}e.find('input[type="submit"]:visible, button[type="submit"]:visible').parent().showErrorMessage(n)},"complete":function(){n(e,i)}})}function o(){for(var e=0;e<I.length;e++)clearTimeout(I[e]);I=[]}function a(e,t){var n=e.find(x);n.length&&n.blur(function(){I.push(setTimeout(function(){var i=n.val(),o=$.trim(i);if(p(n),0==o.length)return y(e,n),void 0;var a=n.data("min-length");if(a&&o.length<a)return m(n,[function(e){return 1==e.minLength?"Title must be at least "+e.minLength+" character.":"Title must be at least "+e.minLength+" characters."}({"minLength":a})],d()),void 0;var r=n.data("max-length");return r&&o.length>r?(m(n,[function(e){return 1==e.maxLength?"Title cannot be longer than "+e.maxLength+" character.":"Title cannot be longer than "+e.maxLength+" characters."}({"maxLength":r})],d()),void 0):($.ajax({"type":"POST","url":"/posts/validate-title","data":{"title":i,"fkey":StackExchange.options.user.fkey},"success":function(i){i.success?y(e,n):m(n,i.errors.Title,d()),"edit"!=t&&g(e,n,i.warnings.Title)},"error":function(){y(e,n)}}),void 0)},A))})}function r(e,t,n,i){var o=e.find(S);o.length&&o.blur(function(){I.push(setTimeout(function(){var a=o.val(),r=$.trim(a);if(p(o),0==r.length)return y(e,o),void 0;if(5==t){var s=o.data("min-length");return s&&r.length<s?m(o,[function(e){return"Wiki Body must be at least "+e.minLength+" characters. You entered "+e.actual+"."}({"minLength":s,"actual":r.length})],d()):y(e,o),void 0}(1==t||2==t)&&$.ajax({"type":"POST","url":"/posts/validate-body","data":{"body":a,"oldBody":o.prop("defaultValue"),"isQuestion":1==t,"isSuggestedEdit":n,"fkey":StackExchange.options.user.fkey},"success":function(t){t.success?y(e,o):m(o,t.errors.Body,d()),"edit"!=i&&g(e,o,t.warnings.Body)},"error":function(){y(e,o)}})},A))})}function s(e,t){var n=e.find(E);if(n.length){var i=n.parent().find("input#tagnames");i.blur(function(){I.push(setTimeout(function(){var o=i.val(),a=$.trim(o);return 0==a.length?(y(e,n),void 0):($.ajax({"type":"POST","url":"/posts/validate-tags","data":{"tags":o,"oldTags":i.prop("defaultValue"),"fkey":StackExchange.options.user.fkey},"success":function(i){if(i.success?y(e,n):m(n,i.errors.Tags,d()),"edit"!=t&&(g(e,n,i.warnings.Tags),i.source&&i.source.Tags&&i.source.Tags.length)){var o=$("#post-form input[name='warntags']");o&&StackExchange.using("gps",function(){var e=o.val()||"";$.each(i.source.Tags,function(t,n){n&&!o.data("tag-"+n)&&(o.data("tag-"+n,n),e=e.length?e+" "+n:n,StackExchange.gps.track("tag_warning.show",{"tag":n},!0))}),o.val(e),StackExchange.gps.sendPending()})}},"error":function(){y(e,n)}}),void 0)},A))})}}function c(e){var t=e.find(j);t.length&&t.blur(function(){I.push(setTimeout(function(){var n=t.val(),i=$.trim(n);if(0==i.length)return y(e,t),void 0;var o=t.data("min-length");if(o&&i.length<o)return m(t,[function(e){return 1==e.minLength?"Your edit summary must be at least "+e.minLength+" character.":"Your edit summary must be at least "+e.minLength+" characters."}({"minLength":o})],d()),void 0;var a=t.data("max-length");return a&&i.length>a?(m(t,[function(e){return 1==e.maxLength?"Your edit summary cannot be longer than "+e.maxLength+" character.":"Your edit summary cannot be longer than "+e.maxLength+" characters."}({"maxLength":a})],d()),void 0):(y(e,t),void 0)},A))})}function u(e){var t=e.find(T);t.length&&t.blur(function(){I.push(setTimeout(function(){var n=t.val(),i=$.trim(n);if(0==i.length)return y(e,t),void 0;var o=t.data("min-length");if(o&&i.length<o)return m(t,[function(e){return"Wiki Excerpt must be at least "+e.minLength+" characters; you entered "+e.actual+"."}({"minLength":o,"actual":i.length})],d()),void 0;var a=t.data("max-length");return a&&i.length>a?(m(t,[function(e){return"Wiki Excerpt cannot be longer than "+e.maxLength+" characters; you entered "+e.actual+"."}({"maxLength":a,"actual":i.length})],d()),void 0):(y(e,t),void 0)},A))})}function l(e){var t=e.find(O);t.length&&t.blur(function(){I.push(setTimeout(function(){var n=t.val(),i=$.trim(n);return 0==i.length?(y(e,t),void 0):StackExchange.helpers.isEmailAddress(i)?(y(e,t),void 0):(m(t,["This email does not appear to be valid."],f()),void 0)},A))})}function d(){var e=$("#sidebar, .sidebar").first().width()||270,t="lg"===StackExchange.responsive.currentRange();return{"position":{"my":t?"left top":"top center","at":t?"right center":"bottom center"},"css":{"max-width":e,"min-width":e},"closeOthers":!1}}function f(){var e=$("#sidebar, .sidebar").first().width()||270;return{"position":{"my":"left top","at":"right center"},"css":{"min-width":e},"closeOthers":!1}}function p(){Array.prototype.forEach.call(arguments,function(e){var t=StackExchange.stacksValidation.handlerFor(e);t&&t.clear()})}function h(e,t,n,i,o){if(e){var a=function(){var n=0,a=t.find(E),r=t.find(x),s=t.find(S),c=t.find(C);p(r,s,a,c),m(r,e.Title,d())?n++:y(t,r),o&&g(t,r,o.Title),m(s,e.Body,d())?n++:y(t,s),o&&g(t,s,o.Body),m(a,e.Tags,d())?n++:y(t,a),m(c,e.Mentions,d())?n++:y(t,c),o&&g(t,a,o.Tags),m(t.find(j),e.EditComment,d())?n++:y(t,t.find(j)),m(t.find(T),e.Excerpt,d())?n++:y(t,t.find(T)),m(t.find(O),e.Email,f())?n++:y(t,t.find(O)),m(t.find(_),e.Confirmation,d())?n++:y(t,t.find(_));var u=t.find(".general-error"),l=e.General&&e.General.length>0;if(l||n>0){if(!u.length){var h=t.find('input[type="submit"]:visible, button[type="submit"]:visible');h.parent().after('<div class="general-error-container"><div class="general-error"></div><br class="cbt" /></div>'),u=t.find(".general-error")}if(l)m(u,e.General,{"position":"inline","css":{"float":"left","margin-bottom":"10px"},"closeOthers":!1,"dismissable":!1});else{y(t,u);var v;switch(i){case"question":v=function(e){return 1==e.specificErrorCount?"Your question couldn't be submitted. Please see the error above.":"Your question couldn't be submitted. Please see the errors above."}({"specificErrorCount":n});break;case"answer":v=function(e){return 1==e.specificErrorCount?"Your answer couldn't be submitted. Please see the error above.":"Your answer couldn't be submitted. Please see the errors above."}({"specificErrorCount":n});break;case"edit":v=function(e){return 1==e.specificErrorCount?"Your edit couldn't be submitted. Please see the error above.":"Your edit couldn't be submitted. Please see the errors above."}({"specificErrorCount":n});break;case"tags":v=function(e){return 1==e.specificErrorCount?"Your tags couldn't be submitted. Please see the error above.":"Your tags couldn't be submitted. Please see the errors above."}({"specificErrorCount":n});break;case"post":default:v=function(e){return 1==e.specificErrorCount?"Your post couldn't be submitted. Please see the error above.":"Your post couldn't be submitted. Please see the errors above."}({"specificErrorCount":n})}u.text(v)}}else t.find(".general-error-container").remove();var b;w()&&($("#sidebar").animate({"opacity":.4},500),b=setInterval(function(){w()||($("#sidebar").animate({"opacity":1},500),clearInterval(b))},500));var k;t.find(".validation-error, .js-stacks-validation.has-error").each(function(){var e=$(this).offset().top;(!k||k>e)&&(k=e)});var I=function(){for(var e=0;3>e;e++)t.find(".message").animate({"left":"+=5px"},100).animate({"left":"-=5px"},100)};if(k){var A=$(".review-bar").length;k=Math.max(0,k-(A?125:30)),$("html, body").animate({"scrollTop":k},I)}else I()},r=function(){1!=n||t.find(E).length?a():setTimeout(r,250)};r()}}function g(e,t,n){var i=d();if(i.type="warning",!n||0==n.length)return b(e,t),!1;var o=t.data("error-popup"),a=0;return o&&(a=o.height()+5),v(t,n,i,a)}function m(e,t,n){return n.type="error",v(e,t,n)}function v(e,t,n,i){var a,r=n.type,s=StackExchange.stacksValidation.handlerFor(e);if(s)return s.clear(r),(t||[]).forEach(function(e){s.add(r,e)}),!0;if(!(t&&0!=t.length&&e.length&&$("html").has(e).length))return!1;if(a=1==t.length?t[0]:"<ul><li>"+t.join("</li><li>")+"</li></ul>",a&&a.length>0){var c=e.data(r+"-popup");if(c&&c.is(":visible")){var u=e.data(r+"-message");if(u==a)return c.animateOffsetTop&&c.animateOffsetTop(i||0),!0;c.fadeOutAndRemove()}i>0&&(n.position.offsetTop=i);var l=StackExchange.helpers.showMessage(e,a,n);return l.find("a").attr("target","_blank"),l.click(o),e.addClass("validation-"+r).data(r+"-popup",l).data(r+"-message",a),!0}return!1}function b(e,t){k("warning",e,t)}function y(e,t){k("error",e,t)}function k(e,t,n){if(!n||0==n.length)return!1;var i=StackExchange.stacksValidation.handlerFor(n);i&&i.clear(e);var o=n.data(e+"-popup");return o&&o.is(":visible")&&o.fadeOutAndRemove(),n.removeClass("validation-"+e),n.removeData(e+"-popup"),n.removeData(e+"-message"),t.find(".validation-"+e+", .js-stacks-validation.has-"+e).length||t.find(".general-"+e+"-container").remove(),!0}function w(){var e=!1,t=$("#sidebar, .sidebar").first();if(!t.length)return!1;var n=t.offset().left;return $(".message").each(function(){var t=$(this);return t.offset().left+t.outerWidth()>n?(e=!0,!1):void 0}),e}var x="input#title",S="textarea.wmd-input:first",E=".tag-editor:not(.mention-editor)",C=".mention-editor",j="input[id^=edit-comment]",T="textarea#excerpt",O="input#m-address",_="label.ask-confirmation",I=[],A=250;return{"initOnBlur":e,"initOnBlurAndSubmit":t,"showErrorsAfterSubmission":h,"getSidebarPopupOptions":d}}();