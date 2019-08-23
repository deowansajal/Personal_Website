function query(elem) {
	return document.querySelector(elem);
}
function getId(elem) {
	return document.getElementById(elem);
}

let close = query(".close");
let blogPopup = query(".blog-popup");
let popupTitle = query(".popup-title");
let popupImg = query(".popup-img");
let popupFullDefinition = query(".full-definition ");
let popupInfo = query(".popup-info");
let aboutContainer = query(".about .container");
let aboutImage = query(".about-image");
let tooltip = getId("tooltip");
let tooltipTittle = getId("tooltip-title");
let tooltipCategory = getId("tooltip-category");
let portfolioImages = Array.prototype.slice.call(
	document.querySelectorAll(".portfolio-images-wrapper .img"),
	0
);

let portfolioImagesWrapper = document.querySelector(
	".portfolio-images-wrapper"
);
let contactForm = query("#contact-form");
let nameField = query("#name-field");
let emailField = query("#email-field");
let messageField = query("#message-field");

let blogButtons = Array.prototype.slice.call(
	document.querySelectorAll(".blog .btn"),
	0
);

close.addEventListener("click", function(e) {
	blogPopup.classList.add("d-none");
});

blogButtons.forEach(function(btn) {
	btn.addEventListener("click", function(e) {
		blogPopup.classList.remove("d-none");
		let card = btn.parentElement.parentElement;
		let img = card.querySelector("img");
		let title = card.querySelector(".card-title");
		let text = card.querySelector(".card-text");
		let data = card.dataset.info;
		popupInfo.innerText = data;
		popupImg.style.background = "url(" + img.src + ")";
		popupTitle.innerText = title.innerText;
		popupFullDefinition.innerText =
			text.innerText + text.innerText + text.innerText;
	});
});

// Typewriter Effect
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

// About Image Move on Mouse Moving
aboutContainer.addEventListener("mousemove", function(e) {
	let moveX = e.offsetX * (1 / 20);
	let moveY = e.offsetY * (1 / 20);
	aboutImage.style.left = moveX + "px";
	aboutImage.style.bottom = moveY + "px";
});

aboutContainer.addEventListener("mouseout", function(e) {
	aboutImage.style.left = 0;
	aboutImage.style.bottom = 0;
});

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

let $grid = $(".portfolio-images-wrapper").isotope({});
// filter items on button click
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

$(window).ready(function() {
	$(".testimonial .container").slick({
		autoplay: true
	});
});

$(".count").counterUp({
	delay: 10,
	time: 2000
});

// Form Validation

contactForm.addEventListener("submit", function(e) {
	e.preventDefault();

	if (!nameField.value || !emailField.value || !messageField.value) {
		alert("Please Fill the All Inputs Field  with valid Credentials");
	}
	this.reset();
});

// ToolTip For Portfolio
tooltip.style.top = portfolioImagesWrapper.offsetTop + "px";
tooltip.style.left = +portfolioImagesWrapper.offsetWidth + "px";

portfolioImages.forEach(function(img) {
	img.addEventListener("mousemove", function(e) {
		e.preventDefault();
		tooltipTittle.innerText = this.dataset.title;
		tooltipCategory.innerText = this.dataset.category;
		tooltip.style.opacity = 1;
		tooltip.style.top = e.pageY + 25 + "px";
		tooltip.style.left = e.pageX + "px";
	});
	img.addEventListener("mouseleave", function(e) {
		tooltip.style.opacity = 0;
	});
});
