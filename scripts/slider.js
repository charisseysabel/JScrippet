$(document).ready(function() {
	var speed = 500;
	var autoSwitch = true;
	var autoSwitch_speed = 4000;

	function nextSlide() {
		// remove the active class and replace with oldActive class
		$(".active").removeClass("active").addClass("oldActive");
		// if oldActive is the last child, assign active to first slide
		if($(".oldActive").is(":last-child")) {
			$(".slide").first().addClass("active");
		}
		else { // else add active class to next div
			$(".oldActive").next().addClass("active");
		}

		// remove oldActive class
		$(".oldActive").removeClass("oldActive");
		$(".slide").fadeOut(speed);
		$(".active").fadeIn(speed);
	}

	function prevSlide() {
		$(".active").removeClass("active").addClass("oldActive");
		if($(".oldActive").is(":first-child")) {
			$(".slide").last().addClass("active");
		}
		else {
			$(".oldActive").prev().addClass("active");
		}
		$(".oldActive").removeClass("oldActive");
		$(".slide").fadeOut("speed");
		$(".active").fadeIn("speed");
	}
  
	// select first div slide
	$(".slide").first().addClass("active");

	// hide the rest of the slides
	$(".slide").hide();

	// show only the first slide
	$(".active").show();

	// handlers
	$(".next").on("click", nextSlide);
	$(".prev").on("click", prevSlide);

	//set automatic slide
	if(autoSwitch === true) {
		setInterval(nextSlide, autoSwitch_speed);
	}

});