// document ready
$(document).ready(function () {
	// key up
	$('#kmParcouru').keyup(function () {
		var total = $(this).val() || 0;
		$('#besoinCarburantShow').text(total * 1.5);
	});
});
