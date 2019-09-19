var codeHighlighter = function () {

    var start = function () {
        var counter = 0;
        var _example = $('.example');
        var elementsCount = _example.length;

        _example.each(function (index, element) {
            $(element).bind('DOMSubtreeModified', function () {
                counter++;
                if (counter == elementsCount * 2) {

                    $('.example').each(function (index1, element1) {
                        $(element1).unbind('DOMSubtreeModified');
                    });

                    insert();
                }
            });
        });
    };

    String.prototype.replaceAll = function (search, replace) {
        return this.split(search).join(replace);
    };

    String.prototype.insertAt = function (str, position) {
        return [this.slice(0, position), str, this.slice(position)].join('');
    };

    var insert = function () {
        $('.example').each(function (index, element) {
            $('.highlight-block', element).each(function (index1, blockElement) {
                var line = $(blockElement).data('line');

                $('.code div.number' + line, element).addClass("select_line");
            });
        });
    };


    return {start: start};
}();

var app = function () {
    var open = function (url) {
        window.location.href = url;
    };

    var addRating = function (amount, id) {
        var divElement = $('#' + id);
        var hash = $(divElement).data("hash");
        var area = $(divElement).data("area");

        $.ajax("/site/rating?amount=" + amount + "&hash=" + hash + "&area=" + area)
            .done(function () {
                var element = $(".rating-amount", divElement);
                var html = parseInt($(element).html());
                html += amount;
                $(element).html(html);
            });

    };

    var initExamples = function () {
        $('.example-item .rating-up').on('click', function () {
            addRating(1, $(this).data('id'));
        });
        $('.example-item .rating-down').on('click', function () {
            addRating(-1, $(this).data('id'));
        });
    };

    var initSearch = function () {
        $('.search-language-item').on('click', function (e) {
            e.preventDefault();
            var _this = $(this);
            $('.search-language-name').html(_this.html());
            $('#searchform-lang').val(_this.data('value'));
            $('#searchform-search').prop('placeholder', _this.data('example'));
        });
    };

    return {
        open: open,
        addRating: addRating,
        initExamples: initExamples,
        initSearch: initSearch
    };
}();


$(document).ready(function () {
    app.initSearch();
    app.initExamples();
});