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
		var id = $(this).data('id')
		if (id) {
			if (parseInt($('#t1Val-'+id).val()) == 0) {
				invalidInput($('#t1Val-'+id))
			}
			if (parseInt($('#t2Val-'+id).val()) == 0) {
				invalidInput($('#t2Val-'+id))
			}
			if (parseInt($('#t3Val-'+id).val()) == 0) {
				invalidInput($('#t3Val-'+id))
			}
			if (parseInt($('#t4Val-'+id).val()) == 0) {
				invalidInput($('#t4Val-'+id))
			}
		} else {
			if (parseInt($('#t1Val').val()) == 0) {
				invalidInput($('#t1Val'))
			}
			if (parseInt($('#t2Val').val()) == 0) {
				invalidInput($('#t2Val'))
			}
			if (parseInt($('#t3Val').val()) == 0) {
				invalidInput($('#t3Val'))
			}
			if (parseInt($('#t4Val').val()) == 0) {
				invalidInput($('#t4Val'))
			}
		}
	});
});
