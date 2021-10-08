jQuery(document).ready(function () {
	$('.editBtn').click(function () {
        // variable
        var id = $(this).data('id'); 
        // logic
        $(`.input-${id}, .select-${id}, .textarea-${id}`).removeAttr('disabled');
        // this is one case in the programme section
        $(`#addLocalite-${id}`).removeAttr('disabled');
        // ----------------------------------------
        $(this).next('.deleteBtn').next('.saveBtn').next('.cancelBtn').removeClass('d-none');
        $(this).next('.deleteBtn').next('.saveBtn').removeClass('d-none')
        $(this).next('.deleteBtn').addClass('d-none')
        $(this).addClass('d-none')
    });
	$('.cancelBtn').click(function () {
        // variable
        var id = $(this).data('id'); 
        // logic
        $(`.input-${id}, .select-${id}, .textarea-${id}`).attr('disabled', 'disabled');
        // this is one case in the programme section
        $(`#addLocalite-${id}`).attr('disabled', 'disabled');
        // ----------------------------------------
        $(this).prev('.saveBtn').prev('.deleteBtn').prev('.editBtn').removeClass('d-none');
        $(this).prev('.saveBtn').prev('.deleteBtn').removeClass('d-none');
        $(this).prev('.saveBtn').addClass('d-none')
        $(this).addClass('d-none')
	});
});
