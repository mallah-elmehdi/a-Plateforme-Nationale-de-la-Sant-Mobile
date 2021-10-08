$(document).ready(function () {
	// VARIABLES
	var wholeData = $('#dataProvince').data('carte'),
		province = $('#province-chart').data('province'),
		type = $('#dataProvince').data('type'),
		data = {
			data: [],
			categories: [],
		},
	keyOne = Object.keys(wholeData)[0], carte = wholeData[keyOne].data;
	// DATA LOADING
	for (let i = 0; i < province.length; i++) {
		const element = province[i];
		data.data.push(carte[element.codeProvince]);
		data.categories.push(element.province);
	}
	// CHART OPTION
	var options = {
		series: [
			{
				data: data.data,
			},
		],
		chart: {
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
				return val + type;
			},
			offsetX: 0,
		},
		xaxis: {
			categories: data.categories,
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
					return value + type;
				},

				title: {
					formatter: function () {
						return '';
					},
				},
			},
		},
	};
	// RENDER CHART
	var chart = new ApexCharts(
		document.querySelector('#province-chart'),
		options
	);
	chart.render();
	// EVENT LISTNER
	$('input[type=radio][name=data]').change(function () {
		carte = wholeData[this.value].data
		data.data = []
		data.categories = []
		for (let i = 0; i < province.length; i++) {
			const element = province[i];
			data.data.push(carte[element.codeProvince]);
			data.categories.push(element.province);
		}
		chart.updateSeries([
			{
				data: data.data,
			},
		]);
	});
	// HIDE PROVINCE
	$('.thisProvince').addClass('d-none');
});
