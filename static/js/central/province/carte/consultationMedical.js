$(document).ready(function () {
	// VARIABLES
	var wholeData = $('#dataProvince').data('carte'),
		title = $('#title').text(),
		// init data
		dataConsultationRealiseMMoins5ans =
			wholeData.consultationRealiseMMoins5ans.data,
		dataConsultationRealiseMEntre5ans18ans =
			wholeData.consultationRealiseMEntre5ans18ans.data,
		dataConsultationRealiseMPlus18ans =
			wholeData.consultationRealiseMPlus18ans.data,
		dataConsultationRealiseFMoins5ans =
			wholeData.consultationRealiseFMoins5ans.data,
		dataConsultationRealiseFEntre5ans18ans =
			wholeData.consultationRealiseFEntre5ans18ans.data,
		dataConsultationRealiseFPlus18ans =
			wholeData.consultationRealiseFPlus18ans.data,
		dataPecParPemMoins5ans = wholeData.pecParPemMoins5ans.data,
		dataPecParPemEntre5ans18ans = wholeData.pecParPemEntre5ans18ans.data,
		dataPecParPemPlus18ans = wholeData.pecParPemPlus18ans.data,
		dataReferenceConsSpecMoins5ans =
			wholeData.referenceConsSpecMoins5ans.data,
		dataReferenceConsSpecEntre5ans18ans =
			wholeData.referenceConsSpecEntre5ans18ans.data,
		dataReferenceConsSpecPlus18ans =
			wholeData.referenceConsSpecPlus18ans.data,
		dataReferenceUrgenceMoins5ans =
			wholeData.referenceUrgenceMoins5ans.data,
		dataReferenceUrgenceEntre5ans18ans =
			wholeData.referenceUrgenceEntre5ans18ans.data,
		dataReferenceUrgencePlus18ans =
			wholeData.referenceUrgencePlus18ans.data,
		dataReferenceExLaboMoins5ans = wholeData.referenceExLaboMoins5ans.data,
		dataReferenceExLaboEntre5ans18ans =
			wholeData.referenceExLaboEntre5ans18ans.data,
		dataReferenceExLaboPlus18ans = wholeData.referenceExLaboPlus18ans.data,
		dataReferenceExRadioMoins5ans =
			wholeData.referenceExRadioMoins5ans.data,
		dataReferenceExRadioEntre5ans18ans =
			wholeData.referenceExRadioEntre5ans18ans.data,
		dataReferenceExRadioPlus18ans =
			wholeData.referenceExRadioPlus18ans.data,
		dataBudgetMedicamentDispenseEm =
			wholeData.budgetMedicamentDispenseEm.data,
		// other
		max = undefined,
		scale = [
			'#FFF891',
			'#fcf75a',
			'#a9a403',
			'#7DFE69',
			'#169a01',
			'#0a4600',
		],
		data = getData([
			dataConsultationRealiseMMoins5ans,
			dataConsultationRealiseMEntre5ans18ans,
			dataConsultationRealiseMPlus18ans,
			dataConsultationRealiseFMoins5ans,
			dataConsultationRealiseFEntre5ans18ans,
			dataConsultationRealiseFPlus18ans,
		]),
		table = 4;
	// MAP
	$('#province-map').vectorMap({
		map: 'province',
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
				'stroke-width': 3,
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
			if (table === 4) {
				label.html(
					`
				<div class="bg-white shadow-sm p-1 rounded">
				<table class="table table-sm table-bordered fs-8 text-center text-dark">
					<tbody>
						<tr>
							<th colspan="3">Province : ${label.html()}</th>
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
								dataConsultationRealiseMMoins5ans[code]
							}</span></td>
							<td class="fs-7"><span class="badge bg-5">${
								dataConsultationRealiseFMoins5ans[code]
							}</span></td>
						</tr>
						<tr>
							<th>Entre 5ans de 18ans</th>
							<td class="fs-7"><span class="badge bg-5">${
								dataConsultationRealiseMEntre5ans18ans[code]
							}</span></td>
							<td class="fs-7"><span class="badge bg-5">${
								dataConsultationRealiseFEntre5ans18ans[code]
							}</span></td>
						</tr>
						<tr>
							<th>Plus de 18ans</th>
							<td class="fs-7"><span class="badge bg-5">${
								dataConsultationRealiseMPlus18ans[code]
							}</span></td>
							<td class="fs-7"><span class="badge bg-5">${
								dataConsultationRealiseFPlus18ans[code]
							}</span></td>
						</tr>
						<tr>
							<th>Totale</th>
							<td class="fs-7"><span class="badge bg-5">${
								dataConsultationRealiseMMoins5ans[code] +
								dataConsultationRealiseMEntre5ans18ans[
									code
								] +
								dataConsultationRealiseMPlus18ans[code]
							}</span></td>
							<td class="fs-7"><span class="badge bg-5">${
								dataConsultationRealiseFMoins5ans[code] +
								dataConsultationRealiseFEntre5ans18ans[
									code
								] +
								dataConsultationRealiseFPlus18ans[code]
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
							<th colspan="3">Province : ${label.html()}</th>
						</tr>
						<tr>
							<th colspan="3">${title}</th>
						</tr>
						<tr>
							<th>Moins de 5ans</th>
							<td class="fs-7"><span class="badge bg-5">${
								dataPecParPemMoins5ans[code]
							}</span></td>
						</tr>
						<tr>
							<th>Entre 5ans et 18ans</th>
							<td class="fs-7"><span class="badge bg-5">${
								dataPecParPemEntre5ans18ans[code]
							}</span></td>
						</tr>
						<tr>
							<th>Plus de 18ans</th>
							<td class="fs-7"><span class="badge bg-5">${
								dataPecParPemPlus18ans[code]
							}</span></td>
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
							<th colspan="5">Province : ${label.html()}</th>
						</tr>
						<tr>
							<th colspan="5">${title} : <span class="fs-7"><span class="badge bg-5">${
						data[code]
					}</span></span></th>
						<tr>
							<th></th>
							<th>Cons spéc</th>
							<th>Urgence</th>
							<th>Examen De laboratoire</th>
							<th>Examen radiologique</th>
						</tr>
						<tr>
							<th>Moins de 5ans</th>
							<td class="fs-7"><span class="badge bg-5">${
								dataReferenceConsSpecMoins5ans[code]
							}</span></td>
							<td class="fs-7"><span class="badge bg-5">${
								dataReferenceUrgenceMoins5ans[code]
							}</span></td>
							<td class="fs-7"><span class="badge bg-5">${
								dataReferenceExLaboMoins5ans[code]
							}</span></td>
							<td class="fs-7"><span class="badge bg-5">${
								dataReferenceExRadioMoins5ans[code]
							}</span></td>
						</tr>
						<tr>
							<th>Entre 5ans et 18ans</th>
							<td class="fs-7"><span class="badge bg-5">${
								dataReferenceConsSpecEntre5ans18ans[code]
							}</span></td>
							<td class="fs-7"><span class="badge bg-5">${
								dataReferenceUrgenceEntre5ans18ans[code]
							}</span></td>
							<td class="fs-7"><span class="badge bg-5">${
								dataReferenceExLaboEntre5ans18ans[code]
							}</span></td>
							<td class="fs-7"><span class="badge bg-5">${
								dataReferenceExRadioEntre5ans18ans[code]
							}</span></td>
						</tr>
						<tr>
							<th>Plus de 18ans</th>
							<td class="fs-7"><span class="badge bg-5">${
								dataReferenceConsSpecPlus18ans[code]
							}</span></td>
							<td class="fs-7"><span class="badge bg-5">${
								dataReferenceUrgencePlus18ans[code]
							}</span></td>
							<td class="fs-7"><span class="badge bg-5">${
								dataReferenceExLaboPlus18ans[code]
							}</span></td>
							<td class="fs-7"><span class="badge bg-5">${
								dataReferenceExRadioPlus18ans[code]
							}</span></td>
						</tr>
						<tr>
							<th>Totale</th>
							<td class="fs-7"><span class="badge bg-5">${
								dataReferenceConsSpecMoins5ans[code] +
								dataReferenceConsSpecEntre5ans18ans[code] +
								dataReferenceConsSpecPlus18ans[code]
							}</span></td>
							<td class="fs-7"><span class="badge bg-5">${
								dataReferenceUrgenceMoins5ans[code] +
								dataReferenceUrgenceEntre5ans18ans[code] +
								dataReferenceUrgencePlus18ans[code]
							}</span></td>
							<td class="fs-7"><span class="badge bg-5">${
								dataReferenceExLaboMoins5ans[code] +
								dataReferenceExLaboEntre5ans18ans[code] +
								dataReferenceExLaboPlus18ans[code]
							}</span></td>
							<td class="fs-7"><span class="badge bg-5">${
								dataReferenceExRadioMoins5ans[code] +
								dataReferenceExRadioEntre5ans18ans[code] +
								dataReferenceExRadioPlus18ans[code]
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
							<th colspan="3">Province : ${label.html()}</th>
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
		data = {
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
		var map = $('#province-map').vectorMap('get', 'mapObject');
		// get the title for tooltip /
		title = $(this).next('span').text();
		// change te data
		if (this.value === 'consultationRealise') {
			data = getData([
				dataConsultationRealiseMMoins5ans,
				dataConsultationRealiseMEntre5ans18ans,
				dataConsultationRealiseMPlus18ans,
				dataConsultationRealiseFMoins5ans,
				dataConsultationRealiseFEntre5ans18ans,
				dataConsultationRealiseFPlus18ans,
			]);
			table = 4;
		} else if (this.value === 'pecParPem') {
			data = getData([
				dataPecParPemMoins5ans,
				dataPecParPemEntre5ans18ans,
				dataPecParPemPlus18ans,
			]);
			table = 2;
		} else if (this.value === 'reference') {
			data = getData([
				dataReferenceConsSpecMoins5ans,
				dataReferenceConsSpecEntre5ans18ans,
				dataReferenceConsSpecPlus18ans,
				dataReferenceUrgenceMoins5ans,
				dataReferenceUrgenceEntre5ans18ans,
				dataReferenceUrgencePlus18ans,
				dataReferenceExLaboMoins5ans,
				dataReferenceExLaboEntre5ans18ans,
				dataReferenceExLaboPlus18ans,
				dataReferenceExRadioMoins5ans,
				dataReferenceExRadioEntre5ans18ans,
				dataReferenceExRadioPlus18ans,
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
	$('.thisProvince').addClass('d-none')
});
