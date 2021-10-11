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
				ObjOut[codeProvince] += element.value
			}
		}
		return ObjOut
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
		// fixeMedecin
		dataFixeMedecin = sumDataProvince(wholeData.fixeMedecin.data, codeProvince),
		// fixeInfirmier
		dataFixeInfirmier = sumDataProvince(wholeData.fixeInfirmier.data, codeProvince),
		// fixeSageFemme
		dataFixeSageFemme = sumDataProvince(wholeData.fixeSageFemme.data, codeProvince),
		// fixeTechnicien
		dataFixeTechnicien = sumDataProvince(wholeData.fixeTechnicien.data, codeProvince),
		// fixeChauffeur
		dataFixeChauffeur = sumDataProvince(wholeData.fixeChauffeur.data, codeProvince),
		// fixeAppuie
		dataFixeAppuie = sumDataProvince(wholeData.fixeAppuie.data, codeProvince),
		// mobileMedecin
		dataMobileMedecin = sumDataProvince(wholeData.mobileMedecin.data, codeProvince),
		// mobileInfirmier
		dataMobileInfirmier = sumDataProvince(wholeData.mobileInfirmier.data, codeProvince),
		// mobileSageFemme
		dataMobileSageFemme = sumDataProvince(wholeData.mobileSageFemme.data, codeProvince),
		// mobileTechnicien
		dataMobileTechnicien = sumDataProvince(wholeData.mobileTechnicien.data, codeProvince),
		// mobileChauffeur
		dataMobileChauffeur = sumDataProvince(wholeData.mobileChauffeur.data, codeProvince),
		// mobileAppuie
		dataMobileAppuie = sumDataProvince(wholeData.mobileAppuie.data, codeProvince),
		// mobileEmOperationnelle
		dataMobileEmOperationnelle = sumDataProvince(wholeData.mobileEmOperationnelle.data, codeProvince),
		// other
		scale = ['#FFF891', '#fcf75a', '#a9a403', '#7DFE69', '#169a01', "#0a4600"],
		data = getData([dataFixeMedecin,
			dataFixeInfirmier,
			dataFixeSageFemme,
			dataFixeTechnicien,
			dataFixeChauffeur,
			dataFixeAppuie,]),
		max = getMaxValue(data),
		table = 5;
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
				if (table === 5) {
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
							
							<tr>
								<td>Médecin</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataFixeMedecin[code]
								}</span></td>
							</tr>
							
							<tr>
								<td>Infirmière(er)</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataFixeInfirmier[code]
								}</span></td>
							</tr>
							
							<tr>
								<td>Sage Femme</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataFixeSageFemme[code]
								}</span></td>
							</tr>
							
							<tr>
								<td>Technicien</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataFixeTechnicien[code]
								}</span></td>
							</tr>
							
							<tr>
								<td>Chauffeur</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataFixeChauffeur[code]
								}</span></td>
							</tr>
							
							<tr>
								<td>Ressources humaines d'appuie</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataFixeAppuie[code]
								}</span></td>
							</tr>
						</tbody>
					</table>
					</div>
					`
					);
				} else if (table === 5.1) {
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
								
								<tr>
									<td>Médecin</td>
									<td class="fs-7 text-center"><span class="badge bg-5">${
										dataMobileMedecin[code]
									}</span></td>
								</tr>
								
								<tr>
									<td>Infirmière(er)</td>
									<td class="fs-7 text-center"><span class="badge bg-5">${
										dataMobileInfirmier[code]
									}</span></td>
								</tr>
								
								<tr>
									<td>Sage Femme</td>
									<td class="fs-7 text-center"><span class="badge bg-5">${
										dataMobileSageFemme[code]
									}</span></td>
								</tr>
								
								<tr>
									<td>Technicien</td>
									<td class="fs-7 text-center"><span class="badge bg-5">${
										dataMobileTechnicien[code]
									}</span></td>
								</tr>
								
								<tr>
									<td>Chauffeur</td>
									<td class="fs-7 text-center"><span class="badge bg-5">${
										dataMobileChauffeur[code]
									}</span></td>
								</tr>
								
								<tr>
									<td>Ressources humaines d'appuie</td>
									<td class="fs-7 text-center"><span class="badge bg-5">${
										dataMobileAppuie[code]
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
		if (this.value === 'fixe') {
			data = getData([dataFixeMedecin,
				dataFixeInfirmier,
				dataFixeSageFemme,
				dataFixeTechnicien,
				dataFixeChauffeur,
				dataFixeAppuie,]);
			table = 5;
		} else if (this.value === 'mobile') {

				data = getData([dataMobileMedecin,
					dataMobileInfirmier,
					dataMobileSageFemme,
					dataMobileTechnicien,
					dataMobileChauffeur,
					dataMobileAppuie,]);
			table = 5.1;
		} else if (this.value === 'emOperationnelle') {
			data = getData([dataMobileEmOperationnelle]);
			table = 1;
		}
		// apply changes
		map.series.regions[0].params.max = getMaxValue(data);
		map.series.regions[0].setValues({ codeProvince: data[codeProvince] });
		map.series.regions[0].legend.render();
	});
});
