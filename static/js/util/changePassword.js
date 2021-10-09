jQuery(document).ready(function () {
	function requiredField(element) {
		event.preventDefault();
		element.addClass('is-invalid');
		element.next('.invalid-feedback').text('*Champ obligatoire');
	}
	function lengthErr(element) {
		event.preventDefault();
		element.addClass('is-invalid');
		element
			.next('.invalid-feedback')
			.text('*Le mot de passe doit avoir au moins 6 caractères');
	}
	function passwordErr(element) {
		event.preventDefault();
		element.addClass('is-invalid');
		element
			.next('.invalid-feedback')
			.text('*Le mot de passe ne correspond pas');
	}
	$('button[type=submit]').click(function () {
		// empty input
		if (!$('#oldPassword').val()) {
			requiredField($('#oldPassword'));
		} else if ($('#oldPassword').val().length < 6) {
			lengthErr($('#oldPassword'));
		}
		if (!$('#newPassword').val()) {
			requiredField($('#newPassword'));
		} else if ($('#newPassword').val().length < 6) {
			lengthErr($('#newPassword'));
		}
		if (!$('#newPasswordCheck').val()) {
			requiredField($('#newPasswordCheck'));
		} else if ($('#newPasswordCheck').val().length < 6) {
			lengthErr($('#newPasswordCheck'));
		}
		
		else if ($('#newPasswordCheck').val() != $('#newPassword').val()) {
			passwordErr($('#newPasswordCheck'));
		}
	});

	$('#oldPassword, #newPassword, #newPasswordCheck').change(function () {
		$(this).removeClass('is-invalid')
	})
});
