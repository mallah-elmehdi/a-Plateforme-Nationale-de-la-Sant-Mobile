$(document).ready(function () {
	// VARIABLES
	var wholeData = $('#data').data('provincedata'),
		csrList = $('#data').data('csrlist'),
		// init data
		data = {
			data: [],
			categories: [],
		};
	// DATA LOADING
	for (let i = 0; i < csrList.length; i++) {
		const csr = csrList[i].csr;
		data.categories.push(csr);
		if (wholeData.tauxRemplissageByCsr[csr])
			data.data.push(wholeData.tauxRemplissageByCsr[csr].taux);
		else data.data.push(0);
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
			height: 30 * data.categories.length,
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
			min: 0,
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
					return (
						value +
						'%' +
						(wholeData.tauxRemplissageByCsr[data.categories[dataPointIndex]].submit
							? ' (soumis)'
							: ' (non soumis)')
					);
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
	var chart = new ApexCharts(document.querySelector('#csr-chart'), options);
	chart.render();
});
