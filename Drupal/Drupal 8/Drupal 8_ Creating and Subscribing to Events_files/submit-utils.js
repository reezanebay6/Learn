/**
   * Extracts values from the passed form and
   * send them to a Zapier webhook, passed as 'base_url' field.
   *
   * @param {DOMElement} form - Form being submitted.
   */
  function formSubmit(form) {
    var ignoredFields = ['base_url', 'submit_form', 'redirect'];
    var params = getUriParams() || {};
    var fields = Array.from(form.children);
    var baseUrl = document.getElementsByName('base_url')[0].value;;
    var redirect = document.getElementsByName('redirect')[0].value;

    fields.map(function (field) {
      var name = field.getAttribute('name');

      if (ignoredFields.indexOf(name) === -1) {
        var type = field.getAttribute('type');
        var elementNumber = field.tagName === 'TEXTAREA' ? 1 : 0;
        var value = type === 'hidden' ? field.getAttribute('value') : document.getElementsByName(name)[elementNumber].value;
        params[name] = value || '';
      }
    });

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        window.location.href = redirect;
      }
    };
    xhr.open('POST', baseUrl);
    xhr.send(JSON.stringify(params));
    return false;
  }

  /**
   * Extracts utm params from URL.
   * @returns {Object} params - Extracted Params.
   */
  function getUriParams() {
    var fields = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
    var params = {};

    fields.map(function (field) {
      field = field.replace(/[\\[\\]]/g, "\\$&");

      var regex = new RegExp("[?&]" + field + "(=([^&#]*)|&|#|$)");
      var results = regex.exec(window.location.href);

      if (results) {
        var result = results[2] || '';
        var value = decodeURIComponent(result.replace(/\\+/g, " "));
        params[field] = value;
      }
    });

    return params;
  }
