jQuery(document).ready(function () {
	// fuctions
	$.fn.toggleText = function (t1, t2) {
		if (this.text() == t1) {
			this.text(t2);
		} else {
			this.text(t1);
		}
		return this;
	};
	// logic
	$('#toggleBtn').on('click', function () {
		$('#toggleElementOne, #toggleElementTwo').toggle();
		$(this).toggleClass('btn-success bg-body').toggleText('ajouter', 'annuler');
	});
});
