$(function(){
	var nav = $("a");
	nav.on("click", function(e){
		e.preventDefault();

		$("body, html").animate({
			scrollTop: $($(this).attr("href")).offset().top
		}, 600);

		$("#navToggle").collapse('hide');
	});
});

	