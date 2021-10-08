// document ready
$(document).ready(function () {
	// functions
	function requiredField(element) {
		event.preventDefault();
		element.addClass('is-invalid');
		element.next('.invalid-feedback').text('*Champ obligatoire');
	}
	function invalidInput(element) {
		event.preventDefault();
		element.addClass('is-invalid');
		element.next('.invalid-feedback').text('*Entrée invalide');
	}
	// id gen
	function idGen() {
		return 'id-' + Math.random().toString(36).substr(2, 9);
	}
	// validation
	function validation() {
		// validation
		var checked = false,
			valid = true;
		if (!$('#activityType').val()) {
			requiredField($('#activityType'));
			valid = false;
		}
		if (!$('#activityBeneficier').val()) {
			requiredField($('#activityBeneficier'));
			valid = false;
		}
		// input number visible
		$('input[type=radio]').each(function () {
			if (this.checked) {
				checked = true;
			}
		});
		if (!checked) {
			requiredField($('input[type=radio]'));
			requiredField($('.radioList'));
			valid = false;
		} else {
			$('input[type=radio]').removeClass('is-invalid');
			$('.radioList').removeClass('is-invalid mb-5');
		}
		return valid
	}
	// append input
	function appendInput(id) {
		$('#autreActiviteForm').append(`
		<input value>
		`)
	}
	// -- add
	$('#addActivity').click(function () {
		if (validation()) {
			var id = idGen()
			appendInput(id)
		}
	});
	// change the value
	$('#activityTypeBeneficier, #activityType, #activityBeneficier').change(
		function () {
			$(this).removeClass('is-invalid');
		}
	);
	$('input[type=radio]').change(function () {
		$('input[type=radio]:visible').removeClass('is-invalid');
		$('.radioList').removeClass('is-invalid mb-3');
	});
});
