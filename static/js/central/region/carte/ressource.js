$(document).ready(function () {
	// VARIABLES
	var wholeData = $('#dataRegion').data('carte'),
		title = $('#title').text(),
		// init data
		dataBesoinUsm = wholeData.besoinUsm.data,
		dataBudgetKmsParcourir = wholeData.budgetKmsParcourir.data,
		dataBudgetBesoinCarburant = wholeData.budgetBesoinCarburant.data,
		dataType = wholeData.type.data,
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
		data = getDataType([dataType]),
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
				<div class="bg-white rounded shadow-sm p-1">
				<table class="table table-sm table-bordered fs-8 text-dark">
					<tbody>
						<tr>
							<th colspan="8" class="text-center">Région : ${label.html()}</th>
						</tr>
						
						<tr>
							<th colspan="8" class="text-center">${title} : <span class="fs-7"><span class="badge bg-5">${
						data[code]
					}</span></span></th>
						</tr>
						
						<tr>
							<th></th>
							<th colspan="2" class="text-center">Ministère de la Santé</th>
							<th colspan="2" class="text-center">Commune</th>
							<th colspan="2" class="text-center">Organisation Non Gouvernementale (ONG)</th>
							<th rowspan="2" class="text-center" style="vertical-align:middle;">Total</th>
						</tr>
						
						<tr>
							<th></th>
							<th class="text-center">Moins 5ans</th>
							<th class="text-center">Plus 5ans</th>
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
								dataType[code].ambulance.appartenance.ong
									.age.moins5ans
							}</span></td>
							<td class="fs-7 text-center"><span class="badge bg-5">${
								dataType[code].ambulance.appartenance.ong
									.age.plus5ans
							}</span></td>
							<td class="fs-7 text-center"><span class="badge bg-5">${
								dataType[code].ambulance.appartenance.ms.age
									.moins5ans +
								dataType[code].ambulance.appartenance.ms.age
									.plus5ans +
								dataType[code].ambulance.appartenance
									.commune.age.moins5ans +
								dataType[code].ambulance.appartenance
									.commune.age.plus5ans +
								dataType[code].ambulance.appartenance.ong
									.age.moins5ans +
								dataType[code].ambulance.appartenance.ong
									.age.plus5ans
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
								dataType[code].camionMobile.appartenance.ong
									.age.moins5ans
							}</span></td>
							<td class="fs-7 text-center"><span class="badge bg-5">${
								dataType[code].camionMobile.appartenance.ong
									.age.plus5ans
							}</span></td>
							<td class="fs-7 text-center"><span class="badge bg-5">${
								dataType[code].camionMobile.appartenance.ms
									.age.moins5ans +
								dataType[code].camionMobile.appartenance.ms
									.age.plus5ans +
								dataType[code].camionMobile.appartenance
									.commune.age.moins5ans +
								dataType[code].camionMobile.appartenance
									.commune.age.plus5ans +
								dataType[code].camionMobile.appartenance.ong
									.age.moins5ans +
								dataType[code].camionMobile.appartenance.ong
									.age.plus5ans
							}</span></td>
						</tr>
						
						<tr>
							<th>Unité Sanitaire Mobile (USM)</th>
							<td class="fs-7 text-center"><span class="badge bg-5">${
								dataType[code].usm.appartenance.ms.age
									.moins5ans
							}</span></td>
							<td class="fs-7 text-center"><span class="badge bg-5">${
								dataType[code].usm.appartenance.ms.age
									.plus5ans
							}</span></td>
							<td class="fs-7 text-center"><span class="badge bg-5">${
								dataType[code].usm.appartenance.commune.age
									.moins5ans
							}</span></td>
							<td class="fs-7 text-center"><span class="badge bg-5">${
								dataType[code].usm.appartenance.commune.age
									.plus5ans
							}</span></td>
							<td class="fs-7 text-center"><span class="badge bg-5">${
								dataType[code].usm.appartenance.ong.age
									.moins5ans
							}</span></td>
							<td class="fs-7 text-center"><span class="badge bg-5">${
								dataType[code].usm.appartenance.ong.age
									.plus5ans
							}</span></td>
							<td class="fs-7 text-center"><span class="badge bg-5">${
								dataType[code].usm.appartenance.ms.age
									.moins5ans +
								dataType[code].usm.appartenance.ms.age
									.plus5ans +
								dataType[code].usm.appartenance.commune.age
									.moins5ans +
								dataType[code].usm.appartenance.commune.age
									.plus5ans +
								dataType[code].usm.appartenance.ong.age
									.moins5ans +
								dataType[code].usm.appartenance.ong.age
									.plus5ans
							}</span></td>
						</tr>
						
						<tr>
							<th>Véhicule Tout Terrain (VTT)</th>
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
								dataType[code].vtt.appartenance.ong.age
									.moins5ans
							}</span></td>
							<td class="fs-7 text-center"><span class="badge bg-5">${
								dataType[code].vtt.appartenance.ong.age
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
									.plus5ans +
								dataType[code].vtt.appartenance.ong.age
									.moins5ans +
								dataType[code].vtt.appartenance.ong.age
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
							<th colspan="6" class="text-center">Région : ${label.html()}</th>
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
							} MAD</span></td>
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
							<th colspan="6" class="text-center">Région : ${label.html()}</th>
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
						.plus5ans +
					dataElement[key][key1].appartenance.ong.age.moins5ans +
					dataElement[key][key1].appartenance.ong.age.plus5ans;
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
		$('#title').text(title);
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
		map.series.regions[0].setValues(data);
		map.series.regions[0].legend.render();
	});
});
