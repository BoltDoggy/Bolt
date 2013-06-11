$(document).ready(function () {
	console.log("document ready");
	var $wrap = $("#wrap"),
		$window = $(window);
	resize();
	$window.resize(function () {
		resize();
	});
	function resize () {
		var W = $window.width(),
			H = $window.height();
		$wrap.stop();
		if (2*W > 3*H) {
			$wrap.width(H/2*3);
			$wrap.height(H);
			$wrap.animate({
				top: 0,
				left: W/2 - H/4*3 +"px"
			}, 100);
		} else {
			$wrap.width(W);
			$wrap.height(W/3*2);
			$wrap.animate({
				top: H/2 - W/3 +"px",
				left: 0
			}, 100);
		};
	}
});