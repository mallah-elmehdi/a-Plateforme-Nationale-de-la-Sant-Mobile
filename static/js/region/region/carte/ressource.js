$(document).ready(function () {
	// VARIABLES
	var wholeData = $('#dataRegion').data('carte'),
		title = $('#title').text().split(' - ')[1],
		codeRegion = parseInt($('#data').data('code')),
		// init data
		dataBesoinUsm = wholeData.besoinUsm.data,
		dataBudgetKmsParcourir = wholeData.budgetKmsParcourir.data,
		dataBudgetBesoinCarburant = wholeData.budgetBesoinCarburant.data,
		dataType = wholeData.type.data,
		// other
		scale = ['#BDFFAD', '#187a00'],
		data = getDataType([dataType]),
		max = getMax(data),
		table = 4;
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
				if (table === 4) {
					label.html(
						`
					<div class="bg-white rounded shadow-sm p-1">
					<table class="table table-sm table-bordered fs-8 text-dark">
						<tbody>
							<tr>
								<th colspan="6" class="text-center">${label.html()}</th>
							</tr>
							
							<tr>
								<th colspan="6" class="text-center">${title} : <span class="fs-7"><span class="badge bg-5">${
							data[code]
						}</span></span></th>
							</tr>
							
							<tr>
								<th></th>
								<th colspan="2" class="text-center">Ministre de la santé</th>
								<th colspan="2" class="text-center">Commune</th>
								<th rowspan="2" class="text-center" style="vertical-align:middle;">Total</th>
							</tr>
							
							<tr>
								<th></th>
								<th class="text-center">Moins 5ans</th>
								<th class="text-center">Plus 5ans</th>
								<th class="text-center">Moins 5ans</th>
								<th class="text-center">Plus 5ans</th>
							</tr>
							
							<tr>
								<th>Ambulance</th>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataType[code].ambulance.appartenance.ms.age
										.moins5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataType[code].ambulance.appartenance.ms.age
										.plus5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataType[code].ambulance.appartenance
										.commune.age.moins5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataType[code].ambulance.appartenance
										.commune.age.plus5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataType[code].ambulance.appartenance.ms.age
										.moins5ans +
									dataType[code].ambulance.appartenance.ms.age
										.plus5ans +
									dataType[code].ambulance.appartenance
										.commune.age.moins5ans +
									dataType[code].ambulance.appartenance
										.commune.age.plus5ans
								}</span></td>
							</tr>
							
							<tr>
								<th>Camion mobile</th>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataType[code].camionMobile.appartenance.ms
										.age.moins5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataType[code].camionMobile.appartenance.ms
										.age.plus5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataType[code].camionMobile.appartenance
										.commune.age.moins5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataType[code].camionMobile.appartenance
										.commune.age.plus5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataType[code].camionMobile.appartenance.ms
										.age.moins5ans +
									dataType[code].camionMobile.appartenance.ms
										.age.plus5ans +
									dataType[code].camionMobile.appartenance
										.commune.age.moins5ans +
									dataType[code].camionMobile.appartenance
										.commune.age.plus5ans
								}</span></td>
							</tr>
							
							<tr>
								<th>Unité mobile</th>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataType[code].uniteMobile.appartenance.ms
										.age.moins5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataType[code].uniteMobile.appartenance.ms
										.age.plus5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataType[code].uniteMobile.appartenance
										.commune.age.moins5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataType[code].uniteMobile.appartenance
										.commune.age.plus5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataType[code].uniteMobile.appartenance.ms
										.age.moins5ans +
									dataType[code].uniteMobile.appartenance.ms
										.age.plus5ans +
									dataType[code].uniteMobile.appartenance
										.commune.age.moins5ans +
									dataType[code].uniteMobile.appartenance
										.commune.age.plus5ans
								}</span></td>
							</tr>
							
							<tr>
								<th>VTT</th>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataType[code].vtt.appartenance.ms.age
										.moins5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataType[code].vtt.appartenance.ms.age
										.plus5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataType[code].vtt.appartenance.commune.age
										.moins5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataType[code].vtt.appartenance.commune.age
										.plus5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataType[code].vtt.appartenance.ms.age
										.moins5ans +
									dataType[code].vtt.appartenance.ms.age
										.plus5ans +
									dataType[code].vtt.appartenance.commune.age
										.moins5ans +
									dataType[code].vtt.appartenance.commune.age
										.plus5ans
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
					<div class="bg-white rounded shadow-sm p-1">
					<table class="table table-sm table-bordered fs-8 text-dark">
						<tbody>
							<tr>
								<th colspan="6" class="text-center">${label.html()}</th>
							</tr>
							
							<tr>
								<th>Total kilométrage à parcourir</th>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataBudgetKmsParcourir[code]
								} km</span></td>
							</tr>
							
							<tr>
								<th>Besoin en carburant</th>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataBudgetBesoinCarburant[code]
								} DH</span></td>
							</tr>
						</tbody>
					</table>
					</div>
					`
					);
				} else if (table === 1) {
					label.html(
						`
					<div class="bg-white rounded shadow-sm p-1">
					<table class="table table-sm table-bordered fs-8 text-dark">
						<tbody>							
							<tr>
								<th colspan="6" class="text-center">${label.html()}</th>
							</tr>
							
							<tr>
								<th colspan="6" class="text-center">${title} : <span class="fs-7"><span class="badge bg-5">${
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
	});
	// GET DATA TYPE
	function getDataType(dataset) {
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
				for (const key1 in dataElement[key]) {
					data[key] +=
						dataElement[key][key1].appartenance.ms.age.moins5ans +
						dataElement[key][key1].appartenance.ms.age.plus5ans +
						dataElement[key][key1].appartenance.commune.age
							.moins5ans +
						dataElement[key][key1].appartenance.commune.age
							.plus5ans;
				}
			}
		}
		return data;
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
		$('#title').text($('#title').text().split(' - ')[0] + ' - ' + title);
		// hide the dropdown
		$('.dropdown-toggle').dropdown('hide');
		// ----------------------------------------------------
		// change te data
		if (this.value === 'ressource') {
			data = getDataType([dataType]);
			table = 4;
		} else if (this.value === 'budget') {
			data = getData([dataBudgetBesoinCarburant]);
			table = 2;
		} else if (this.value === 'besoinUsm') {
			data = getData([dataBesoinUsm]);
			table = 1;
		}
		// ----------------------------------------------------
		// apply changes
		map.series.regions[0].params.max = getMax(data);
		map.series.regions[0].setValues({ [codeRegion]: data[codeRegion] });
		map.series.regions[0].legend.render();
	});
});
