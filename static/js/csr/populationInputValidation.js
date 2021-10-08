// document ready
$(document).ready(function () {
	// functions
	function invalidInput(element) {
		event.preventDefault();
		element.addClass('is-invalid');
		element.next('.invalid-feedback').text('*Entrée invalide');
	}
	// key up
	$(
		'#populationHabitantMoins3km,#populationHabitantEntre3km6km,#populationHabitantEntre6km10km,#populationHabitantPlus10km'
	).keyup(function () {
		var populationHabitantMoins3km =
				parseInt($('#populationHabitantMoins3km').val()) || 0,
			populationHabitantEntre3km6km =
				parseInt($('#populationHabitantEntre3km6km').val()) || 0,
			populationHabitantEntre6km10km =
				parseInt($('#populationHabitantEntre6km10km').val()) || 0,
			populationHabitantPlus10km =
				parseInt($('#populationHabitantPlus10km').val()) || 0,
			sum =
				populationHabitantMoins3km +
				populationHabitantEntre3km6km +
				populationHabitantEntre6km10km +
				populationHabitantPlus10km;
		$('#populationCible').val(sum);
		$('#populationCibleShow').text(sum);
	});
	// validation
	$('button[type=submit]').click(function () {
		var rural = parseInt($('#populationRurale').val());
		var populationHabitantMoins3km =
				parseInt($('#populationHabitantMoins3km').val()) || 0,
			populationHabitantEntre3km6km =
				parseInt($('#populationHabitantEntre3km6km').val()) || 0,
			populationHabitantEntre6km10km =
				parseInt($('#populationHabitantEntre6km10km').val()) || 0,
			populationHabitantPlus10km =
				parseInt($('#populationHabitantPlus10km').val()) || 0,
			sum =
				populationHabitantMoins3km +
				populationHabitantEntre3km6km +
				populationHabitantEntre6km10km +
				populationHabitantPlus10km;
		if (sum > rural) {
			invalidInput($('#populationRurale'))
			invalidInput($('#populationHabitantMoins3km'))
			invalidInput($('#populationHabitantEntre3km6km'))
			invalidInput($('#populationHabitantEntre6km10km'))
			invalidInput($('#populationHabitantPlus10km'))
		}
	});
});
