jQuery(document).ready(function () {
	// addLocalitePlace
	$('.form-check-input[type=checkbox][name=localite]').change(function () {
		if ($(this).data('id')) {
			var checked = false;
			var id = $(this).data('id');
			$('#localiteData-' + id).empty();
			$(
				'.form-check-input[type=checkbox][name=localite].localteItem-' +
					id
			).each(function () {
				if (this.checked) {
					checked = true;
					$('#localiteData-' + id).append(
						`<span class="badge bg-5 mb-2 me-2">${this.value}</span>`
					);
				}
			});
			if (checked) {
				$('#addLocalitePlace-' + id).removeClass('d-none');
				$('#dropdownCheckbox-' + id).removeClass('is-invalid');
			} else $('#addLocalitePlace-' + id).addClass('d-none');
		} else {
			var checked = false;
			$('#localiteData').empty();
			$('.form-check-input[type=checkbox][name=localite].localiteInit').each(
				function () {
					if (this.checked) {
						checked = true;
						$('#localiteData').append(
							`<span class="badge bg-5 mb-2 me-2">${this.value}</span>`
						);
					}
				}
			);
			if (checked) {
				$('#addLocalitePlace').removeClass('d-none');
				$('#dropdownCheckbox').removeClass('is-invalid');
			} else $('#addLocalitePlace').addClass('d-none');
		}
	});
});
