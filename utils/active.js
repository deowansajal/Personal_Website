$(window).ready(function() {
	$(".testimonial .container").slick({
		autoplay: true
	});
});
// Slick Slider  JS Activation End

$(".count").counterUp({
	delay: 10,
	time: 2000
});
// Counter Up JS Activation  End

let obj = {
	strings: ["Developer.", "Designer."],
	typeSpeed: 30,
	loopCount: Infinity,
	loop: true,
	backDelay: 2000,
	backSpeed: 40
};

function typewriter(elem, obj) {
	new Typed(elem, obj);
}

typewriter(".main-sub", obj);
typewriter(".about-sub", obj);
// Typed JS Activation End

let skills = $("#skills");
let barFillerOnAt =
	skills.offset().top + skills.outerHeight() / 2 - $(window).outerHeight();
$(window).scroll(function() {
	let pageY = $(window).scrollTop();

	if (pageY >= barFillerOnAt) {
		$("#bar1").barfiller();
		$("#bar2").barfiller();
		$("#bar3").barfiller();
		$("#bar4").barfiller();
	}
});
// BarFiller JS Activation End

let $grid = $(".portfolio-images-wrapper").isotope({});

$(".filter-list-group").on("click", "li", function() {
	let filterValue = $(this).attr("data-filter");
	let li = $(this).hasClass("text-info");
	if (!li) {
		$(this).addClass("text-info");
		$(this)
			.siblings()
			.removeClass("text-info");
	}

	$grid.isotope({ filter: filterValue });
});
// Isotope JS Activation  End
