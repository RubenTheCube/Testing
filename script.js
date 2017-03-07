$(document).ready(function() {

	$(".personalTable").hide();
	alert("Hemsidan håller på att optimeras, den kan se konstig ut under denna tid. Vi ber om ursäkt för detta.");
	
	function slider() {
    	var currentSlide = $(".active-slide");
   		var nextSlide = currentSlide.next();
		if (nextSlide.length == 0){
	   		nextSlide = $(".slide").first();
	 	}
		currentSlide.fadeOut(1000).removeClass("active-slide");
	   	nextSlide.fadeIn(1000).addClass("active-slide");
	}

	var timer = setInterval(slider, 6000);


	$("#clickme").click(function(){
		$(".personalTable").toggle(1000);
	});

	$("#clickme2").click(function() {
		$(".personalTable").hide(1000);
	})
});
