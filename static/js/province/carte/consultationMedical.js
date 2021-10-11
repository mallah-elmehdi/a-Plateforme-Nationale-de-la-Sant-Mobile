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
		// consultationRealiseMMoins5ans
		dataConsultationRealiseMMoins5ans = sumDataProvince(
			wholeData.consultationRealiseMMoins5ans.data,
			codeProvince
		),
		// consultationRealiseMEntre5ans18ans
		dataConsultationRealiseMEntre5ans18ans = sumDataProvince(
			wholeData.consultationRealiseMEntre5ans18ans.data,
			codeProvince
		),
		// consultationRealiseMPlus18ans
		dataConsultationRealiseMPlus18ans = sumDataProvince(
			wholeData.consultationRealiseMPlus18ans.data,
			codeProvince
		),
		// consultationRealiseFMoins5ans
		dataConsultationRealiseFMoins5ans = sumDataProvince(
			wholeData.consultationRealiseFMoins5ans.data,
			codeProvince
		),
		// consultationRealiseFEntre5ans18ans
		dataConsultationRealiseFEntre5ans18ans = sumDataProvince(
			wholeData.consultationRealiseFEntre5ans18ans.data,
			codeProvince
		),
		// consultationRealiseFPlus18ans
		dataConsultationRealiseFPlus18ans = sumDataProvince(
			wholeData.consultationRealiseFPlus18ans.data,
			codeProvince
		),
		// pecParPemMoins5ans
		dataPecParPemMoins5ans = sumDataProvince(
			wholeData.pecParPemMoins5ans.data,
			codeProvince
		),
		// pecParPemEntre5ans18ans
		dataPecParPemEntre5ans18ans = sumDataProvince(
			wholeData.pecParPemEntre5ans18ans.data,
			codeProvince
		),
		// pecParPemPlus18ans
		dataPecParPemPlus18ans = sumDataProvince(
			wholeData.pecParPemPlus18ans.data,
			codeProvince
		),
		// referenceConsSpecMoins5ans
		dataReferenceConsSpecMoins5ans = sumDataProvince(
			wholeData.referenceConsSpecMoins5ans.data,
			codeProvince
		),
		// referenceConsSpecEntre5ans18ans
		dataReferenceConsSpecEntre5ans18ans = sumDataProvince(
			wholeData.referenceConsSpecEntre5ans18ans.data,
			codeProvince
		),
		// referenceConsSpecPlus18ans
		dataReferenceConsSpecPlus18ans = sumDataProvince(
			wholeData.referenceConsSpecPlus18ans.data,
			codeProvince
		),
		// referenceUrgenceMoins5ans
		dataReferenceUrgenceMoins5ans = sumDataProvince(
			wholeData.referenceUrgenceMoins5ans.data,
			codeProvince
		),
		// referenceUrgenceEntre5ans18ans
		dataReferenceUrgenceEntre5ans18ans = sumDataProvince(
			wholeData.referenceUrgenceEntre5ans18ans.data,
			codeProvince
		),
		// referenceUrgencePlus18ans
		dataReferenceUrgencePlus18ans = sumDataProvince(
			wholeData.referenceUrgencePlus18ans.data,
			codeProvince
		),
		// referenceExLaboMoins5ans
		dataReferenceExLaboMoins5ans = sumDataProvince(
			wholeData.referenceExLaboMoins5ans.data,
			codeProvince
		),
		// referenceExLaboEntre5ans18ans
		dataReferenceExLaboEntre5ans18ans = sumDataProvince(
			wholeData.referenceExLaboEntre5ans18ans.data,
			codeProvince
		),
		// referenceExLaboPlus18ans
		dataReferenceExLaboPlus18ans = sumDataProvince(
			wholeData.referenceExLaboPlus18ans.data,
			codeProvince
		),
		// referenceExRadioMoins5ans
		dataReferenceExRadioMoins5ans = sumDataProvince(
			wholeData.referenceExRadioMoins5ans.data,
			codeProvince
		),
		// referenceExRadioEntre5ans18ans
		dataReferenceExRadioEntre5ans18ans = sumDataProvince(
			wholeData.referenceExRadioEntre5ans18ans.data,
			codeProvince
		),
		// referenceExRadioPlus18ans
		dataReferenceExRadioPlus18ans = sumDataProvince(
			wholeData.referenceExRadioPlus18ans.data,
			codeProvince
		),
		// budgetMedicamentDispenseEm
		dataBudgetMedicamentDispenseEm = sumDataProvince(
			wholeData.budgetMedicamentDispenseEm.data,
			codeProvince
		),
		// other
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
		max = getMaxValue(data),
		table = 6;
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
				if (table === 6) {
					label.html(
						`
					<div class="bg-white shadow-sm p-1 rounded">
					<table class="table table-sm table-bordered fs-8 text-dark">
						<tbody>
							<tr>
								<th colspan="3" class="text-center">Province : ${label.html()}</th>
							</tr>
							<tr>
								<th colspan="3" class="text-center">${title} : <span class="fs-7"><span class="badge bg-5">${
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
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataConsultationRealiseMMoins5ans[code]
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataConsultationRealiseFMoins5ans[code]
								}</span></td>
							</tr>
							<tr>
								<th>Entre 5ans et 18ans</th>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataConsultationRealiseMEntre5ans18ans[code]
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataConsultationRealiseFEntre5ans18ans[code]
								}</span></td>
							</tr>
							<tr>
								<th>Plus de 18ans</th>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataConsultationRealiseMPlus18ans[code]
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataConsultationRealiseFPlus18ans[code]
								}</span></td>
							</tr>
							<tr>
								<th>Totale</th>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataConsultationRealiseMMoins5ans[code] +
									dataConsultationRealiseMEntre5ans18ans[
										code
									] +
									dataConsultationRealiseMPlus18ans[code]
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
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
				} else if (table === 3) {
					label.html(
						`
					<div class="bg-white shadow-sm p-1 rounded">
					<table class="table table-sm table-bordered fs-8 text-dark">
						<tbody>
							<tr>
								<th colspan="3" class="text-center">Province : ${label.html()}</th>
							</tr>
							<tr>
							<th colspan="3" class="text-center">${title} : <span class="fs-7"><span class="badge bg-5">${
								data[code]
							}</span></span></th>
							</tr>
							<tr>
								<th>Moins de 5ans</th>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataPecParPemMoins5ans[code]
								}</span></td>
							</tr>
							<tr>
								<th>Entre 5ans et 18ans</th>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataPecParPemEntre5ans18ans[code]
								}</span></td>
							</tr>
							<tr>
								<th>Plus de 18ans</th>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataPecParPemPlus18ans[code]
								}</span></td>
							</tr>
							<tr>
								<th>Totale</th>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataPecParPemMoins5ans[code] +
									dataPecParPemEntre5ans18ans[code] +
									dataPecParPemPlus18ans[code]
								}</span></td>
							</tr>
						</tbody>
					</table>
					</div>
					`
					);
				} else if (table === 12) {
					label.html(
						`
					<div class="bg-white shadow-sm p-1 rounded">
					<table class="table table-sm table-bordered fs-8 text-dark">
						<tbody>
							<tr>
								<th colspan="5" class="text-center">Province : ${label.html()}</th>
							</tr>
							<tr>
								<th colspan="5" class="text-center">${title} : <span class="fs-7"><span class="badge bg-5">${
							data[code]
						}</span></span></th>
							<tr>
								<th></th>
								<th>Consultation spécialisée</th>
								<th>Urgence</th>
								<th>Examen De laboratoire</th>
								<th>Examen radiologique</th>
							</tr>
							<tr>
								<th>Moins de 5ans</th>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataReferenceConsSpecMoins5ans[code]
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataReferenceUrgenceMoins5ans[code]
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataReferenceExLaboMoins5ans[code]
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataReferenceExRadioMoins5ans[code]
								}</span></td>
							</tr>
							<tr>
								<th>Entre 5ans et 18ans</th>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataReferenceConsSpecEntre5ans18ans[code]
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataReferenceUrgenceEntre5ans18ans[code]
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataReferenceExLaboEntre5ans18ans[code]
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataReferenceExRadioEntre5ans18ans[code]
								}</span></td>
							</tr>
							<tr>
								<th>Plus de 18ans</th>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataReferenceConsSpecPlus18ans[code]
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataReferenceUrgencePlus18ans[code]
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataReferenceExLaboPlus18ans[code]
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataReferenceExRadioPlus18ans[code]
								}</span></td>
							</tr>
							<tr>
								<th>Totale</th>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataReferenceConsSpecMoins5ans[code]+
									dataReferenceConsSpecEntre5ans18ans[code]+
									dataReferenceConsSpecPlus18ans[code]
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataReferenceUrgenceMoins5ans[code]+
									dataReferenceUrgenceEntre5ans18ans[code]+
									dataReferenceUrgencePlus18ans[code]
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataReferenceExLaboMoins5ans[code]+
									dataReferenceExLaboEntre5ans18ans[code]+
									dataReferenceExLaboPlus18ans[code]
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataReferenceExRadioMoins5ans[code]+
									dataReferenceExRadioEntre5ans18ans[code]+
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
							data[code]
						} MAD</span></span></th>
							</tr>
						</tbody>
					</table>
					</div>
					`
					);
				}
			}
		},
	});
	// EVENT LISTNER
	$('input[type=radio][name=data]').change(function () {
		// get the map
		var map = $('#province-map').vectorMap('get', 'mapObject');
		// get the title for tooltip /
		title = $(this).next('span').text();
		// change the title in the tooltip
		$('#title').text(title);
		// hide the dropdown
		$('.dropdown-toggle').dropdown('hide');
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
			table = 6;
		} else if (this.value === 'pecParPem') {
			data = getData([
				dataPecParPemMoins5ans,
				dataPecParPemEntre5ans18ans,
				dataPecParPemPlus18ans,
			]);
			table = 3;
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
			table = 12;
		} else if (this.value === 'budgetMedicamentDispenseEm') {
			data = getData([dataBudgetMedicamentDispenseEm]);
			table = 1;
		}
		// apply changes
		map.series.regions[0].params.max = getMaxValue(data);
		map.series.regions[0].setValues({ codeProvince: data[codeProvince] });
		map.series.regions[0].legend.render();
	});
});
