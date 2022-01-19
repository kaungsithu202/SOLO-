$(window).on('load', function () {
	$('#status').fadeOut(1000);
	$('#preloader').delay(1100).fadeOut(1000);
});

//  Owl Carousel
$(document).ready(function () {
	$('#team-members').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		responsive: {
			0: {
				items: 1,
			},

			1000: {
				items: 2,
			},
		},
	});
});

// progress bar
$(document).ready(function () {
	$('#progress-elements').waypoint(
		function () {
			$('.progress-bar').each(function () {
				$(this).animate(
					{
						width: $(this).attr('aria-valuenow') + '%',
					},
					3000,
				);
			});
			this.destroy();
		},
		{
			offset: 'bottom-in-view',
		},
	);
});

// reponsive tabs
$(document).ready(function () {
	$('#services-tab').responsiveTabs({
		animation: 'slide',
	});
});
// portfolio isotopejs
$(window).on('load', function () {
	$('.isotope-container').isotope({
		// options
	});
	// filter items on button click
	$('#isotope-filters').on('click', 'button', function () {
		var filterValue = $(this).attr('data-filter');

		$('.isotope-container').isotope({ filter: filterValue });
		// active button
		$('#isotope-filters').find('.active').removeClass('active');
		$(this).addClass('active');
	});
});

// magnific js
$(document).ready(function () {
	$('#portfolio-wrapper').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',
		gallery: {
			enabled: true,
		},
		// other options
	});
});

// Testimonials
$(document).ready(function () {
	$('#testimonial-slider').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		responsive: {
			0: {
				items: 1,
			},

			1000: {
				items: 1,
			},
		},
	});
});

//Stats Counter
// $(document).ready(function () {
// 	$('.counter').counterUp({
// 		delay: 10,
// 		time: 1000,
// 	});
// });

// Client Section
$(document).ready(function () {
	$('.client-list').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		responsive: {
			0: {
				items: 1,
			},
			// 600: {
			// 	items: 3,
			// },
			1000: {
				items: 5,
			},
		},
	});
});

// Map
let map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: -34.397, lng: 150.644 },
		zoom: 8,
	});
}
// nav section
$(document).ready(function () {
	$(window).scroll(function () {
		if ($(window).scrollTop() > 50) {
			$('nav').addClass('white-nav-top');
			$('.navbar-brand img').attr('src', './resource/img/logo/logo-dark.png');
			$('#back-top-top').fadeIn();
		} else {
			$('nav').removeClass('white-nav-top');
			$('.navbar-brand img').attr('src', './resource/img/logo/logo.png');
			$('#back-top-top').fadeOut();
		}
	});
});
// scroll effect
// $(document).ready(function () {
// 	$('a.smooth-scroll').click(function (e) {
// 		// e.preventDefault();
// 		var select_id = $(this).attr('href');
// 		$('html,body').animate(
// 			{
// 				screenTop: $(select_id).offset().top - 64,
// 			},
// 			1250,
// 			'easeInOutExpo',
// 		);
// 	});
// });
