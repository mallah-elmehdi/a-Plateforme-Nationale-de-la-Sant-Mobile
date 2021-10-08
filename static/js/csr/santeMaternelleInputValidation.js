// document ready
$(document).ready(function () {
	// global variable
	function getTotal() {
		var cpnNouvelleInscriteT1 =
				parseInt($('#cpnNouvelleInscriteT1').val()) || 0,
			cpnNouvelleInscriteT2 =
				parseInt($('#cpnNouvelleInscriteT2').val()) || 0,
			cpnNouvelleInscriteT3 =
				parseInt($('#cpnNouvelleInscriteT3').val()) || 0,
			cpnAncienneInscriteT1 =
				parseInt($('#cpnAncienneInscriteT1').val()) || 0,
			cpnAncienneInscriteT2 =
				parseInt($('#cpnAncienneInscriteT2').val()) || 0,
			cpnAncienneInscriteT3 =
				parseInt($('#cpnAncienneInscriteT3').val()) || 0,
			autreConsultation = parseInt($('#autreConsultation').val()) || 0,
			garDepiste = parseInt($('#garDepiste').val()) || 0,
			femmeExaminePostNatal =
				parseInt($('#femmeExaminePostNatal').val()) || 0,
			vat = parseInt($('#vat').val()) || 0;
		var total =
			cpnNouvelleInscriteT1 +
				cpnNouvelleInscriteT2 +
				cpnNouvelleInscriteT3 +
				cpnAncienneInscriteT1 +
				cpnAncienneInscriteT2 +
				cpnAncienneInscriteT3 +
				autreConsultation +
				garDepiste +
				femmeExaminePostNatal +
				vat || 0;
		return total;
	}
	// key up
	$(
		'#cpnNouvelleInscriteT1, ' +
			'#cpnNouvelleInscriteT2, ' +
			'#cpnNouvelleInscriteT3, ' +
			'#cpnAncienneInscriteT1, ' +
			'#cpnAncienneInscriteT2, ' +
			'#cpnAncienneInscriteT3, ' +
			'#autreConsultation, ' +
			'#garDepiste, ' +
			'#femmeExaminePostNatal, ' +
			'#vat'
	).keyup(function () {
		$('#femmePriseCharge').text(getTotal());
	});
	// submit
	// functions
	function invalidInput(element) {
		event.preventDefault();
		element.addClass('is-invalid');
		element.next('.invalid-feedback').text('*Entrée invalide');
	}
	// -- submit
	$('button[type=submit]').click(function () {
		if (getTotal() < parseInt($('#reference').val())) {
			invalidInput($('#reference'));
		}
	});
});
