(function($) {

/*------------------------------------------------------
/* 3. Sidebar Fixed Scroll
/* ---------------------------------------------------*/
	$('.save-to, .share-via, .posted-under').dropit();


/*------------------------------------------------------
/* 4. Mobile Navigation
/* ---------------------------------------------------*/
	$(".navigation").append("<span class='button'>&nbsp;</span>");

	$('.navigation .button').on('click', function() {
		$(".navigation .nav").slideToggle("fast");
	});


	$('.footer-tags .wrapper-s').hideMaxListItems({
		'max': 10,
		'speed': 0,
		'moreText':'Show All ...',
		'lessText':'Show Less ...',
		'moreHTML': '<p class="maxlist-more"><a href="#"></a></p>'
	});


/*------------------------------------------------------
/* 5. Back to Top
/* ---------------------------------------------------*/
	$('.back-to-top').on('click', function (e) {
		e.preventDefault();
		$('html,body').animate({
			scrollTop: 0
		}, 700);
	});


/*------------------------------------------------------
/* 5. Back to Top
/* ---------------------------------------------------*/
	var tableColCount = $('#pagination tr:first').find('td').length;
	if (tableColCount  < 2) {
		$(".pagination-outer").addClass("align-center");
	}


/*------------------------------------------------------
/* 6. Centering images in blog posts
/* ---------------------------------------------------*/
	$(".post-body p img")
		.parent()
			.addClass("centered-img-p");


/*------------------------------------------------------
/* 7. CTA dynamic tags
/* ---------------------------------------------------*/

    var myarr = getXTags();
	var tags = $(".relevant-tags").text().trim();
	var tagArr = tags.split(", ");
    var i, j;
    var match = "";
    for (i = 0; i < myarr.length; i++) {
        for (j = 0; j < tagArr.length; ++j) {
            if (myarr[i].toLowerCase() == tagArr[j].toLowerCase()) {
                match = myarr[i];
            }
        }
    }
		$(".cta-subtitle .tag-skill").text(match);
		if(match) {
			$("a.hire-btn").text("Hire "+match+" Developers")
			.prop("href", "https://x-team.com/hire-"+match.toLowerCase()+"-developers/?utm_source=blog&utm_medium=cta&utm_campaign="+window.location.pathname)
			.prop("title", "Hire "+match+" Developers")
			.addClass('tagged');

			if(match.length > 8) {
				$("a.hire-btn").addClass('large')
			}
		}

/*------------------------------------------------------
/* 8. Responsive youtube iframes
/* ---------------------------------------------------*/

		  var $allVideos = $(".post-body iframe[src*='www.youtube.com'], .post-body iframe[src*='player.vimeo.com']");

		  $allVideos.each(function() {
		    $(this)
		      .data('aspectRatio', this.height / this.width)
		      .removeAttr('height')
		      .removeAttr('width');
		  });

		  $(window).resize(function() {
		    $allVideos.each(function() {
		      var $el = $(this);
		      var newWidth = $el.parent().width();
		      $el
		        .width(newWidth)
		        .height(newWidth * $el.data('aspectRatio'));
		    });
		  }).resize();


}(jQuery));
