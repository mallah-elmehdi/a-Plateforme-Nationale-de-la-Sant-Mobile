$(document).ready(function () {
	// VARIABLES
	var wholeData = $('#dataRegion').data('carte'),
		title = $('#title').text().split(' - ')[1],
		// init data
		dataConsultationRealiseMMoins =
			wholeData.consultationRealiseMMoins5ans.data,
		dataConsultationRealiseMPlus =
			wholeData.consultationRealiseMPlus5ans.data,
		dataConsultationRealiseFMoins =
			wholeData.consultationRealiseFMoins5ans.data,
		dataConsultationRealiseFPlus =
			wholeData.consultationRealiseFPlus5ans.data,
		dataPecParPemMoins = wholeData.pecParPemMoins5ans.data,
		dataPecParPemPlus = wholeData.pecParPemPlus5ans.data,
		dataReferenceConsSpecMoins = wholeData.referenceConsSpecMoins5ans.data,
		dataReferenceConsSpecPlus = wholeData.referenceConsSpecPlus5ans.data,
		dataReferenceHospMoins = wholeData.referenceHospMoins5ans.data,
		dataReferenceHospPlus = wholeData.referenceHospPlus5ans.data,
		dataReferenceExLaboMoins = wholeData.referenceExLaboMoins5ans.data,
		dataReferenceExLaboPlus = wholeData.referenceExLaboPlus5ans.data,
		dataReferenceExRadioMoins = wholeData.referenceExRadioMoins5ans.data,
		dataReferenceExRadioPlus = wholeData.referenceExRadioPlus5ans.data,
		dataBudgetMedicamentDispenseEm =
			wholeData.budgetMedicamentDispenseEm.data,
		// other
		max = undefined,
		scale = ['#BDFFAD', '#187a00'],
		data = getData([
			dataConsultationRealiseMMoins,
			dataConsultationRealiseMPlus,
			dataConsultationRealiseFMoins,
			dataConsultationRealiseFPlus,
		]),
		table = 4;
	// MAP
	$('#region-map').vectorMap({
		map: 'region',
		series: {
			regions: [
				{
					values: data,
					scale,
					normalizeFunction: 'polynomial',
					max,
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
				'stroke-width': 8,
			},
			hover: {
				stroke: '#000000',
				'stroke-width': 8,
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
			if (table === 4) {
				label.html(
					`
					<div class="bg-white shadow-sm p-1 rounded">
					<table class="table table-sm table-bordered fs-8 text-center text-dark">
						<tbody>
							<tr>
								<th colspan="3">${label.html()}</th>
							</tr>
							<tr>
								<th colspan="3">${title} : <span class="fs-7"><span class="badge bg-5">${
						data[code]
					}</span></span></th>
							</tr>
							<tr>
								<th></th>
								<th>Masculin</th>
								<th>Féminin</th>
							</tr>
							<tr>
								<th>Moins de 5ans</th>
								<td class="fs-7"><span class="badge bg-5">${
									dataConsultationRealiseMMoins[code]
								}</span></td>
								<td class="fs-7"><span class="badge bg-5">${
									dataConsultationRealiseFMoins[code]
								}</span></td>
							</tr>
							<tr>
								<th>Plus de 5ans</th>
								<td class="fs-7"><span class="badge bg-5">${
									dataConsultationRealiseMPlus[code]
								}</span></td>
								<td class="fs-7"><span class="badge bg-5">${
									dataConsultationRealiseFPlus[code]
								}</span></td>
							</tr>
							<tr>
								<th>Totale</th>
								<td class="fs-7"><span class="badge bg-5">${
									getData([
										dataConsultationRealiseMPlus,
										dataConsultationRealiseMMoins,
									])[code]
								}</span></td>
								<td class="fs-7"><span class="badge bg-5">${
									getData([
										dataConsultationRealiseFPlus,
										dataConsultationRealiseFMoins,
									])[code]
								}</span></td>
							</tr>
						</tbody>
					</table>
					</div>
					`
				);
			} else if (table === 2) {
				label.html(
					`
					<div class="bg-white shadow-sm p-1 rounded">
					<table class="table table-sm table-bordered fs-8 text-center text-dark">
						<tbody>
							<tr>
								<th colspan="3">${label.html()}</th>
							</tr>
							<tr>
								<th colspan="3">${title}</th>
							</tr>
							<tr>
								<th>Moins de 5ans</th>
								<td class="fs-7"><span class="badge bg-5">${
									dataPecParPemMoins[code]
								}</span></td>
							</tr>
							<tr>
								<th>Plus de 5ans</th>
								<td class="fs-7"><span class="badge bg-5">${dataPecParPemPlus[code]}</span></td>
							</tr>
							<tr>
								<th>Totale</th>
								<td class="fs-7"><span class="badge bg-5">${data[code]}</span></td>
							</tr>
						</tbody>
					</table>
					</div>
					`
				);
			} else if (table === 8) {
				label.html(
					`
					<div class="bg-white shadow-sm p-1 rounded">
					<table class="table table-sm table-bordered fs-8 text-center text-dark">
						<tbody>
							<tr>
								<th colspan="5">${label.html()}</th>
							</tr>
							<tr>
								<th colspan="5">${title} : <span class="fs-7"><span class="badge bg-5">${
						data[code]
					}</span></span></th>
							<tr>
								<th></th>
								<th>Cons spéc</th>
								<th>hosp</th>
								<th>Ex labo</th>
								<th>Ex radio</th>
							</tr>
							<tr>
								<th>Moins de 5ans</th>
								<td class="fs-7"><span class="badge bg-5">${
									dataReferenceConsSpecMoins[code]
								}</span></td>
								<td class="fs-7"><span class="badge bg-5">${
									dataReferenceHospMoins[code]
								}</span></td>
								<td class="fs-7"><span class="badge bg-5">${
									dataReferenceExLaboMoins[code]
								}</span></td>
								<td class="fs-7"><span class="badge bg-5">${
									dataReferenceExRadioMoins[code]
								}</span></td>
							</tr>
							<tr>
								<th>Plus de 5ans</th>
								<td class="fs-7"><span class="badge bg-5">${
									dataReferenceConsSpecPlus[code]
								}</span></td>
								<td class="fs-7"><span class="badge bg-5">${
									dataReferenceHospPlus[code]
								}</span></td>
								<td class="fs-7"><span class="badge bg-5">${
									dataReferenceExLaboPlus[code]
								}</span></td>
								<td class="fs-7"><span class="badge bg-5">${
									dataReferenceExRadioPlus[code]
								}</span></td>
							</tr>
							<tr>
								<th>Totale</th>
								<td class="fs-7"><span class="badge bg-5">${
									getData([
										dataReferenceConsSpecMoins,
										dataReferenceConsSpecPlus,
									])[code]
								}</span></td>
								<td class="fs-7"><span class="badge bg-5">${
									getData([
										dataReferenceHospMoins,
										dataReferenceHospPlus,
									])[code]
								}</span></td>
								<td class="fs-7"><span class="badge bg-5">${
									getData([
										dataReferenceExLaboMoins,
										dataReferenceExLaboPlus,
									])[code]
								}</span></td>
								<td class="fs-7"><span class="badge bg-5">${
									getData([
										dataReferenceExRadioMoins,
										dataReferenceExRadioPlus,
									])[code]
								}</span></td>
							</tr>
						</tbody>
					</table>
					</div>
					`
				);
			} else if (table === 1) {
				label.html(
					`
					<div class="bg-white shadow-sm p-1 rounded">
					<table class="table table-sm table-bordered fs-8 text-center text-dark">
						<tbody>
							<tr>
								<th colspan="3">${label.html()}</th>
							</tr>
							<tr>
								<th colspan="3">${title} : <span class="fs-7"> <span class="badge bg-5">${
						dataBudgetMedicamentDispenseEm[code]
					} DH</span></span></th>
							</tr>
						</tbody>
					</table>
					</div>
					`
				);
			}
		},
	});
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
		};
		for (let i = 0; i < dataset.length; i++) {
			var dataElement = dataset[i];
			for (const key in dataElement) {
				data[key] += dataElement[key];
			}
		}
		return data;
	}
	// GET THE MAX VALUE OF ARRAY
	function getMax(data) {
		var max = 0;
		for (let i = 0; i < data.length; i++) {
			var element = data[i];
			if (element > max) max = element;
		}
	}
	// EVENT LISTNER
	$('input[type=radio][name=data]').change(function () {
		// get the map
		var map = $('#region-map').vectorMap('get', 'mapObject');
		// get the title for tooltip /
		title = $(this).next('span').text();
		// change the title in the tooltip
		$('#title').text($('#title').text().split(' - ')[0] + ' - ' + title);
		// hide the dropdown
		$('.dropdown-toggle').dropdown('hide');
		// change te data
		if (this.value === 'consultationRealise') {
			data = getData([
				dataConsultationRealiseMMoins,
				dataConsultationRealiseMPlus,
				dataConsultationRealiseFMoins,
				dataConsultationRealiseFPlus,
			]);
			table = 4;
		} else if (this.value === 'pecParPem') {
			data = getData([dataPecParPemMoins, dataPecParPemPlus]);
			table = 2;
		} else if (this.value === 'reference') {
			data = getData([
				dataReferenceConsSpecMoins,
				dataReferenceConsSpecPlus,
				dataReferenceHospMoins,
				dataReferenceHospPlus,
				dataReferenceExLaboMoins,
				dataReferenceExLaboPlus,
				dataReferenceExRadioMoins,
				dataReferenceExRadioPlus,
			]);
			table = 8;
		} else if (this.value === 'budgetMedicamentDispenseEm') {
			data = getData([dataBudgetMedicamentDispenseEm]);
			table = 1;
		}
		// apply changes
		map.series.regions[0].params.max = getMax(data);
		map.series.regions[0].setValues(data);
		map.series.regions[0].legend.render();
	});
});
