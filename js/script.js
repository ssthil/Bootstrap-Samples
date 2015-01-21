$(function(){
	//navigation click
	var nav = $("a");
	nav.on("click", function(e){
		e.preventDefault();

		$("body, html").animate({
			scrollTop: $($(this).attr("href")).offset().top
		}, 600);

		$("#navToggle").collapse('hide');
	});

	//checkbox click
	var $chkbox = $(".cus-checkbox");
	$chkbox.on("click", function(){
		$(".cus-checkbox").removeClass('checked')
		$(this).addClass('checked');
	});

	//tooltip
	$(".tool-tip").tooltip({
		placement:'top'
	});
});

	