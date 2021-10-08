$(document).ready(function () {
	// VARIABLES
	var wholeData = $('#dataRegion').data('carte'),
		title = $('#title').text().split(' - ')[1] || $('#dataRegion').data('title'),
		type = $('#dataRegion').data('type'),
		keyOne = Object.keys(wholeData)[0],
		data = wholeData[keyOne].data,
		max = type === '%' ? 100 : undefined,
		scale =
			type === '%'
				? ['#FE8989', '#FCFE89', '#6ED369']
				: ['#BDFFAD', '#187a00'];
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
			label.html(
				`<ul class="list-group shadow">
					<li class="list-group-item fs-7">${label.html()}</li>
					<li class="list-group-item fs-7">${title} : <span class="badge bg-5">${
					data[code]
				}${type}</li>
				</ul>`
			);
		},
		onRegionClick: function (e, code) {
			
		}
	});
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
		title =
			$(this).next('span').text() ||
			($(this).parents('li').children()[0].innerText === 'Echelle Métrique' ||
			$(this).parents('li').children()[0].innerText === 'Réfraction automatique'
				? 'Lutte contre les déficiences visuelles - ' +
				  $(this).parents('li').children()[0].innerText
				: $(this).parents('li').children()[0].innerText) +
				' ' +
				$(this).next('label').text();
		// change the title in the tooltip
		$('#title').text($('#title').text().split(' - ')[0] + ' - ' + title);
		// hide the dropdown
		$('.dropdown-toggle').dropdown('hide');
		// change te data
		data = wholeData[this.value].data;
		// apply changes
		map.series.regions[0].params.max = getMax(data);
		map.series.regions[0].setValues(data);
		map.series.regions[0].legend.render();
	});
});
