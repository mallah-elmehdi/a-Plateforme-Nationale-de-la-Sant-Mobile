$(document).ready(function () {
	// VARIABLES
	var wholeData = $('#dataRegion').data('carte'),
				title = $('#title').text(),
		codeRegion = parseInt($('#data').data('code'))
		// init data
		dataEtablissementVisite =
			wholeData.etablissementVisite.data,
		dataEleveExamineVmsCible = wholeData.eleveExamineVmsCible.data,
		dataEleveExamineVmsRealisation =
			wholeData.eleveExamineVmsRealisation.data,
		dataLutteContreDeficienceVisuelleEchelleMetriqueCible =
			wholeData.lutteContreDeficienceVisuelleEchelleMetriqueCible.data,
		dataLutteContreDeficienceVisuelleEchelleMetriqueRealisation =
			wholeData.lutteContreDeficienceVisuelleEchelleMetriqueRealisation
				.data,
		dataLutteContreDeficienceVisuelleRefractionAutomatiqueCible =
			wholeData.lutteContreDeficienceVisuelleRefractionAutomatiqueCible
				.data,
		dataLutteContreDeficienceVisuelleRefractionAutomatiqueRealisation =
			wholeData
				.lutteContreDeficienceVisuelleRefractionAutomatiqueRealisation
				.data,
		// other
				scale = [
			'#FFF891',
			'#fcf75a',
			'#a9a403',
			'#7DFE69',
			'#169a01',
			'#0a4600',
		],
		data = getData([dataEtablissementVisite]),
		max = getMax(data),
		table = 1;
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
			if (table === 1) {
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
						</tbody>
					</table>
					</div>
					`
				);
			} else if (table === 2) {
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
								<td>Cible</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataEleveExamineVmsCible[code]
								}</span></td>
							</tr>
							
							<tr>
								<td>Réalisation</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataEleveExamineVmsRealisation[code]
								}</span></td>
							</tr>
						</tbody>
					</table>
					</div>
					`
				);
			} else if (table === 4) {
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
								<th class="text-center">Echelle Métrique</th>
								<th class="text-center">Réfraction automatique</th>
							</tr>
							<tr>
								<td>Cible</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataLutteContreDeficienceVisuelleEchelleMetriqueCible[
										code
									]
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataLutteContreDeficienceVisuelleRefractionAutomatiqueCible[
										code
									]
								}</span></td>
							</tr>
							
							<tr>
								<td>Réalisation</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataLutteContreDeficienceVisuelleEchelleMetriqueRealisation[
										code
									]
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataLutteContreDeficienceVisuelleRefractionAutomatiqueRealisation[
										code
									]
								}</span></td>
							</tr>
							<tr>
								<td>Total</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataLutteContreDeficienceVisuelleEchelleMetriqueRealisation[
										code
									] +
									dataLutteContreDeficienceVisuelleEchelleMetriqueCible[
										code
									]
								}</span></td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataLutteContreDeficienceVisuelleRefractionAutomatiqueCible[
										code
									] +
									dataLutteContreDeficienceVisuelleRefractionAutomatiqueRealisation[
										code
									]
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
		return max + 1
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
		if (this.value === 'etablissementVisite') {
			data = getData([dataEtablissementVisite]);
			table = 1;
		}
		else if (this.value === 'eleveExamineVms') {
			data = getData([
				dataEleveExamineVmsCible,
				dataEleveExamineVmsRealisation,
			]);
			table = 2;
		} else if (this.value === 'lutteContreDeficienceVisuelle') {
			data = getData([
				dataLutteContreDeficienceVisuelleEchelleMetriqueCible,
				dataLutteContreDeficienceVisuelleEchelleMetriqueRealisation,
				dataLutteContreDeficienceVisuelleRefractionAutomatiqueCible,
				dataLutteContreDeficienceVisuelleRefractionAutomatiqueRealisation,
			]);
			table = 4;
		}

		// ----------------------------------------------------
		// apply changes
		map.series.regions[0].params.max = getMax(data);
		map.series.regions[0].setValues({ [codeRegion]: data[codeRegion] });
		map.series.regions[0].legend.render();
	});
});
