StackExchange.postValidation=function(){function e(e,t,n,i){var r=e.find('input[type="submit"]:visible, button[type="submit"]:visible'),o=r.length&&r.is(":enabled");o&&r.attr("disabled",!0),a(e,i),s(e,t,n,i),l(e),u(e),d(e);var f=function(){1!=t||e.find(C).length?(c(e,i),o&&r.attr("disabled",!1)):setTimeout(f,250)};f()}function t(t,i,a,s,c,l){e(t,i,s,a);var u,d=function(e){if(e.success)if(c)c(e);else{var n=window.location.href.split("#")[0],r=e.redirectTo.split("#")[0];0==r.indexOf("/")&&(r=window.location.protocol+"//"+window.location.hostname+r),u=!0,window.location=e.redirectTo,n.toLowerCase()==r.toLowerCase()&&window.location.reload(!0)}else e.captchaHtml?StackExchange.nocaptcha.init(e.captchaHtml,d):e.errors?(t.find("input[name=priorAttemptCount]").val(function(e,t){return(+t+1||0).toString()}),h(e.errors,t,i,a,e.warnings)):t.find('input[type="submit"]:visible, button[type="submit"]:visible').parent().showErrorMessage(e.message)};t.submit(function(){var e=t.find('input[type="submit"]:visible, button[type="submit"]:visible');if(l&&"true"!==t.find("#ask-public-confirmed").val())return e.loadPopup({"url":"/questions/ask/confirm","lightbox":!0,"loaded":function(e){var n=$(e);n.find(".popup-submit").click(function(e){e.preventDefault(),StackExchange.helpers.closePopups(n),t.find("#ask-public-confirmed").val("true"),t.submit()})}}),!1;if(t.find("#answer-from-ask").is(":checked"))return!0;var i=t.find(T);if("[Edit removed during grace period]"==$.trim(i.val()))return m(i,["Comment reserved for system use. Please use an appropriate comment."],f()),!1;if(o(),StackExchange.navPrevention&&StackExchange.navPrevention.stop(),e.parent().addSpinner(),StackExchange.helpers.disableSubmitButton(t),StackExchange.options.site.enableNewTagCreationWarning){var s=t.find(C).parent().find("input#tagnames"),c=s.prop("defaultValue");if(s.val()!==c)return $.ajax({"type":"GET","url":"/posts/new-tags-warning","dataType":"json","data":{"tags":s.val()},"success":function(i){i.showWarning?e.loadPopup({"html":i.html,"dontShow":!0,"prepend":!0,"loaded":function(e){n(e,t,u,a,d)}}):r(t,a,u,d)}}),!1}return setTimeout(function(){r(t,a,u,d)},0),!1})}function n(e,t,n,o,a){e.bind("popupClose",function(){i(t,n)}),e.find(".submit-post").click(function(i){return StackExchange.helpers.closePopups(e),r(t,o,n,a),i.preventDefault(),!1}),e.show()}function i(e,t){StackExchange.helpers.removeSpinner(),t||StackExchange.helpers.enableSubmitButton(e)}function r(e,t,n,r){$.ajax({"type":"POST","dataType":"json","data":e.serialize(),"url":e.attr("action"),"success":r,"error":function(){var n;switch(t){case"question":n="An error occurred submitting the question.";break;case"answer":n="An error occurred submitting the answer.";break;case"edit":n="An error occurred submitting the edit.";break;case"tags":n="An error occurred submitting the tags.";break;case"post":default:n="An error occurred submitting the post."}e.find('input[type="submit"]:visible, button[type="submit"]:visible').parent().showErrorMessage(n)},"complete":function(){i(e,n)}})}function o(){for(var e=0;e<_.length;e++)clearTimeout(_[e]);_=[]}function a(e,t){var n=e.find(k);n.length&&n.blur(function(){_.push(setTimeout(function(){var i=n.val(),r=$.trim(i);if(0==r.length)return b(e,n),void 0;var o=n.data("min-length");if(o&&r.length<o)return m(n,[function(e){return 1==e.minLength?"Title must be at least "+e.minLength+" character.":"Title must be at least "+e.minLength+" characters."}({"minLength":o})],f()),void 0;var a=n.data("max-length");return a&&r.length>a?(m(n,[function(e){return 1==e.maxLength?"Title cannot be longer than "+e.maxLength+" character.":"Title cannot be longer than "+e.maxLength+" characters."}({"maxLength":a})],f()),void 0):($.ajax({"type":"POST","url":"/posts/validate-title","data":{"title":i},"success":function(i){i.success?b(e,n):m(n,i.errors.Title,f()),"edit"!=t&&g(e,n,i.warnings.Title)},"error":function(){b(e,n)}}),void 0)},O))})}function s(e,t,n,i){var r=e.find(S);r.length&&r.blur(function(){_.push(setTimeout(function(){var o=r.val(),a=$.trim(o);if(0==a.length)return b(e,r),void 0;if(5==t){var s=r.data("min-length");return s&&a.length<s?m(r,[function(e){return"Wiki Body must be at least "+e.minLength+" characters. You entered "+e.actual+"."}({"minLength":s,"actual":a.length})],f()):b(e,r),void 0}(1==t||2==t)&&$.ajax({"type":"POST","url":"/posts/validate-body","data":{"body":o,"oldBody":r.prop("defaultValue"),"isQuestion":1==t,"isSuggestedEdit":n},"success":function(t){t.success?b(e,r):m(r,t.errors.Body,f()),"edit"!=i&&g(e,r,t.warnings.Body)},"error":function(){b(e,r)}})},O))})}function c(e,t){var n=e.find(C);if(n.length){var i=n.parent().find("input#tagnames");i.blur(function(){_.push(setTimeout(function(){var r=i.val(),o=$.trim(r);return 0==o.length?(b(e,n),void 0):($.ajax({"type":"POST","url":"/posts/validate-tags","data":{"tags":r,"oldTags":i.prop("defaultValue")},"success":function(i){if(i.success?b(e,n):m(n,i.errors.Tags,f()),"edit"!=t&&(g(e,n,i.warnings.Tags),i.source&&i.source.Tags&&i.source.Tags.length)){var r=$("#post-form input[name='warntags']");r&&StackExchange.using("gps",function(){var e=r.val()||"";$.each(i.source.Tags,function(t,n){n&&!r.data("tag-"+n)&&(r.data("tag-"+n,n),e=e.length?e+" "+n:n,StackExchange.gps.track("tag_warning.show",{"tag":n},!0))}),r.val(e),StackExchange.gps.sendPending()})}},"error":function(){b(e,n)}}),void 0)},O))})}}function l(e){var t=e.find(T);t.length&&t.blur(function(){_.push(setTimeout(function(){var n=t.val(),i=$.trim(n);if(0==i.length)return b(e,t),void 0;var r=t.data("min-length");if(r&&i.length<r)return m(t,[function(e){return 1==e.minLength?"Your edit summary must be at least "+e.minLength+" character.":"Your edit summary must be at least "+e.minLength+" characters."}({"minLength":r})],f()),void 0;var o=t.data("max-length");return o&&i.length>o?(m(t,[function(e){return 1==e.maxLength?"Your edit summary cannot be longer than "+e.maxLength+" character.":"Your edit summary cannot be longer than "+e.maxLength+" characters."}({"maxLength":o})],f()),void 0):(b(e,t),void 0)},O))})}function u(e){var t=e.find(j);t.length&&t.blur(function(){_.push(setTimeout(function(){var n=t.val(),i=$.trim(n);if(0==i.length)return b(e,t),void 0;var r=t.data("min-length");if(r&&i.length<r)return m(t,[function(e){return"Wiki Excerpt must be at least "+e.minLength+" characters; you entered "+e.actual+"."}({"minLength":r,"actual":i.length})],f()),void 0;var o=t.data("max-length");return o&&i.length>o?(m(t,[function(e){return"Wiki Excerpt cannot be longer than "+e.maxLength+" characters; you entered "+e.actual+"."}({"maxLength":o,"actual":i.length})],f()),void 0):(b(e,t),void 0)},O))})}function d(e){var t=e.find(I);t.length&&t.blur(function(){_.push(setTimeout(function(){var n=t.val(),i=$.trim(n);return 0==i.length?(b(e,t),void 0):/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,20}$/i.test(i)?(b(e,t),void 0):(m(t,["This email does not appear to be valid."],p()),void 0)},O))})}function f(){var e=$("#sidebar, .sidebar").first().width()||270;return{"position":{"my":"left top","at":"right center"},"css":{"max-width":e,"min-width":e},"closeOthers":!1}}function p(){var e=$("#sidebar, .sidebar").first().width()||270;return{"position":{"my":"left top","at":"right center"},"css":{"min-width":e},"closeOthers":!1}}function h(e,t,n,i,r){if(e){var o=function(){var n=0,o=t.find(C),a=t.find(k),s=t.find(S),c=t.find(E);m(a,e.Title,f())?n++:b(t,a),r&&g(t,a,r.Title),m(s,e.Body,f())?n++:b(t,s),r&&g(t,s,r.Body),m(o,e.Tags,f())?n++:b(t,o),m(c,e.Mentions,f())?n++:b(t,c),r&&g(t,o,r.Tags),m(t.find(T),e.EditComment,f())?n++:b(t,t.find(T)),m(t.find(j),e.Excerpt,f())?n++:b(t,t.find(j)),m(t.find(I),e.Email,p())?n++:b(t,t.find(I)),m(t.find(M),e.Confirmation,f())?n++:b(t,t.find(M));var l=t.find(".general-error"),u=e.General&&e.General.length>0;if(u||n>0){if(!l.length){var d=t.find('input[type="submit"]:visible, button[type="submit"]:visible');d.before('<div class="general-error-container"><div class="general-error"></div><br class="cbt" /></div>'),l=t.find(".general-error")}if(u)m(l,e.General,{"position":"inline","css":{"float":"left","margin-bottom":"10px"},"closeOthers":!1,"dismissable":!1});else{b(t,l);var h;switch(i){case"question":h=function(e){return 1==e.specificErrorCount?"Your question couldn't be submitted. Please see the error above.":"Your question couldn't be submitted. Please see the errors above."}({"specificErrorCount":n});break;case"answer":h=function(e){return 1==e.specificErrorCount?"Your answer couldn't be submitted. Please see the error above.":"Your answer couldn't be submitted. Please see the errors above."}({"specificErrorCount":n});break;case"edit":h=function(e){return 1==e.specificErrorCount?"Your edit couldn't be submitted. Please see the error above.":"Your edit couldn't be submitted. Please see the errors above."}({"specificErrorCount":n});break;case"tags":h=function(e){return 1==e.specificErrorCount?"Your tags couldn't be submitted. Please see the error above.":"Your tags couldn't be submitted. Please see the errors above."}({"specificErrorCount":n});break;case"post":default:h=function(e){return 1==e.specificErrorCount?"Your post couldn't be submitted. Please see the error above.":"Your post couldn't be submitted. Please see the errors above."}({"specificErrorCount":n})}l.text(h)}}else t.find(".general-error-container").remove();var v;x()&&($("#sidebar").animate({"opacity":.4},500),v=setInterval(function(){x()||($("#sidebar").animate({"opacity":1},500),clearInterval(v))},500));var y;t.find(".validation-error").each(function(){var e=$(this).offset().top;(!y||y>e)&&(y=e)});var w=function(){for(var e=0;3>e;e++)t.find(".message").animate({"left":"+=5px"},100).animate({"left":"-=5px"},100)};if(y){var _=$(".review-bar").length;y=Math.max(0,y-(_?125:30)),$("html, body").animate({"scrollTop":y},w)}else w()},a=function(){1!=n||t.find(C).length?o():setTimeout(a,250)};a()}}function g(e,t,n){var i=f();if(i.type="warning",!n||0==n.length)return y(e,t),!1;var r=t.data("error-popup"),o=0;return r&&(o=r.height()+5),v(t,n,i,o)}function m(e,t,n){return n.type="error",v(e,t,n)}function v(e,t,n,i){var r,a=n.type;if(!(t&&0!=t.length&&e.length&&$("html").has(e).length))return!1;if(r=1==t.length?t[0]:"<ul><li>"+t.join("</li><li>")+"</li></ul>",r&&r.length>0){var s=e.data(a+"-popup");if(s&&s.is(":visible")){var c=e.data(a+"-message");if(c==r)return s.animateOffsetTop&&s.animateOffsetTop(i||0),!0;s.fadeOutAndRemove()}i>0&&(n.position.offsetTop=i);var l=StackExchange.helpers.showMessage(e,r,n);return l.find("a").attr("target","_blank"),l.click(o),e.addClass("validation-"+a).data(a+"-popup",l).data(a+"-message",r),!0}return!1}function y(e,t){w("warning",e,t)}function b(e,t){w("error",e,t)}function w(e,t,n){if(!n||0==n.length)return!1;var i=n.data(e+"-popup");return i&&i.is(":visible")&&i.fadeOutAndRemove(),n.removeClass("validation-"+e),n.removeData(e+"-popup"),n.removeData(e+"-message"),t.find(".validation-"+e).length||t.find(".general-"+e+"-container").remove(),!0}function x(){var e=!1,t=$("#sidebar, .sidebar").first();if(!t.length)return!1;var n=t.offset().left;return $(".message").each(function(){var t=$(this);return t.offset().left+t.outerWidth()>n?(e=!0,!1):void 0}),e}var k="input#title",S="textarea.wmd-input:first",C=".tag-editor:not(.mention-editor)",E=".mention-editor",T="input[id^=edit-comment]",j="textarea#excerpt",I="input#m-address",M="label.ask-confirmation",_=[],O=250;return{"initOnBlur":e,"initOnBlurAndSubmit":t,"showErrorsAfterSubmission":h,"getSidebarPopupOptions":f}}();