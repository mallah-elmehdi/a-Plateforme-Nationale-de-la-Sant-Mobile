// document ready
$(document).ready(function () {
	// 20 min
	var time = 1200000,
		timeId;
	// event
	$(window).keyup(function () {
		updateTime();
	});
	$(window).keydown(function () {
		updateTime();
	});
	$(window).mousemove(function () {
		updateTime();
	});
	$(window).click(function () {
		updateTime();
	});
	// set the timeout
	timeId = setTimeout(function () {
		logOut();
	}, time);
	// log out
	function logOut() {
		window.location.href = '/sign-out';
	}
	// update time
	function updateTime() {
		clearTimeout(timeId);
		timeId = setTimeout(function () {
			logOut();
		}, time);
	}
});
