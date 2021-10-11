$(document).ready(function () {
	// VARIABLES
	var wholeData = $('#dataRegion').data('carte'),
		title = $('#title').text(),
		codeRegion = parseInt($('#data').data('code')),
		// init data
		dataDiabeteCas = wholeData.diabeteCas.data,
		dataDiabeteCasPec = wholeData.diabeteCasPec.data,
		dataDiabeteReference = wholeData.diabeteReference.data,
		dataHtaCas = wholeData.htaCas.data,
		dataHtaCasPec = wholeData.htaCasPec.data,
		dataHtaReference = wholeData.htaReference.data,
		dataAngineCas = wholeData.angineCas.data,
		dataAngineCasPec = wholeData.angineCasPec.data,
		dataAngineReference = wholeData.angineReference.data,
		dataCarieCas = wholeData.carieCas.data,
		dataCarieCasPec = wholeData.carieCasPec.data,
		dataCarieReference = wholeData.carieReference.data,
		dataParodontopathieCas = wholeData.parodontopathieCas.data,
		dataParodontopathieCasPec = wholeData.parodontopathieCasPec.data,
		dataParodontopathieReference = wholeData.parodontopathieReference.data,
		dataMaladieMentaleCas = wholeData.maladieMentaleCas.data,
		dataMaladieMentaleCasPec = wholeData.maladieMentaleCasPec.data,
		dataMaladieMentaleReference = wholeData.maladieMentaleReference.data,
		dataIstCas = wholeData.istCas.data,
		dataIstCasPec = wholeData.istCasPec.data,
		dataIstReference = wholeData.istReference.data,
		dataRaaAvecCarditesCas = wholeData.raaAvecCarditesCas.data,
		dataRaaAvecCarditesCasPec = wholeData.raaAvecCarditesCasPec.data,
		dataRaaAvecCarditesReference = wholeData.raaAvecCarditesReference.data,
		dataRaaSansCarditesCas = wholeData.raaSansCarditesCas.data,
		dataRaaSansCarditesCasPec = wholeData.raaSansCarditesCasPec.data,
		dataRaaSansCarditesReference = wholeData.raaSansCarditesReference.data,
		dataTuberculosePolmonaireCas = wholeData.tuberculosePolmonaireCas.data,
		dataTuberculosePolmonaireCasPec =
			wholeData.tuberculosePolmonaireCasPec.data,
		dataTuberculosePolmonaireReference =
			wholeData.tuberculosePolmonaireReference.data,
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
		max = getMax(data),
		table = 3;
	// MAP
	$('#region-map').vectorMap({
		map: 'region',
		series: {
			regions: [
				{
					values: { [codeRegion]: data[codeRegion] },
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
				'stroke-width': 8,
				fill: '#c6cacd',
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
			if (code == codeRegion) {
				if (table === 3) {
					label.html(
						`
					<div class="bg-white shadow-sm p-1 rounded">
					<table class="table table-sm table-bordered fs-8 text-dark">
						<tbody>
							<tr>
								<th colspan="2" class="text-center">Région : ${label.html()}</th>
							</tr>
							
							<tr>
								<th colspan="2" class="text-center">${title} : <span class="fs-7"><span class="badge bg-5">${
							data[code]
						}</span></span></th>
							</tr>
							<tr>
								<td>Nombre de cas</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataDiabeteCas[code]
								}</span></td>
							</tr>
							<tr>
								<td>Nombre de cas PEC</td>
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
								<th colspan="2" class="text-center">Région : ${label.html()}</th>
							</tr>
							
							<tr>
								<th colspan="2" class="text-center">${title} : <span class="fs-7"><span class="badge bg-5">${
							data[code]
						}</span></span></th>
							</tr>
							<tr>
								<td>Nombre de cas</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataHtaCas[code]
								}</span></td>
							</tr>
							<tr>
								<td>Nombre de cas PEC</td>
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
								<th colspan="2" class="text-center">Région : ${label.html()}</th>
							</tr>
							
							<tr>
								<th colspan="2" class="text-center">${title} : <span class="fs-7"><span class="badge bg-5">${
							data[code]
						}</span></span></th>
							</tr>
							<tr>
								<td>Nombre de cas</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataAngineCas[code]
								}</span></td>
							</tr>
							<tr>
								<td>Nombre de cas PEC</td>
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
								<th colspan="2" class="text-center">Région : ${label.html()}</th>
							</tr>
							
							<tr>
								<th colspan="2" class="text-center">${title} : <span class="fs-7"><span class="badge bg-5">${
							data[code]
						}</span></span></th>
							</tr>
							<tr>
								<td>Nombre de cas</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataCarieCas[code]
								}</span></td>
							</tr>
							<tr>
								<td>Nombre de cas PEC</td>
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
								<th colspan="2" class="text-center">Région : ${label.html()}</th>
							</tr>
							
							<tr>
								<th colspan="2" class="text-center">${title} : <span class="fs-7"><span class="badge bg-5">${
							data[code]
						}</span></span></th>
							</tr>
							<tr>
								<td>Nombre de cas</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataParodontopathieCas[code]
								}</span></td>
							</tr>
							<tr>
								<td>Nombre de cas PEC</td>
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
								<th colspan="2" class="text-center">Région : ${label.html()}</th>
							</tr>
							
							<tr>
								<th colspan="2" class="text-center">${title} : <span class="fs-7"><span class="badge bg-5">${
							data[code]
						}</span></span></th>
							</tr>
							<tr>
								<td>Nombre de cas</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataMaladieMentaleCas[code]
								}</span></td>
							</tr>
							<tr>
								<td>Nombre de cas PEC</td>
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
								<th colspan="2" class="text-center">Région : ${label.html()}</th>
							</tr>
							
							<tr>
								<th colspan="2" class="text-center">${title} : <span class="fs-7"><span class="badge bg-5">${
							data[code]
						}</span></span></th>
							</tr>
							<tr>
								<td>Nombre de cas</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataIstCas[code]
								}</span></td>
							</tr>
							<tr>
								<td>Nombre de cas PEC</td>
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
								<th colspan="3" class="text-center">Région : ${label.html()}</th>
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
								<td>Nombre de cas</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataRaaAvecCarditesCas[code]
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataRaaSansCarditesCas[code]
								}</span></td>
							</tr>
							<tr>
								<td>Nombre de cas PEC</td>
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
				} else if (table === 6.2) {
					label.html(
						`
					<div class="bg-white shadow-sm p-1 rounded">
					<table class="table table-sm table-bordered fs-8 text-dark">
						<tbody>
							<tr>
								<th colspan="2" class="text-center">Région : ${label.html()}</th>
							</tr>
							
							<tr>
								<th colspan="2" class="text-center">${title} : <span class="fs-7"><span class="badge bg-5">${
							data[code]
						}</span></span></th>
							</tr>
							<tr>
								<td>Nombre de cas</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataTuberculosePolmonaireCas[code]
								}</span></td>
							</tr>
							<tr>
								<td>Nombre de cas PEC</td>
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
							
							<tr>
								<td>Total</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataTuberculosePolmonaireCas[code] +
									dataTuberculosePolmonaireCasPec[code] +
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
		for (const key in data) {
			var element = data[key];
			if (element > max) max = element;
		}
		return max + 1;
	}
	// EVENT LISTNER
	$('input[type=radio][name=data]').change(function () {
		// get the map
		var map = $('#region-map').vectorMap('get', 'mapObject');
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
		} else if (this.value === 'tuberculose') {
			data = getData([
				dataTuberculosePolmonaireCas,
				dataTuberculosePolmonaireCasPec,
				dataTuberculosePolmonaireReference,
			]);
			table = 6.2;
		}
		// apply changes
		map.series.regions[0].params.max = getMax(data);
		map.series.regions[0].setValues({ [codeRegion]: data[codeRegion] });
		map.series.regions[0].legend.render();
	});
});
