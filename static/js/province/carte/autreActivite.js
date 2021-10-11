$(document).ready(function () {
	// FUNCTION
	// SUM DATA
	function sumDataProvince(data, codeProvince) {
		// VARIABLE
		var ObjOut = {
			[codeProvince]: 0,
		};
		// loop
		for (const key in data) {
			if (Object.hasOwnProperty.call(data, key)) {
				const element = data[key];
				ObjOut[codeProvince] += element.value;
			}
		}
		return ObjOut;
	}
	// GET DATA
	function getData(dataset) {
		var data = {
			1: 0,
			2: 0,
			3: 0,
			4: 0,
			5: 0,
			6: 0,
			7: 0,
			8: 0,
			9: 0,
			10: 0,
			11: 0,
			12: 0,
			13: 0,
			14: 0,
			15: 0,
			16: 0,
			17: 0,
			18: 0,
			19: 0,
			20: 0,
			21: 0,
			22: 0,
			23: 0,
			24: 0,
			25: 0,
			26: 0,
			27: 0,
			28: 0,
			29: 0,
			30: 0,
			31: 0,
			32: 0,
			33: 0,
			34: 0,
			35: 0,
			36: 0,
			37: 0,
			38: 0,
			39: 0,
			40: 0,
			41: 0,
			42: 0,
			43: 0,
			44: 0,
			45: 0,
			46: 0,
			47: 0,
			48: 0,
			49: 0,
			50: 0,
			51: 0,
			52: 0,
			53: 0,
			54: 0,
			55: 0,
			56: 0,
			57: 0,
			58: 0,
			59: 0,
			60: 0,
			61: 0,
			62: 0,
			63: 0,
			64: 0,
			65: 0,
			66: 0,
			67: 0,
			68: 0,
			69: 0,
			70: 0,
			71: 0,
			72: 0,
			73: 0,
			74: 0,
			75: 0,
		};
		for (let i = 0; i < dataset.length; i++) {
			var dataElement = dataset[i];
			for (const key in dataElement) {
				data[key] += dataElement[key];
			}
		}
		return data;
	}
	// GET DATA TABLE
	function getDataBeneficierTable(data) {
		var strOut = '';
		for (const csr in data) {
			if (Object.hasOwnProperty.call(data, csr)) {
				if (data[csr].activity && data[csr].activity.length) {
					var include = false;
					for (let i = 0; i < data[csr].activity.length; i++) {
						const element = data[csr].activity[i];
						if (element.typeBeneficier === 'Bénéficiaire') {
							include = true;
						}
					}
					if (include) {
						strOut += '<tr><td rowspan="' + data[csr].activity.length + '">' + csr +'</td>'
						strOut += '<td>' + data[csr].activity[0].type + '</td>'
						strOut += '<td>' + data[csr].activity[0].beneficier + '</td>'
						strOut += '<td>' + (data[csr].activity[0].observation.length ? data[csr].activity[0].observation : 'Aucune') + '</td></tr>'
						// 
						for (let i = 1; i < data[csr].activity.length; i++) {
							const activityElement = data[csr].activity[i];
							strOut += '<tr><td>' + activityElement.type + '</td>'
							strOut += '<td>' + activityElement.beneficier + '</td>'
							strOut += '<td>' +( activityElement.observation.length ? activityElement.observation : 'Aucune') + '</td></tr>'
						}
					}
				}
			}
		}
		if (!strOut.length) {
			return '<tr><td>Aucune</td><td>Aucune</td><td>Aucune</td><td>Aucune</td></tr>'
		}
		return strOut
	}
	function getDataActeTable(data) {
		var strOut = '';
		for (const csr in data) {
			if (Object.hasOwnProperty.call(data, csr)) {
				if (data[csr].activity && data[csr].activity.length) {
					var include = false;
					for (let i = 0; i < data[csr].activity.length; i++) {
						const element = data[csr].activity[i];
						if (element.typeBeneficier === 'Acte') {
							include = true;
						}
					}
					if (include) {
						strOut += '<tr><td rowspan="' + data[csr].activity.length + '">' + csr +'</td>'
						strOut += '<td>' + data[csr].activity[0].type + '</td>'
						strOut += '<td>' + data[csr].activity[0].beneficier + '</td>'
						strOut += '<td>' + data[csr].activity[0].observation.length ? data[csr].activity[0].observation : 'Aucune' + '</td></tr>'
						// 
						for (let i = 1; i < data[csr].activity.length; i++) {
							const activityElement = data[csr].activity[i];
							strOut += '<tr><td>' + activityElement.type + '</td>'
							strOut += '<td>' + activityElement.beneficier + '</td>'
							strOut += '<td>' + activityElement.observation.length ? activityElement.observation : 'Aucune' + '</td></tr>'
						}
					}
				}
			}
		}
		if (!strOut.length) {
			return '<tr><td>Aucune</td><td>Aucune</td><td>Aucune</td><td>Aucune</td></tr>'
		}
		return strOut
	}
	function showModal() {
		$('#modalPlace').empty().append(`
		<div class="modal fade p-0 m-0" id="modalTable" tabindex="-1" aria-labelledby="modalTableLabel" aria-hidden="true">
			<div class="modal-dialog modal-fullscreen">
				<div class="modal-content">
					<div class="modal-header border-0 p-2 bg-5">
						<span class="modal-title text-white fw-bold fs-7" id="modalTableLabel">Autres activités réalisées</span>
						<button type="button" class="btn btn-sm p-1 text-white" data-bs-dismiss="modal" aria-label="Close"><ion-icon class="fs-5 align-middle" name="close-outline"></ion-icon></button>
					</div>
					<div class="modal-body bg-body">
						<div class="row g-3">
							<div class="col-12">
								<div class="card">
									<div class="card-body">
										<div class="table-responsive">
											<table class='table thisTable table-bordered' id="autreAvtiviteBenefier">
												<tbody>
													<tr>
														<th>Centre de santé</th>
														<th>Type d’activité</th>
														<th>Nombre de bénéficiaires</th>
														<th>Observations</th>
													</tr>
													${getDataBeneficierTable(wholeData.autreActivite.data)}
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
							<div class="col-12">
								<div class="card">
									<div class="card-body">
										<div class="table-responsive">
											<table class='table thisTable table-bordered' id="autreAvtiviteActe">
												<tbody>
													<tr>
														<th>Centre de santé</th>
														<th>Type d’activité</th>
														<th>Nombre d’actes</th>
														<th>Observations</th>
													</tr>
													${getDataActeTable(wholeData.autreActivite.data)}
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		`);
		var modal = new bootstrap.Modal(document.getElementById('modalTable'));
		modal.show();
		pdf();
	}
	function showErrorModal() {
		$('#modalPlace').empty().append(`
		<div class="modal fade p-0 m-0" id="modalTable" tabindex="-1" aria-labelledby="modalTableLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-body justify-content-between align-items-centre d-flex">
						<span class="modal-title text-dark fw-bold fs-7" id="modalTableLabel">vous ne pouvez pas voir la list of PDP and localities</span>
						<button type="button" class="btn btn-sm p-1 text-body" data-bs-dismiss="modal" aria-label="Close"><ion-icon class="fs-5 align-middle" name="close-outline"></ion-icon></button>
					</div>
				</div>
			</div>
		</div>
		`);
		var modal = new bootstrap.Modal(document.getElementById('modalTable'));
		modal.show();
	}
	// GET THE MAX VALUE OF ARRAY
	function getMaxValue(data) {
		var max = 0;
		for (const key in data) {
			var element = data[key];
			if (element > max) max = element;
		}
		return max + 1;
	}
	// VARIABLES
	var wholeData = $('#data').data('provincedata'),
		codeProvince = $('#data').data('code'),
		title = $('#title').text(),
		// femmeExamineCancerSein
		dataAutreActivite = sumDataProvince(
			wholeData.autreActivite.data,
			codeProvince
		),
		scale = [
			'#FFF891',
			'#fcf75a',
			'#a9a403',
			'#7DFE69',
			'#169a01',
			'#0a4600',
		],
		data = getData([dataAutreActivite]),
		max = getMaxValue(data),
		table = 1;
	// MAP
	$('#province-map').vectorMap({
		map: 'province',
		series: {
			regions: [
				{
					values: { [codeProvince]: data[codeProvince] },
					scale,
					normalizeFunction: 'polynomial',
					max,
					min: 0,
					legend: {
						horizontal: true,
						labelRender: function (v) {
							return v;
						},
					},
				},
			],
		},
		regionStyle: {
			initial: {
				stroke: '#000000',
				'stroke-width': 3,
				fill: '#c6cacd',
			},
			hover: {
				stroke: '#000000',
				'stroke-width': 3,
				fill: '#6294ed',
			},
		},
		backgroundColor: '#a5bfdd',
		regionLabelStyle: {
			initial: {
				fill: '#000000',
			},
		},
		onRegionTipShow: function (event, label, code) {
			if (code == codeProvince) {
				if (table === 1) {
					label.html(
						`
					<div class="bg-white shadow-sm p-1 rounded">
					<table class="table table-sm table-bordered fs-8 text-dark">
						<tbody>
							<tr>
								<th colspan="2" class="text-center">Province : ${label.html()}</th>
							</tr>
							
							<tr>
								<th colspan="2" class="text-center">${title} : <span class="fs-7"><span class="badge bg-5">${
							data[code]
						}</span></span></th>
							</tr>
						</tbody>
					</table>
					</div>
					`
					);
				}
			}
		},
		onRegionClick: function (e, code) {
			if (code == codeProvince) {
				showModal(code);
			} else {
				showErrorModal();
			}
		},
	});
});
