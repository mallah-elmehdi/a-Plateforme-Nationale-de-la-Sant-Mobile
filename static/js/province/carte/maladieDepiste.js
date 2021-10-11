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
		// diabeteCas
		dataDiabeteCas = sumDataProvince(
			wholeData.diabeteCas.data,
			codeProvince
		),
		// diabeteCasPec
		dataDiabeteCasPec = sumDataProvince(
			wholeData.diabeteCasPec.data,
			codeProvince
		),
		// diabeteReference
		dataDiabeteReference = sumDataProvince(
			wholeData.diabeteReference.data,
			codeProvince
		),
		// htaCas
		dataHtaCas = sumDataProvince(wholeData.htaCas.data, codeProvince),
		// htaCasPec
		dataHtaCasPec = sumDataProvince(wholeData.htaCasPec.data, codeProvince),
		// htaReference
		dataHtaReference = sumDataProvince(
			wholeData.htaReference.data,
			codeProvince
		),
		// angineCas
		dataAngineCas = sumDataProvince(wholeData.angineCas.data, codeProvince),
		// angineCasPec
		dataAngineCasPec = sumDataProvince(
			wholeData.angineCasPec.data,
			codeProvince
		),
		// angineReference
		dataAngineReference = sumDataProvince(
			wholeData.angineReference.data,
			codeProvince
		),
		// carieCas
		dataCarieCas = sumDataProvince(wholeData.carieCas.data, codeProvince),
		// carieCasPec
		dataCarieCasPec = sumDataProvince(
			wholeData.carieCasPec.data,
			codeProvince
		),
		// carieReference
		dataCarieReference = sumDataProvince(
			wholeData.carieReference.data,
			codeProvince
		),
		// parodontopathieCas
		dataParodontopathieCas = sumDataProvince(
			wholeData.parodontopathieCas.data,
			codeProvince
		),
		// parodontopathieCasPec
		dataParodontopathieCasPec = sumDataProvince(
			wholeData.parodontopathieCasPec.data,
			codeProvince
		),
		// parodontopathieReference
		dataParodontopathieReference = sumDataProvince(
			wholeData.parodontopathieReference.data,
			codeProvince
		),
		// maladieMentaleCas
		dataMaladieMentaleCas = sumDataProvince(
			wholeData.maladieMentaleCas.data,
			codeProvince
		),
		// maladieMentaleCasPec
		dataMaladieMentaleCasPec = sumDataProvince(
			wholeData.maladieMentaleCasPec.data,
			codeProvince
		),
		// maladieMentaleReference
		dataMaladieMentaleReference = sumDataProvince(
			wholeData.maladieMentaleReference.data,
			codeProvince
		),
		// istCas
		dataIstCas = sumDataProvince(wholeData.istCas.data, codeProvince),
		// istCasPec
		dataIstCasPec = sumDataProvince(wholeData.istCasPec.data, codeProvince),
		// istReference
		dataIstReference = sumDataProvince(
			wholeData.istReference.data,
			codeProvince
		),
		// raaAvecCarditesCas
		dataRaaAvecCarditesCas = sumDataProvince(
			wholeData.raaAvecCarditesCas.data,
			codeProvince
		),
		// raaAvecCarditesCasPec
		dataRaaAvecCarditesCasPec = sumDataProvince(
			wholeData.raaAvecCarditesCasPec.data,
			codeProvince
		),
		// raaAvecCarditesReference
		dataRaaAvecCarditesReference = sumDataProvince(
			wholeData.raaAvecCarditesReference.data,
			codeProvince
		),
		// raaSansCarditesCas
		dataRaaSansCarditesCas = sumDataProvince(
			wholeData.raaSansCarditesCas.data,
			codeProvince
		),
		// raaSansCarditesCasPec
		dataRaaSansCarditesCasPec = sumDataProvince(
			wholeData.raaSansCarditesCasPec.data,
			codeProvince
		),
		// raaSansCarditesReference
		dataRaaSansCarditesReference = sumDataProvince(
			wholeData.raaSansCarditesReference.data,
			codeProvince
		),
		// tuberculosePolmonaireCas
		dataTuberculosePolmonaireCas = sumDataProvince(
			wholeData.tuberculosePolmonaireCas.data,
			codeProvince
		),
		// tuberculosePolmonaireCasPec
		dataTuberculosePolmonaireCasPec = sumDataProvince(
			wholeData.tuberculosePolmonaireCasPec.data,
			codeProvince
		),
		// tuberculosePolmonaireReference
		dataTuberculosePolmonaireReference = sumDataProvince(
			wholeData.tuberculosePolmonaireReference.data,
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
			dataDiabeteCas,
			dataDiabeteCasPec,
			dataDiabeteReference,
		]),
		max = getMaxValue(data),
		table = 3;
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
				if (table === 3) {
					label.html(
						`
					<div class="bg-white shadow-sm p-1 rounded">
					<table class="table table-sm table-bordered fs-8 text-dark">
						<tbody>
							<tr>
								<th colspan="2" class="text-center">Province :  ${label.html()}</th>
							</tr>
							
							<tr>
								<th colspan="2" class="text-center">${title} : <span class="fs-7"><span class="badge bg-5">${
							data[code]
						}</span></span></th>
							</tr>
							<tr>
								<td>Nombre de cas dépistés</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataDiabeteCas[code]
								}</span></td>
							</tr>
							<tr>
								<td>Nombre de cas pris en charge</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataDiabeteCasPec[code]
								}</span></td>
							</tr>
							
							<tr>
								<td>Références</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataDiabeteReference[code]
								}</span></td>
							</tr>
						</tbody>
					</table>
					</div>
					`
					);
				} else if (table === 3.1) {
					label.html(
						`
					<div class="bg-white shadow-sm p-1 rounded">
					<table class="table table-sm table-bordered fs-8 text-dark">
						<tbody>
							<tr>
								<th colspan="2" class="text-center">Province :  ${label.html()}</th>
							</tr>
							
							<tr>
								<th colspan="2" class="text-center">${title} : <span class="fs-7"><span class="badge bg-5">${
							data[code]
						}</span></span></th>
							</tr>
							<tr>
								<td>Nombre de cas dépistés</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataHtaCas[code]
								}</span></td>
							</tr>
							<tr>
								<td>Nombre de cas pris en charge</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataHtaCasPec[code]
								}</span></td>
							</tr>
							
							<tr>
								<td>Références</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataHtaReference[code]
								}</span></td>
							</tr>
						</tbody>
					</table>
					</div>
					`
					);
				} else if (table === 3.2) {
					label.html(
						`
					<div class="bg-white shadow-sm p-1 rounded">
					<table class="table table-sm table-bordered fs-8 text-dark">
						<tbody>
							<tr>
								<th colspan="2" class="text-center">Province :  ${label.html()}</th>
							</tr>
							
							<tr>
								<th colspan="2" class="text-center">${title} : <span class="fs-7"><span class="badge bg-5">${
							data[code]
						}</span></span></th>
							</tr>
							<tr>
								<td>Nombre de cas dépistés</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataAngineCas[code]
								}</span></td>
							</tr>
							<tr>
								<td>Nombre de cas pris en charge</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataAngineCasPec[code]
								}</span></td>
							</tr>
							
							<tr>
								<td>Références</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataAngineReference[code]
								}</span></td>
							</tr>
						</tbody>
					</table>
					</div>
					`
					);
				} else if (table === 3.3) {
					label.html(
						`
					<div class="bg-white shadow-sm p-1 rounded">
					<table class="table table-sm table-bordered fs-8 text-dark">
						<tbody>
							<tr>
								<th colspan="2" class="text-center">Province :  ${label.html()}</th>
							</tr>
							
							<tr>
								<th colspan="2" class="text-center">${title} : <span class="fs-7"><span class="badge bg-5">${
							data[code]
						}</span></span></th>
							</tr>
							<tr>
								<td>Nombre de cas dépistés</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataCarieCas[code]
								}</span></td>
							</tr>
							<tr>
								<td>Nombre de cas pris en charge</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataCarieCasPec[code]
								}</span></td>
							</tr>
							
							<tr>
								<td>Références</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataCarieReference[code]
								}</span></td>
							</tr>
						</tbody>
					</table>
					</div>
					`
					);
				} else if (table === 3.4) {
					label.html(
						`
					<div class="bg-white shadow-sm p-1 rounded">
					<table class="table table-sm table-bordered fs-8 text-dark">
						<tbody>
							<tr>
								<th colspan="2" class="text-center">Province :  ${label.html()}</th>
							</tr>
							
							<tr>
								<th colspan="2" class="text-center">${title} : <span class="fs-7"><span class="badge bg-5">${
							data[code]
						}</span></span></th>
							</tr>
							<tr>
								<td>Nombre de cas dépistés</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataParodontopathieCas[code]
								}</span></td>
							</tr>
							<tr>
								<td>Nombre de cas pris en charge</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataParodontopathieCasPec[code]
								}</span></td>
							</tr>
							
							<tr>
								<td>Références</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataParodontopathieReference[code]
								}</span></td>
							</tr>
						</tbody>
					</table>
					</div>
					`
					);
				} else if (table === 3.5) {
					label.html(
						`
					<div class="bg-white shadow-sm p-1 rounded">
					<table class="table table-sm table-bordered fs-8 text-dark">
						<tbody>
							<tr>
								<th colspan="2" class="text-center">Province :  ${label.html()}</th>
							</tr>
							
							<tr>
								<th colspan="2" class="text-center">${title} : <span class="fs-7"><span class="badge bg-5">${
							data[code]
						}</span></span></th>
							</tr>
							<tr>
								<td>Nombre de cas dépistés</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataMaladieMentaleCas[code]
								}</span></td>
							</tr>
							<tr>
								<td>Nombre de cas pris en charge</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataMaladieMentaleCasPec[code]
								}</span></td>
							</tr>
							
							<tr>
								<td>Références</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataMaladieMentaleReference[code]
								}</span></td>
							</tr>
						</tbody>
					</table>
					</div>
					`
					);
				} else if (table === 3.6) {
					label.html(
						`
					<div class="bg-white shadow-sm p-1 rounded">
					<table class="table table-sm table-bordered fs-8 text-dark">
						<tbody>
							<tr>
								<th colspan="2" class="text-center">Province :  ${label.html()}</th>
							</tr>
							
							<tr>
								<th colspan="2" class="text-center">${title} : <span class="fs-7"><span class="badge bg-5">${
							data[code]
						}</span></span></th>
							</tr>
							<tr>
								<td>Nombre de cas dépistés</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataIstCas[code]
								}</span></td>
							</tr>
							<tr>
								<td>Nombre de cas pris en charge</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataIstCasPec[code]
								}</span></td>
							</tr>
							
							<tr>
								<td>Références</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataIstReference[code]
								}</span></td>
							</tr>
						</tbody>
					</table>
					</div>
					`
					);
				} else if (table === 6) {
					label.html(
						`
					<div class="bg-white shadow-sm p-1 rounded">
					<table class="table table-sm table-bordered fs-8 text-dark">
						<tbody>
							<tr>
								<th colspan="3" class="text-center">Province :  ${label.html()}</th>
							</tr>
							
							<tr>
								<th colspan="3" class="text-center">${title} : <span class="fs-7"><span class="badge bg-5">${
							data[code]
						}</span></span></th>
							</tr>
							<tr>
								<th></th>
								<th>Avec cardites</th>
								<th>Sans cardites</th>
							</tr>
							<tr>
								<td>Nombre de cas dépistés</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataRaaAvecCarditesCas[code]
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataRaaSansCarditesCas[code]
								}</span></td>
							</tr>
							<tr>
								<td>Nombre de cas pris en charge</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataRaaAvecCarditesCasPec[code]
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataRaaSansCarditesCasPec[code]
								}</span></td>
							</tr>
							
							<tr>
								<td>Références</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataRaaAvecCarditesReference[code]
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataRaaSansCarditesReference[code]
								}</span></td>
							</tr>
			
							<tr>
								<td>Total</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataRaaAvecCarditesCas[code] +
									dataRaaAvecCarditesCasPec[code] +
									dataRaaAvecCarditesReference[code]
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataRaaSansCarditesCas[code] +
									dataRaaSansCarditesCasPec[code] +
									dataRaaSansCarditesReference[code]
								}</span></td>
							</tr>
						</tbody>
					</table>
					</div>
					`
					);
				} else if (table === 3.7) {
					label.html(
						`
					<div class="bg-white shadow-sm p-1 rounded">
					<table class="table table-sm table-bordered fs-8 text-dark">
						<tbody>
							<tr>
								<th colspan="2" class="text-center">Province :  ${label.html()}</th>
							</tr>
							
							<tr>
								<th colspan="2" class="text-center">${title} : <span class="fs-7"><span class="badge bg-5">${
							data[code]
						}</span></span></th>
							</tr>
							<tr>
								<td>Nombre de cas dépistés</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataTuberculosePolmonaireCas[code]
								}</span></td>
							</tr>
							<tr>
								<td>Nombre de cas pris en charge</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataTuberculosePolmonaireCasPec[code]
								}</span></td>
							</tr>
							
							<tr>
								<td>Références</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataTuberculosePolmonaireReference[code]
								}</span></td>
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
		if (this.value === 'diabete') {
			data = getData([
				dataDiabeteCas,
				dataDiabeteCasPec,
				dataDiabeteReference,
			]);
			table = 3;
		} else if (this.value === 'hta') {
			data = getData([dataHtaCas, dataHtaCasPec, dataHtaReference]);
			table = 3.1;
		} else if (this.value === 'angine') {
			data = getData([
				dataAngineCas,
				dataAngineCasPec,
				dataAngineReference,
			]);
			table = 3.2;
		} else if (this.value === 'carie') {
			data = getData([dataCarieCas, dataCarieCasPec, dataCarieReference]);
			table = 3.3;
		} else if (this.value === 'parodontopathie') {
			data = getData([
				dataParodontopathieCas,
				dataParodontopathieCasPec,
				dataParodontopathieReference,
			]);
			table = 3.4;
		} else if (this.value === 'maladieMentale') {
			data = getData([
				dataMaladieMentaleCas,
				dataMaladieMentaleCasPec,
				dataMaladieMentaleReference,
			]);
			table = 3.5;
		} else if (this.value === 'ist') {
			data = getData([dataIstCas, dataIstCasPec, dataIstReference]);
			table = 3.6;
		} else if (this.value === 'raa') {
			data = getData([
				dataRaaAvecCarditesCas,
				dataRaaAvecCarditesCasPec,
				dataRaaAvecCarditesReference,
				dataRaaSansCarditesCas,
				dataRaaSansCarditesCasPec,
				dataRaaSansCarditesReference,
			]);
			table = 6;
		} else if (this.value === 'tuberculosePolmonaire') {
			data = getData([
				dataTuberculosePolmonaireCas,
				dataTuberculosePolmonaireCasPec,
				dataTuberculosePolmonaireReference,
			]);
			table = 3.7;
		}
		// apply changes
		map.series.regions[0].params.max = getMaxValue(data);
		map.series.regions[0].setValues({ codeProvince: data[codeProvince] });
		map.series.regions[0].legend.render();
	});
});
