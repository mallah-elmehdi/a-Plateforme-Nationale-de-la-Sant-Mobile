// document ready
$(document).ready(function () {
	// functions
	// -- number validator
	function validateNumber(number) {
		const re = /^[0-9]+$/;
		return re.test(number);
	}
	function validateEmail(email) {
		const re =
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}
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
			.text('*Vous ne pouvez pas utiliser plus de 500 caractères');
	}
	function invalidInput(element) {
		event.preventDefault();
		element.addClass('is-invalid');
		element.next('.invalid-feedback').text('*Entrée invalide');
	}
	// -- submit
	$('button[type=submit]').click(function () {
		// input number visible
		$('input[type=number][required]:visible').each(function () {
			if (!$(this).val()) {
				requiredField($(this));
			} else if (
				!validateNumber($(this).val()) ||
				parseInt($(this).val()) < 0 ||
				parseInt($(this).val()) > 100000000
			) {
				invalidInput($(this));
			} else {
				$(this).removeClass('is-invalid');
			}
		});
		// input text visible
		$('input[type=text][required]:visible').each(function () {
			if (!$(this).val()) {
				requiredField($(this));
			} else {
				$(this).removeClass('is-invalid');
			}
		});
		// input email visible
		$('input[type=email][required]:visible').each(function () {
			if (!$(this).val()) {
				requiredField($(this));
			} else if (!validateEmail($(this).val())) {
				invalidInput($(this));
			} else {
				$(this).removeClass('is-invalid');
			}
		});
		// input password visible
		$('input[type=password][required]:visible').each(function () {
			if (!$(this).val()) {
				requiredField($(this));
			} else if ($(this).val().length < 6) {
				invalidInput($(this));
			} else {
				$(this).removeClass('is-invalid');
			}
		});
		// select visible
		$('select[required]:visible').each(function () {
			if (!$(this).val()) {
				requiredField($(this));
			} else {
				$(this).removeClass('is-invalid');
			}
		});
		// textarea visible
		$('textarea[required]:visible').each(function () {
			if (!$(this).val()) {
				requiredField($(this));
			} else {
				$(this).removeClass('is-invalid');
			}
		});
		// textarea leght
		$('.lenghtValidationTextarea').each(function () {
			if ($(this).val().length > 500) {
				lengthErr($(this));
			}
			else {
				$(this).removeClass('is-invalid');
			}
		});
	});
	// change
	$('select[required], input[required], textarea[required], .lenghtValidationTextarea').change(
		function () {
			$(this).removeClass('is-invalid');
		}
	);
});
