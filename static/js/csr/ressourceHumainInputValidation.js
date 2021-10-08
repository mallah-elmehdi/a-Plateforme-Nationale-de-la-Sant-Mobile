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
			parseInt($('#fixeMedecin').val()) <
			parseInt($('#mobileMedecin').val())
		) {
			invalidInput($('#fixeMedecin'));
			invalidInput($('#mobileMedecin'));
		}
		if (
			parseInt($('#fixeInfirmier').val()) <
			parseInt($('#mobileInfirmier').val())
		) {
			invalidInput($('#fixeInfirmier'));
			invalidInput($('#mobileInfirmier'));
		}
		if (
			parseInt($('#fixeSageFemme').val()) <
			parseInt($('#mobileSageFemme').val())
		) {
			invalidInput($('#fixeSageFemme'));
			invalidInput($('#mobileSageFemme'));
		}
		if (
			parseInt($('#fixeTechnicien').val()) <
			parseInt($('#mobileTechnicien').val())
		) {
			invalidInput($('#fixeTechnicien'));
			invalidInput($('#mobileTechnicien'));
		}
		if (
			parseInt($('#fixeChauffeur').val()) <
			parseInt($('#mobileChauffeur').val())
		) {
			invalidInput($('#fixeChauffeur'));
			invalidInput($('#mobileChauffeur'));
		}
		if (
			parseInt($('#fixeAppuie').val()) <
			parseInt($('#mobileAppuie').val())
		) {
			invalidInput($('#fixeAppuie'));
			invalidInput($('#mobileAppuie'));
		}
	});
});