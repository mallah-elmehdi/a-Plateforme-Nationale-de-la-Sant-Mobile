// document ready
$(document).ready(function () {
	// functions
	function requiredField(element) {
		event.preventDefault();
		element.addClass('is-invalid');
		element.next('.invalid-feedback').text('*champ obligatoire');
	}
	// -- submit
	$('button[type=submit]').click(function () {
		if ($(this).data('id')) {
			var checked = false;
			var id = $(this).data('id');
			$(
				'.form-check-input[type=checkbox][name=localite].localteItem-' +
					id
			).each(function () {
				if (this.checked) {
					checked = true;
				}
			});
			if (!checked) requiredField($('#dropdownCheckbox-' + id));
		} else {
			var checked = false;
			$('.form-check-input[type=checkbox][name=localite].localiteInit').each(
				function () {
					if (this.checked) {
						checked = true;
					}
				}
			);
			if (!checked) requiredField($('#dropdownCheckbox'));
		}
	});
});
