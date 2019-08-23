$(document).ready(function() {
	$(".navbar-nav .nav-link").bind("click", function(e) {
		e.preventDefault();
		var target = $(this).attr("href");
		var scrollLimit = $(target).offset().top;
		$("html, body")
			.stop()
			.animate(
				{
					scrollTop: scrollLimit
				},
				600,
				function() {
					console.log($(target).offset().top);
					location.hash = target; //attach the hash (#jumptarget) to the pageurl
				}
			);

		return false;
	});
});

$(window)
	.scroll(function() {
		var scrollDistance = $(window).scrollTop();
		if (scrollDistance > 100) {
			$(".navbar").removeClass("bg-transparent");
		} else {
			$(".navbar").addClass("bg-transparent");
		}

		// Assign active class to nav links while scolling
		$(".smooth-scroll").each(function(i) {
			let activeInAt =
				scrollDistance + $(window).height() - $(this).outerHeight() / 2;

			if (activeInAt >= $(this).offset().top) {
				$(".navbar-nav .nav-link.active").removeClass("active");
				$(".navbar-nav .nav-link")
					.eq(i)
					.addClass("active");
			}
		});
	})
	.scroll();
