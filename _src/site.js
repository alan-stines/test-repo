$(document).ready(function() {
	$(".sect").hide();  				// HIDE ALL SECTIONS
	$(".sect").first().show();  	// SHOW FIRST SECTION
	// WHEN NAV CLICKED; HIDE ALL SECTIONS THEN SHOW SECTION AT SAME INDEX
	$("nav li").click(function(e) {
		e.preventDefault();			// DONT HREF ANYWHERE
		$(".sect").hide();
		$(".sect").eq($(this).index()).show();
	});
})