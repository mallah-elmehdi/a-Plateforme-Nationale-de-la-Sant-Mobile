$(document).ready(function () {
	// VARIABLES
	var wholeData = $('#dataRegion').data('carte'),
		title = $('#title').text(),
		// init data
		dataFemmeExamineCancerSein = wholeData.femmeExamineCancerSein.data,
		dataFemmeExamineCancerCol = wholeData.femmeExamineCancerCol.data,
		dataFemmeRefereCancerSein = wholeData.femmeRefereCancerSein.data,
		dataFemmeRefereCancerCol = wholeData.femmeRefereCancerCol.data,
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
		data = getData([dataFemmeExamineCancerSein, dataFemmeExamineCancerCol]),
		table = 2;
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
			if (table === 2) {
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
							<td>Détection précoce du cancer du sein</td>
							<td class="fs-7 text-center"><span class="badge bg-5">${
								dataFemmeExamineCancerSein[code]
							}</span></td>
						</tr>
						
						<tr>
							<td>Détection précoce du cancer du col</td>
							<td class="fs-7 text-center"><span class="badge bg-5">${
								dataFemmeExamineCancerCol[code]
							}</span></td>
						</tr>
					</tbody>
				</table>
				</div>
				`
				);
			} else if (table === 2.1) {
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
							<td>Détection précoce du cancer du sein</td>
							<td class="fs-7 text-center"><span class="badge bg-5">${
								dataFemmeRefereCancerSein[code]
							}</span></td>
						</tr>
						
						<tr>
							<td>Détection précoce du cancer du col</td>
							<td class="fs-7 text-center"><span class="badge bg-5">${
								dataFemmeRefereCancerCol[code]
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
		if (this.value === 'femmeExamine') {
			data = getData([
				dataFemmeExamineCancerSein,
				dataFemmeExamineCancerCol,
			]);
			table = 2;
		} else if (this.value === 'femmeRefere') {
			data = getData([
				dataFemmeRefereCancerSein,
				dataFemmeRefereCancerCol,
			]);
			table = 2.1;
		}
		// ----------------------------------------------------
		// apply changes
		map.series.regions[0].params.max = getMax(data);
		map.series.regions[0].setValues(data);
		map.series.regions[0].legend.render();
	});
});
