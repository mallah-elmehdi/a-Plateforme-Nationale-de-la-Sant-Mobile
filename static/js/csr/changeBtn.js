jQuery(document).ready(function () {
	$('#editBtn').click(function () {
        $('input, select, textarea').removeAttr('disabled');
        $('#editBtn').addClass('d-none');
        $('#saveBtn').removeClass('d-none');
        $('#cancelBtn').removeClass('d-none');
    });
	$('#cancelBtn').click(function () {
        $('input, select, textarea').attr('disabled', 'disabled');
        $('#cancelBtn').addClass('d-none');
        $('#saveBtn').addClass('d-none');
        $('#editBtn').removeClass('d-none');
	});
});
