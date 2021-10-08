jQuery(document).ready(function () {
	// global variable
	var index = 0;
	// toggle
	$.fn.toggleText = function (t1, t2) {
		if (this.text() == t1) {
			this.text(t2);
		} else {
			this.text(t1);
		}
		return this;
	};
	// ----- fuction
	// deletw event
	function deleteEvent() {
		$('.deletVehicule').click(function () {
		// get the vehicule id
			var id = $(this).data('id');
			// delete the row
			$('#rowVehicule-' + id).remove();
			// delete the input
			$('#type-' + id).remove();
			$('#age-' + id).remove();
			$('#appartenance-' + id).remove();
			// hide the table
			tableHide();
			// text length of vehicule
			vehiculeLengthText();
		});
	}
	// generate id
	function idGen() {
		return 'id-' + Math.random().toString(36).substr(2, 9);
	}
	// table hide
	function tableHide() {
		if (!$('#addRowVehicule').children().length) {
			$('#tableVehicule').hide();
		} else {
			$('#addVehicule').removeClass('is-invalid');
		}
	}
	// text length vehicule
	function vehiculeLengthText() {
		var sumVehicule = $('#addRowVehicule').children().length;
		$('#sumVehicule').html(`
			Vous avez ajouté <span class="fw-bold text-1"> ${sumVehicule} </span> ${sumVehicule === 1 ? 'véhicule' : 'véhicules'}
		`);
	}
	// toggle
	function toggle() {
		$('#tableVehicule, #formVehicule').toggle();
		$('#addVehicule')
			.toggleClass('btn-success bg-body')
			.toggleText('ajouter', 'annuler');
		tableHide();
	}
	// initForm
	function initForm() {
		$('#vehiculeType').val($('#vehiculeType option:first').val());
		$('#vehiculeAge').val('');
		$('#vehiculeAppartenance').val(
			$('#vehiculeAppartenance option:first').val()
		);
	}
	// number validaion
	function validateNumber(number) {
		const re = /^[0-9]+$/;
		return re.test(number);
	}
	// validation
	function requiredFeild(element) {
		element.addClass('is-invalid');
		element.next('.invalid-feedback').text('*Champ obligatoire');
	}
	// toggle on click
	$('#addVehicule').on('click', function () {
		toggle();
	});
	// submit
	$('#addDataVehicule').on('click', function () {
		// variables
		var submit = true,
			type = $('#vehiculeType').val(),
			age = $('#vehiculeAge').val(),
			appartenance = $('#vehiculeAppartenance').val();
		// check data
		if (!type) {
			requiredFeild($('#vehiculeType'));
			submit = false;
		}
		if (
			!age ||
			!validateNumber(age) ||
			parseInt(age) < 0 ||
			parseInt(age) > 100000000
		) {
			requiredFeild($('#vehiculeAge'));
			submit = false;
		}
		if (!appartenance) {
			requiredFeild($('#vehiculeAppartenance'));
			submit = false;
		}
		// submit data
		if (submit) {
			// get an id
			var id = idGen();
			// add input
			$('#inputVehicule').append(`
				<input id='type-${id}' type='text' name="vehicule[${index}][type]" value="${type}">
				<input id='age-${id}' type='number' name="vehicule[${index}][age]" value="${age}">
				<input id='appartenance-${id}' type='text' name="vehicule[${index}][appartenance]" value="${appartenance}">
			`);
			// add row
			$('#addRowVehicule').append(`
				<tr id="rowVehicule-${id}">
					<td class="fs-7">${type}</td>
					<td class="fs-7">${age}</td>
					<td class="fs-7">${appartenance}</td>
					<th>
						<div class="text-end">
							<button class="btn btn-sm p-0 deletVehicule" type="button" data-id="${id}">
								<ion-icon name="close-circle-outline" class="text-danger fs-6 align-middle"></ion-icon>
							</button>
						</div>
					</th>
				</tr>
			`);
			// text length of vehicule
			vehiculeLengthText();
			// toggle
			toggle();
			// init form
			initForm();
			// delete
			deleteEvent();
			// inc index
			index++;
		}
	});
	// change
	$('#vehiculeType, #vehiculeAge, #vehiculeAppartenance').change(function () {
		$(this).removeClass('is-invalid');
	});
	// delete 
	deleteEvent()
});
