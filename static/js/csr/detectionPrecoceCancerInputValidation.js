// document ready
$(document).ready(function () {
	// functions
	function invalidInput(element) {
		event.preventDefault();
		element.addClass('is-invalid');
		element.next('.invalid-feedback').text('*Entrée invalide');
	}
	// -- submit
	$('button[type=submit]').click(function () {
		if (
			parseInt($('#femmeExamineCancerSein').val()) <
			parseInt($('#femmeRefereCancerSein').val())
		) {
			invalidInput($('#femmeRefereCancerSein'));
		}
		if (
			parseInt($('#femmeExamineCancerCol').val()) <
			parseInt($('#femmeRefereCancerCol').val())
		) {
			invalidInput($('#femmeRefereCancerCol'));
		}
	});
});
