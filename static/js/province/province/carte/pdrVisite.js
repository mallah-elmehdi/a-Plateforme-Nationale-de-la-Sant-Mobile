$(document).ready(function () {
	// VARIABLES
	var data = $('#dataProvince').data('carte').pdrVisite.data,
		title = 'Taux de couverture des PDR',
		codeProvince = $('#data').data('code'),
		// other
		max = 100,
		scale = ['#FE8989', '#FCFE89', '#6ED369'];
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
				label.html(
					`
				<div class="bg-white shadow-sm p-1 rounded">
					<table class="table table-sm table-bordered fs-8 text-center text-dark">
						<tbody>
							<tr>
								<th colspan="3">${label.html()}</th>
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
