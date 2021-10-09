jQuery(document).ready(function () {
	// --- signin
	$('.show-password').click(function () {
		if ($(this).prev().prev().attr('type') === 'password') {
            $(this).prev().prev().attr('type', 'text');
            $(this).children().attr('name', 'eye-off-outline')
		} else {
			$(this).prev().prev().attr('type', 'password');
            $(this).children().attr('name', 'eye-outline')
		}
	});
});
