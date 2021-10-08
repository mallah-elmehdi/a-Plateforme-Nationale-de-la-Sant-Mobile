$(document).ready(function () {
	// VARIABLES
	var wholeData = $('#dataRegion').data('carte'),
		title = $('#title').text().split(' - ')[1],
		codeRegion = parseInt($('#data').data('code')),
		// init data
		dataPiluleNa = wholeData.piluleNa.data,
		dataPiluleAa = wholeData.piluleAa.data,
		dataInjectableNa = wholeData.injectableNa.data,
		dataInjectableAa = wholeData.injectableAa.data,
		dataDiuNa = wholeData.diuNa.data,
		dataDiuAa = wholeData.diuAa.data,
		dataCondomNa = wholeData.condomNa.data,
		dataCondomAa = wholeData.condomAa.data,
		dataReferenceDiu = wholeData.referenceDiu.data,
		dataReferenceLt = wholeData.referenceLt.data,
		// other
		scale = ['#BDFFAD', '#187a00'],
		data = getData([dataPiluleAa, dataPiluleNa]),
		max = getMax(data),
		table = 2;
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
				if (table === 2) {
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
								<td>NA</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataPiluleNa[code]
								}</span></td>
							</tr>
							
							<tr>
								<td>AA</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataPiluleAa[code]
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
								<th colspan="2" class="text-center">${label.html()}</th>
							</tr>
							
							<tr>
								<th colspan="2" class="text-center">${title} : <span class="fs-7"><span class="badge bg-5">${
							data[code]
						}</span></span></th>
							</tr>
							
							<tr>
								<td>NA</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataInjectableNa[code]
								}</span></td>
							</tr>
							
							<tr>
								<td>AA</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataInjectableAa[code]
								}</span></td>
							</tr>
						</tbody>
					</table>
					</div>
					`
					);
				} else if (table === 2.2) {
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
								<td>NA</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataDiuNa[code]
								}</span></td>
							</tr>
							
							<tr>
								<td>AA</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataDiuAa[code]
								}</span></td>
							</tr>
						</tbody>
					</table>
					</div>
					`
					);
				} else if (table === 2.3) {
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
								<td>NA</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataCondomNa[code]
								}</span></td>
							</tr>
							
							<tr>
								<td>AA</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataCondomAa[code]
								}</span></td>
							</tr>
						</tbody>
					</table>
					</div>
					`
					);
				} else if (table === 2.4) {
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
								<td>NA</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataDiuNa[code]
								}</span></td>
							</tr>
							
							<tr>
								<td>AA</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataDiuAa[code]
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
		$('#title').text($('#title').text().split(' - ')[0] + ' - ' + title);
		// hide the dropdown
		$('.dropdown-toggle').dropdown('hide');
		// ----------------------------------------------------
		// change te data
		if (this.value === 'pilule') {
			data = getData([dataPiluleAa, dataPiluleNa]);
			table = 2;
		} else if (this.value === 'injectable') {
			data = getData([dataInjectableAa, dataInjectableNa]);
			table = 2.1;
		} else if (this.value === 'diu') {
			data = getData([dataDiuAa, dataDiuNa]);
			table = 2.2;
		} else if (this.value === 'condom') {
			data = getData([dataCondomAa, dataCondomNa]);
			table = 2.3;
		} else if (this.value === 'reference') {
			data = getData([dataReferenceDiu, dataReferenceLt]);
			table = 2.4;
		}

		// ----------------------------------------------------
		// apply changes
		map.series.regions[0].params.max = getMax(data);
		map.series.regions[0].setValues({ [codeRegion]: data[codeRegion] });
		map.series.regions[0].legend.render();
	});
});
