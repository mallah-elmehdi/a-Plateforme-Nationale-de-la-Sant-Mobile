$(document).ready(function () {
	// VARIABLES
	var wholeData = $('#dataRegion').data('carte'),
		title = $('#title').text(),
		// init data
		dataEnfantPrisesCharge = wholeData.enfantPrisesCharge.data,
		dataVaccinationPentavalent = wholeData.vaccinationDtc3Hib3.data,
		dataVaccinationRr = wholeData.vaccinationVar.data,
		dataVitamineA = wholeData.vitamineA.data,
		dataVitamineD = wholeData.vitamineD.data,
		dataPesee = wholeData.pesee.data,
		dataDiarrhe = wholeData.diarrhe.data,
		dataIra = wholeData.ira.data,
		dataReference = wholeData.reference.data,
		// other
		max = undefined,
		scale = ['#BDFFAD', '#187a00'],
		data = getData([dataEnfantPrisesCharge]),
		table = 1;
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
			if (table === 1) {
				label.html(
					`
					<div class="bg-white shadow-sm p-1 rounded">
					<table class="table table-sm table-bordered fs-8 text-dark">
						<tbody>
							<tr>
								<th colspan="2" class="text-center">${label.html()}</th>
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
								<th colspan="2" class="text-center">${label.html()}</th>
							</tr>
							
							<tr>
								<th colspan="2" class="text-center">${title} : <span class="fs-7"><span class="badge bg-5">${
						data[code]
					}</span></span></th>
							</tr>
							
							<tr>
								<td>DTC3-Hib3-HB3 (pentavalent)</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataVaccinationPentavalent[code]
								}</span></td>
							</tr>
							
							<tr>
								<td>VAR</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataVaccinationRr[code]
								}</span></td>
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
		if (this.value === 'enfantPrisesCharge') {
			data = getData([dataEnfantPrisesCharge]);
			table = 1;
		} else if (this.value === 'vaccination') {
			data = getData([dataVaccinationPentavalent, dataVaccinationRr]);
			table = 2;
		} else if (this.value === 'vitamineA') {
			data = getData([dataVitamineA]);
			table = 1;
		} else if (this.value === 'vitamineD') {
			data = getData([dataVitamineD]);
			table = 1;
		} else if (this.value === 'pesee') {
			data = getData([dataPesee]);
			table = 1;
		} else if (this.value === 'diarrhe') {
			data = getData([dataDiarrhe]);
			table = 1;
		}
		else if (this.value === 'ira') {
			data = getData([dataIra]);
			table = 1;
		}
		else if (this.value === 'reference') {
			data = getData([dataReference]);
			table = 1;
		}

		// ----------------------------------------------------
		// apply changes
		map.series.regions[0].params.max = getMax(data);
		map.series.regions[0].setValues(data);
		map.series.regions[0].legend.render();
	});
});
