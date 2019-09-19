(function ($) {
  $(document).ready(function () {
    $('.tab_head li').click(function (e) {
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
      var target = '.' + $(this).attr('id');
      $(target).show();
      $(target).siblings().hide();
    });
    $('.tab_head li#tab1').click();
  });
})(jQuery);