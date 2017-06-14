$(document).ready(function() {

	//active nav item on scroll
	$(document).on("scroll", onScroll);

	function onScroll(event){
		var scrollPos = $(document).scrollTop();
		$('.nav-links a, .mobile_nav a').each(function () {
			var currLink = $(this);
			var refElement = $(currLink.attr("href"));
			if ((refElement.position().top - 100 <= scrollPos) && (refElement.position().top - 100 + refElement.outerHeight() > scrollPos)) {
				$('.nav-links li').removeClass("active");
				currLink.parent().addClass("active");
			}
			else {
				currLink.parent().removeClass("active");
			}
		});
	}

	//scroll click on nav
	$('.nav-links a').on('click', function(event){
    event.preventDefault();

		$('.nav-links li').removeClass('active');
		$(this).parent().addClass('active');

		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top - 20
		}, 500);
	});

	//choose 1996
	for (i = 1999; i > 1950; i--) {
		$('#yearPicker').append($('<option />').val(i).html(i));
	}
	$("#yearPicker option[value='1996']").attr("selected","selected");

	$('#yearPicker').material_select();

	//initialize sidenav
	$(".button-collapse").sideNav({
		menuWidth: 250,
		closeOnClick: true
	});

	//init slider
	var slider = document.getElementById('slider');
	noUiSlider.create(slider, {
		start: [0],
		snap: true,
		connect: [true, false],
		range: {
			'min': 0,
			'25%': 1,
			'50%': 2,
			'max': 3
		}
	});
	slider.noUiSlider.set(2);

});

$(document).on('click', '.nav-btn', function(event) {
	$('body').toggleClass('modal-open');	
	$('.mobile_nav').toggleClass('mobile_nav--active');
	$(this).toggleClass('nav-btn--active');
});

$('.mobile_nav li').click(function(){
	$('body').removeClass('modal-open');	
	$('.mobile_nav').removeClass('mobile_nav--active');
	$('.nav-btn').removeClass('nav-btn--active');
})
