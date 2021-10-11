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
	// SUM OF VEHICULES
	function sumDataVehicule(data, codeProvince) {
		// VARIABLE
		var ObjOut = {
			[codeProvince]: 0,
		};
		// loop
		for (const key in data) {
			if (Object.hasOwnProperty.call(data, key)) {
				const element = data[key];
				ObjOut[codeProvince] +=
					element.value.ambulance.appartenance.commune.age.moins5ans;
				ObjOut[codeProvince] +=
					element.value.ambulance.appartenance.commune.age.plus5ans;
				ObjOut[codeProvince] +=
					element.value.ambulance.appartenance.ms.age.moins5ans;
				ObjOut[codeProvince] +=
					element.value.ambulance.appartenance.ms.age.plus5ans;
				ObjOut[codeProvince] +=
					element.value.ambulance.appartenance.ong.age.moins5ans;
				ObjOut[codeProvince] +=
					element.value.ambulance.appartenance.ong.age.plus5ans;

				ObjOut[codeProvince] +=
					element.value.camionMobile.appartenance.commune.age.moins5ans;
				ObjOut[codeProvince] +=
					element.value.camionMobile.appartenance.commune.age.plus5ans;
				ObjOut[codeProvince] +=
					element.value.camionMobile.appartenance.ms.age.moins5ans;
				ObjOut[codeProvince] +=
					element.value.camionMobile.appartenance.ms.age.plus5ans;
				ObjOut[codeProvince] +=
					element.value.camionMobile.appartenance.ong.age.moins5ans;
				ObjOut[codeProvince] +=
					element.value.camionMobile.appartenance.ong.age.plus5ans;

				ObjOut[codeProvince] +=
					element.value.usm.appartenance.commune.age.moins5ans;
				ObjOut[codeProvince] +=
					element.value.usm.appartenance.commune.age.plus5ans;
				ObjOut[codeProvince] +=
					element.value.usm.appartenance.ms.age.moins5ans;
				ObjOut[codeProvince] +=
					element.value.usm.appartenance.ms.age.plus5ans;
				ObjOut[codeProvince] +=
					element.value.usm.appartenance.ong.age.moins5ans;
				ObjOut[codeProvince] +=
					element.value.usm.appartenance.ong.age.plus5ans;

				ObjOut[codeProvince] +=
					element.value.vtt.appartenance.commune.age.moins5ans;
				ObjOut[codeProvince] +=
					element.value.vtt.appartenance.commune.age.plus5ans;
				ObjOut[codeProvince] +=
					element.value.vtt.appartenance.ms.age.moins5ans;
				ObjOut[codeProvince] +=
					element.value.vtt.appartenance.ms.age.plus5ans;
				ObjOut[codeProvince] +=
					element.value.vtt.appartenance.ong.age.moins5ans;
				ObjOut[codeProvince] +=
					element.value.vtt.appartenance.ong.age.plus5ans;
			}
		}
		return ObjOut;
	}
	// SUM OF VEHICULES
	function tableVehicule(data, codeProvince) {
		// VARIABLE
		var ObjOut = {
			[codeProvince]: {
				ambulance: {
					ms: {
						moins5ans: 0,
						plus5ans: 0,
					},
					commune: {
						moins5ans: 0,
						plus5ans: 0,
					},
					ong: {
						moins5ans: 0,
						plus5ans: 0,
					},
				},
				camionMobile: {
					ms: {
						moins5ans: 0,
						plus5ans: 0,
					},
					commune: {
						moins5ans: 0,
						plus5ans: 0,
					},
					ong: {
						moins5ans: 0,
						plus5ans: 0,
					},
				},
				usm: {
					ms: {
						moins5ans: 0,
						plus5ans: 0,
					},
					commune: {
						moins5ans: 0,
						plus5ans: 0,
					},
					ong: {
						moins5ans: 0,
						plus5ans: 0,
					},
				},
				vtt: {
					ms: {
						moins5ans: 0,
						plus5ans: 0,
					},
					commune: {
						moins5ans: 0,
						plus5ans: 0,
					},
					ong: {
						moins5ans: 0,
						plus5ans: 0,
					},
				},
			},
		};
		// loop
		for (const key in data) {
			if (Object.hasOwnProperty.call(data, key)) {
				const element = data[key];
				ObjOut[codeProvince].ambulance.commune.moins5ans +=
					element.value.ambulance.appartenance.commune.age.moins5ans;
				ObjOut[codeProvince].ambulance.commune.plus5ans +=
					element.value.ambulance.appartenance.commune.age.plus5ans;
				ObjOut[codeProvince].ambulance.ms.moins5ans +=
					element.value.ambulance.appartenance.ms.age.moins5ans;
				ObjOut[codeProvince].ambulance.ms.plus5ans +=
					element.value.ambulance.appartenance.ms.age.plus5ans;
				ObjOut[codeProvince].ambulance.ong.moins5ans +=
					element.value.ambulance.appartenance.ong.age.moins5ans;
				ObjOut[codeProvince].ambulance.ong.plus5ans +=
					element.value.ambulance.appartenance.ong.age.plus5ans;

				ObjOut[codeProvince].camionMobile.commune.moins5ans +=
					element.value.camionMobile.appartenance.commune.age.moins5ans;
				ObjOut[codeProvince].camionMobile.commune.plus5ans +=
					element.value.camionMobile.appartenance.commune.age.plus5ans;
				ObjOut[codeProvince].camionMobile.ms.moins5ans +=
					element.value.camionMobile.appartenance.ms.age.moins5ans;
				ObjOut[codeProvince].camionMobile.ms.plus5ans +=
					element.value.camionMobile.appartenance.ms.age.plus5ans;
				ObjOut[codeProvince].camionMobile.ong.moins5ans +=
					element.value.camionMobile.appartenance.ong.age.moins5ans;
				ObjOut[codeProvince].camionMobile.ong.plus5ans +=
					element.value.camionMobile.appartenance.ong.age.plus5ans;

				ObjOut[codeProvince].usm.commune.moins5ans +=
					element.value.usm.appartenance.commune.age.moins5ans;
				ObjOut[codeProvince].usm.commune.plus5ans +=
					element.value.usm.appartenance.commune.age.plus5ans;
				ObjOut[codeProvince].usm.ms.moins5ans +=
					element.value.usm.appartenance.ms.age.moins5ans;
				ObjOut[codeProvince].usm.ms.plus5ans +=
					element.value.usm.appartenance.ms.age.plus5ans;
				ObjOut[codeProvince].usm.ong.moins5ans +=
					element.value.usm.appartenance.ong.age.moins5ans;
				ObjOut[codeProvince].usm.ong.plus5ans +=
					element.value.usm.appartenance.ong.age.plus5ans;

				ObjOut[codeProvince].vtt.commune.moins5ans +=
					element.value.vtt.appartenance.commune.age.moins5ans;
				ObjOut[codeProvince].vtt.commune.plus5ans +=
					element.value.vtt.appartenance.commune.age.plus5ans;
				ObjOut[codeProvince].vtt.ms.moins5ans +=
					element.value.vtt.appartenance.ms.age.moins5ans;
				ObjOut[codeProvince].vtt.ms.plus5ans +=
					element.value.vtt.appartenance.ms.age.plus5ans;
				ObjOut[codeProvince].vtt.ong.moins5ans +=
					element.value.vtt.appartenance.ong.age.moins5ans;
				ObjOut[codeProvince].vtt.ong.plus5ans +=
					element.value.vtt.appartenance.ong.age.plus5ans;
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
		// init data
		// dataVihecule
		dataVehicule = sumDataVehicule(wholeData.vehicule.data, codeProvince),
		vehiculeTable = tableVehicule(wholeData.vehicule.data, codeProvince),
		// dataBesoinUsm
		dataBudgetKmsParcourir = sumDataProvince(
			wholeData.budgetKmsParcourir.data,
			codeProvince
		),
		// dataBudgetKmsParcourir
		dataBudgetBesoinCarburant = sumDataProvince(
			wholeData.budgetBesoinCarburant.data,
			codeProvince
		),
		// dataBudgetBesoinCarburant
		dataBesoinUsm = sumDataProvince(wholeData.besoinUsm.data, codeProvince),
		// other
		scale = [
			'#FFF891',
			'#fcf75a',
			'#a9a403',
			'#7DFE69',
			'#169a01',
			'#0a4600',
		],
		data = getData([dataVehicule]),
		max = getMaxValue(data),
		table = 1.1;
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
				if (table === 1.1) {
					label.html(
						`
					<div class="bg-white rounded shadow-sm p-1">
					<table class="table table-sm table-bordered fs-8 text-dark">
						<tbody>
							<tr>
								<th colspan="8" class="text-center">Province : ${label.html()}</th>
							</tr>
							
							<tr>
								<th colspan="8" class="text-center">${title} : <span class="fs-7"><span class="badge bg-5">${
							data[code]
						}</span></span></th>
							</tr>
							
							<tr>
								<th></th>
								<th colspan="2" class="text-center">MS</th>
								<th colspan="2" class="text-center">Commune</th>
								<th colspan="2" class="text-center">ONG</th>
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
									vehiculeTable[code].ambulance.ms.moins5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									vehiculeTable[code].ambulance.ms.plus5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									vehiculeTable[code].ambulance.commune.moins5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									vehiculeTable[code].ambulance.commune.plus5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									vehiculeTable[code].ambulance.ong.moins5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									vehiculeTable[code].ambulance.ong.plus5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									vehiculeTable[code].ambulance.ms.moins5ans +
									vehiculeTable[code].ambulance.ms.plus5ans +
									vehiculeTable[code].ambulance.commune.moins5ans +
									vehiculeTable[code].ambulance.commune.plus5ans +
									vehiculeTable[code].ambulance.ong.moins5ans +
									vehiculeTable[code].ambulance.ong.plus5ans
								}</span></td>
							</tr>
							
							<tr>
								<th>Camion mobile</th>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									vehiculeTable[code].camionMobile.ms.moins5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									vehiculeTable[code].camionMobile.ms.plus5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									vehiculeTable[code].camionMobile.commune.moins5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									vehiculeTable[code].camionMobile.commune.plus5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									vehiculeTable[code].camionMobile.ong.moins5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									vehiculeTable[code].camionMobile.ong.plus5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									vehiculeTable[code].camionMobile.ms.moins5ans +
									vehiculeTable[code].camionMobile.ms.plus5ans +
									vehiculeTable[code].camionMobile.commune.moins5ans +
									vehiculeTable[code].camionMobile.commune.plus5ans +
									vehiculeTable[code].camionMobile.ong.moins5ans +
									vehiculeTable[code].camionMobile.ong.plus5ans
								}</span></td>
							</tr>
							
							<tr>
								<th>Unité Sanitaire Mobile (USM)</th>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									vehiculeTable[code].usm.ms.moins5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									vehiculeTable[code].usm.ms.plus5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									vehiculeTable[code].usm.commune.moins5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									vehiculeTable[code].usm.commune.plus5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									vehiculeTable[code].usm.ong.moins5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									vehiculeTable[code].usm.ong.plus5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									vehiculeTable[code].usm.ms.moins5ans +
									vehiculeTable[code].usm.ms.plus5ans +
									vehiculeTable[code].usm.commune.moins5ans +
									vehiculeTable[code].usm.commune.plus5ans +
									vehiculeTable[code].usm.ong.moins5ans +
									vehiculeTable[code].usm.ong.plus5ans
								}</span></td>
							</tr>
							
							<tr>
								<th>VTT</th>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									vehiculeTable[code].vtt.ms.moins5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									vehiculeTable[code].vtt.ms.plus5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									vehiculeTable[code].vtt.commune.moins5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									vehiculeTable[code].vtt.commune.plus5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									vehiculeTable[code].vtt.ong.moins5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									vehiculeTable[code].vtt.ong.plus5ans
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									vehiculeTable[code].vtt.ms.moins5ans +
									vehiculeTable[code].vtt.ms.plus5ans +
									vehiculeTable[code].vtt.commune.moins5ans +
									vehiculeTable[code].vtt.commune.plus5ans +
									vehiculeTable[code].vtt.ong.moins5ans +
									vehiculeTable[code].vtt.ong.plus5ans
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
		if (this.value === 'vehicule') {
			getData([dataVehicule]), (table = 1.1);
		} else if (this.value === 'kmsParcourir') {
			data = getData([dataBudgetKmsParcourir]);
			table = 1;
		} else if (this.value === 'besoinCarburant') {
			data = getData([dataBudgetBesoinCarburant]);
			table = 1;
		} else if (this.value === 'besoinUsm') {
			data = getData([dataBesoinUsm]);
			table = 1;
		}
		// apply changes
		map.series.regions[0].params.max = getMaxValue(data);
		map.series.regions[0].setValues({ codeProvince: data[codeProvince] });
		map.series.regions[0].legend.render();
	});
});
