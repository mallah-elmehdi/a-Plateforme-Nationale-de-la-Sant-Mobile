// document ready
$(document).ready(function () {
	function requiredField(element) {
		event.preventDefault();
		element.addClass('is-invalid');
		element.next('.invalid-feedback').text('*Champ obligatoire');
	}
	// key up
	$('#budgetKmsParcourir').keyup(function () {
		var total = $(this).val() || 0;
		$('#besoinCarburantShow').text(total * 1.5);
	});
	// -- submit
	$('button[type=submit]').click(function () {
		if (!$('#addRowVehicule').children().length) {
			requiredField($('#addVehicule'));
		}
	});
	// disbled
	$('#editBtn').click(function () {
        $('#addVehiculeCol, .deletVehicule, #addVehiculeMessage').show();
    });
	$('#cancelBtn').click(function () {
		$('#addVehiculeCol, .deletVehicule, #addVehiculeMessage').hide();
		$('#formVehicule').hide()
		$('#tableVehicule').show()
		$('#addVehicule')
			.removeClass('bg-body')
			.addClass('btn-success')
			.text('ajouter');
	});
});
