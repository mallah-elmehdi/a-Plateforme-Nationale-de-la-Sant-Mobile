jQuery(document).ready(function () {
	// --- signin
	const password = $('#password');
    const btnShow = $('#show-password');
    
    
	btnShow.click(function (e) {
		if (password.attr('type') === 'password') {
            password.attr('type', 'text');
            btnShow.children().attr('name', 'eye-off-outline')
		} else {
			password.attr('type', 'password');
            btnShow.children().attr('name', 'eye-outline')
		}
	});
});
