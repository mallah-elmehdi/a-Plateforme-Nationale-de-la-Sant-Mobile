// document ready
$(document).ready(function () {
	// functions
	function requiredField(element) {
		event.preventDefault();
		element.addClass('is-invalid');
		element.next('.invalid-feedback').text('*Champ obligatoire');
	}
	function requiredField1(element) {
		event.preventDefault();
		element.addClass('is-invalid mb-3');
		element.next('.invalid-feedback').text('*Champ obligatoire');
	}
	// -- submit
	$('button[type=submit]').click(function () {
		var checked = false;
		// input number visible
		$('input[type=radio]:visible').each(function () {
			if (this.checked) {
				checked = true;
			}
		});
		if (!checked) {
			requiredField($('input[type=radio]:visible'));
			requiredField1($('.radioList'));
		} else {
			$('input[type=radio]:visible').removeClass('is-invalid');
			$('.radioList').removeClass('is-invalid mb-5');
		}
	});
	$('input[type=radio]').change(function () {
		$('input[type=radio]:visible').removeClass('is-invalid');
		$('.radioList').removeClass('is-invalid mb-3');
	});
});
