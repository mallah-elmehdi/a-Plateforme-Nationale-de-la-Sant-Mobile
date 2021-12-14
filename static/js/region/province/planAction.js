$(document).ready(function () {
	// -------------------------------------------------- FUNCTIONS
	// get data
	function initDashboard() {
		// get data
		var planAction = $('#dataProvince').data('planaction');
		var province = $('#planActionProvince').data('province');
		map(planAction);
		// creat the chart
		var data = {
			data: [],
			categories: [],
		};
		for (let i = 0; i < province.length; i++) {
			const element = province[i];
			data.data.push(planAction[element.codeProvince])
			data.categories.push(element.province)
		}
		planActionChart(data);
		$('.thisProvince').addClass('d-none')
	}
	// MAP
	function map(data) {
		$('#province-map').vectorMap({
			map: 'province',
			series: {
				regions: [
					{
						values: data,
						min: 0,
						max: 100,
						scale: [
			'#FF4646',
			'#FFF891',
			'#fcf75a',
			'#a9a403',
			'#7DFE69',
			'#169a01',
			'#0a4600',
		];,
						normalizeFunction: 'polynomial',
						legend: {
							vertical: true,
						},
					},
				],
			},
			regionStyle: {
				initial: {
					stroke: '#ffffff',
					'stroke-width': 1,
				},
				hover: {
					stroke: '#ffffff',
					'stroke-width': 1,
					fill: '#6294ed',
				},
			},
			backgroundColor: '#a5bfdd',
			regionLabelStyle: {
				initial: {
					fill: '#000000',
				},
			},
			labels: {
				regions: {
					render: function (code) {
						return data[code] + '%';
					},
					offsets: function (code) {
						return {}[code];
					},
				},
			},
		});
	}
	// PDRVISITE CHART
	function planActionChart(data) {
		var options = {
			series: [
				{
					data: data.data,
				},
			],
			chart: {
			toolbar: {
				show: false,
			},
			toolbar: {
				show: false,
			},
			toolbar: {
				show: false,
			},
				type: 'bar',
				height: 1500,
			},
			plotOptions: {
				bar: {
					borderRadius: 0,
					horizontal: true,
					barHeight: '70%',
				},
			},
			dataLabels: {
				enabled: true,
				textAnchor: 'start',
				style: {
					colors: ['#000'],
				},
				formatter: function (val, opt) {
					return val + '%';
				},
				offsetX: 0,
			},
			xaxis: {
				categories: data.categories,
			},
			yaxis: {
				max: 100,
			},
			colors: ['#6294ed'],
			tooltip: {
				theme: 'dark',
				style: {
					fontSize: '15px',
					fontFamily: undefined,
				},
				marker: {
					show: false,
				},
				y: {
					formatter: function (
						value,
						{ series, seriesIndex, dataPointIndex, w }
					) {
						return value + '%';
					},

					title: {
						formatter: function () {
							return '';
						},
					},
				},
			},
		};
		var chart = new ApexCharts(
			document.querySelector('#planActionProvince'),
			options
		);
		chart.render();
	}
	// -------------------------------------------------- LOGIC
	initDashboard();
});
