$(document).ready(function () {
	// VARIABLES
	var wholeData = $('#dataRegion').data('carte'),
		title = $('#title').text(),
		codeRegion = parseInt($('#data').data('code')),
		// init data
		dataFixeMedecin = wholeData.fixeMedecin.data,
		// fixeInfirmier
		dataFixeInfirmier = wholeData.fixeInfirmier.data,
		// fixeSageFemme
		dataFixeSageFemme = wholeData.fixeSageFemme.data,
		// fixeTechnicien
		dataFixeTechnicien = wholeData.fixeTechnicien.data,
		// fixeChauffeur
		dataFixeChauffeur = wholeData.fixeChauffeur.data,
		// fixeAppuie
		dataFixeAppuie = wholeData.fixeAppuie.data,
		// mobileMedecin
		dataMobileMedecin = wholeData.mobileMedecin.data,
		// mobileInfirmier
		dataMobileInfirmier = wholeData.mobileInfirmier.data,
		// mobileSageFemme
		dataMobileSageFemme = wholeData.mobileSageFemme.data,
		// mobileTechnicien
		dataMobileTechnicien = wholeData.mobileTechnicien.data,
		// mobileChauffeur
		dataMobileChauffeur = wholeData.mobileChauffeur.data,
		// mobileAppuie
		dataMobileAppuie = wholeData.mobileAppuie.data,
		// mobileEmOperationnelle
		dataMobileEmOperationnelle = wholeData.mobileEmOperationnelle.data,
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
			dataFixeMedecin,
			dataFixeInfirmier,
			dataFixeSageFemme,
			dataFixeTechnicien,
			dataFixeChauffeur,
			dataFixeAppuie,
		]),
		max = getMax(data),
		table = 5;
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
		if (this.value === 'fixe') {
			data = getData([
				dataFixeMedecin,
				dataFixeInfirmier,
				dataFixeSageFemme,
				dataFixeTechnicien,
				dataFixeChauffeur,
				dataFixeAppuie,
			]);
			table = 5;
		} else if (this.value === 'mobile') {
			data = getData([
				dataMobileMedecin,
				dataMobileInfirmier,
				dataMobileSageFemme,
				dataMobileTechnicien,
				dataMobileChauffeur,
				dataMobileAppuie,
			]);
			table = 5.1;
		} else if (this.value === 'emOperationnelle') {
			data = getData([dataMobileEmOperationnelle]);
			table = 1;
		}
		// apply changes
		map.series.regions[0].params.max = getMax(data);
		map.series.regions[0].setValues({ codeRegion: data[codeRegion] });
		map.series.regions[0].legend.render();
	});
});
