// document ready
$(document).ready(function () {
	// global variable
	function getTotal() {
		var vaccinationPentavalent =
				parseInt($('#vaccinationPentavalent').val()) || 0,
			vaccinationRr = parseInt($('#vaccinationRr').val()) || 0,
			vaccinationBcg = parseInt($('#vaccinationBcg').val()) || 0,
			vitamineA = parseInt($('#vitamineA').val()) || 0,
			vitamineD = parseInt($('#vitamineD').val()) || 0,
			enfantsAvecInsuffisancePonderale =
				parseInt($('#enfantsAvecInsuffisancePonderale').val()) || 0,
			enfantsAvecRetardCroissance =
				parseInt($('#enfantsAvecRetardCroissance').val()) || 0,
			diarrhe = parseInt($('#diarrhe').val()) || 0,
			ira = parseInt($('#ira').val()) || 0;
		var total =
			vaccinationPentavalent +
			vaccinationRr +
			vaccinationBcg +
			vitamineA +
			vitamineD +
			enfantsAvecInsuffisancePonderale +
			enfantsAvecRetardCroissance +
			diarrhe +
			ira;
		return total;
	}

	// key up
	$(
		'#vaccinationPentavalent, ' +
			'#vaccinationRr, ' +
			'#vaccinationBcg, ' +
			'#vitamineA, ' +
			'#vitamineD, ' +
			'#enfantsAvecInsuffisancePonderale, ' +
			'#enfantsAvecRetardCroissance, ' +
			'#diarrhe, ' +
			'#ira '
	).keyup(function () {
		$('#enfantPrisesCharge').text(getTotal());
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
