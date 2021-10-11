$(document).ready(function () {
	// VARIABLES
	var data = $('#dataProvince').data('carte').pdrVisite.data,
		title = $('#title').text(),
		provinceList = $('#data').data('list'),
		// other
		max = 100,
		scale = [
			'#FF4646',
			'#FFF891',
			'#fcf75a',
			'#a9a403',
			'#7DFE69',
			'#169a01',
			'#0a4600',
		];
	function getValue(data, provinceList) {
		var out = {};
		for (let i = 0; i < provinceList.length; i++) {
			const element = provinceList[i];
			out[element] = data[element];
		}
		return out;
	}
	// MAP
	$('#province-map').vectorMap({
		map: 'province',
		series: {
			regions: [
				{
					values:  getValue(data, provinceList),
					scale,
					normalizeFunction: 'polynomial',
					max,
min:0,
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
			if (provinceList.includes(parseInt(code))) {
				label.html(
					`
				<div class="bg-white shadow-sm p-1 rounded">
					<table class="table table-sm table-bordered fs-8 text-center text-dark">
						<tbody>
							<tr>
								<th colspan="3">Province : ${label.html()}</th>
							</tr>
							<tr>
								<th colspan="3">${title} : <span class="fs-7"> <span class="badge bg-5">${
						data[code]
					} %</span></span></th>
							</tr>
						</tbody>
					</table>
					</div>
					`
				);
			}
		},
	});
	$('.thisProvince').addClass('d-none');
});
