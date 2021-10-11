$(document).ready(function () {
	$('input[type=radio][name=previewZone]').change(function () {
		if ($(this).val() === 'regional') {
			$('.thisProvince').addClass('d-none');
			$('.thisRegion').removeClass('d-none');
		} else if ($(this).val() === 'provincial') {
			$('.thisProvince').removeClass('d-none');
			$('.thisRegion').addClass('d-none');
		}
		$('.dropdown-toggle').dropdown('hide');
	});
});
