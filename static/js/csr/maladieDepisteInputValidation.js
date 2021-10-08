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
		console.log((
			parseInt($('#diabeteCas').val())
		));
		if (
			parseInt($('#diabeteCas').val()) +
				parseInt($('#diabeteCasPec').val()) <
			parseInt($('#diabeteReference').val())
		) {
			invalidInput($('#diabeteReference'));
		}
		if (
			parseInt($('#htaCas').val()) +
				parseInt($('#htaCasPec').val()) <
			parseInt($('#htaReference').val())
		) {
			invalidInput($('#htaReference'));
		}
		if (
			parseInt($('#angineCas').val()) +
				parseInt($('#angineCasPec').val()) <
			parseInt($('#angineReference').val())
		) {
			invalidInput($('#angineReference'));
		}
		if (
			parseInt($('#carieCas').val()) +
				parseInt($('#carieCasPec').val()) <
			parseInt($('#carieReference').val())
		) {
			invalidInput($('#carieReference'));
		}
		if (
			parseInt($('#parodontopathieCas').val()) +
				parseInt($('#parodontopathieCasPec').val()) <
			parseInt($('#parodontopathieReference').val())
		) {
			invalidInput($('#parodontopathieReference'));
		}
		if (
			parseInt($('#maladieMentaleCas').val()) +
				parseInt($('#maladieMentaleCasPec').val()) <
			parseInt($('#maladieMentaleReference').val())
		) {
			invalidInput($('#maladieMentaleReference'));
		}
		if (
			parseInt($('#istCas').val()) +
				parseInt($('#istCasPec').val()) <
			parseInt($('#istReference').val())
		) {
			invalidInput($('#istReference'));
		}
		if (
			parseInt($('#tuberculosePolmonaireCas').val()) +
				parseInt($('#tuberculosePolmonaireCasPec').val()) <
			parseInt($('#tuberculosePolmonaireReference').val())
		) {
			invalidInput($('#tuberculosePolmonaireReference'));
		}
		if (
			parseInt($('#raaAvecCarditesCas').val()) +
				parseInt($('#raaAvecCarditesCasPec').val()) <
			parseInt($('#raaAvecCarditesReference').val())
		) {
			invalidInput($('#raaAvecCarditesReference'));
		}
		if (
			parseInt($('#raaSansCarditesCas').val()) +
				parseInt($('#raaSansCarditesCasPec').val()) <
			parseInt($('#raaSansCarditesReference').val())
		) {
			invalidInput($('#raaSansCarditesReference'));
		}
	});
});
