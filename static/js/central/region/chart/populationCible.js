$(document).ready(function () {
	// VARIABLES
	var wholeData = $('#dataRegion').data('carte'),
		region = $('#region-chart').data('region'),
		type = '',
		// init data
		dataPopulationCible = wholeData.populationCible.data,
		dataPopulationHabitantMoins3km =
			wholeData.populationHabitantMoins3km.data,
		dataPopulationHabitantEntre3km6km =
			wholeData.populationHabitantEntre3km6km.data,
		dataPopulationHabitantEntre6km10km =
			wholeData.populationHabitantEntre6km10km.data,
		dataPopulationHabitantPlus10km =
			wholeData.populationHabitantPlus10km.data,
		dataEnfantMoins1ans = wholeData.enfantMoins1ans.data,
		dataEnfantMoins5ans = wholeData.enfantMoins5ans.data,
		dataNaissancesAttendues = wholeData.naissancesAttendues.data,
		dataFar = wholeData.far.data,
		dataFmar = wholeData.fmar.data,
		dataFemmeEnceinte = wholeData.femmeEnceinte.data,
		dataDistanceMoyenneRouteProche =
			wholeData.distanceMoyenneRouteProche.data,
		
		
		data = {
			data: [],
			categories: [],
		};
	// DATA LOADING
	for (let i = 0; i < region.length; i++) {
		const element = region[i];
		data.data.push(getData([dataPopulationCible[element.codeRegion]]));
		data.categories.push(element.region);
	}
	// SUM DATA
	// GET DATA
	function getData(dataset) {
		var data = 0;
		for (let i = 0; i < dataset.length; i++) {
			var dataElement = dataset[i];
			data += dataElement;
		}
		return data;
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
			height: 350,
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
		document.querySelector('#region-chart'),
		options
	);
	chart.render();
	// EVENT LISTNER
	$('input[type=radio][name=data]').change(function () {
		data.data = [];
		data.categories = [];
		// change te data
		if (this.value === 'populationCible') {
			for (let i = 0; i < region.length; i++) {
				var element = region[i];
				data.data.push(
					getData([dataPopulationCible[element.codeRegion]])
				);
				data.categories.push(element.region);
			}
			type = '';
		} else if (this.value === 'enfant') {
			for (let i = 0; i < region.length; i++) {
				var element = region[i];
				data.data.push(
					getData([
						dataEnfantMoins1ans[element.codeRegion],
						dataEnfantMoins5ans[element.codeRegion],
						dataNaissancesAttendues[element.codeRegion],
					])
				);
				data.categories.push(element.region);
			}
			type = '';
		} else if (this.value === 'femme') {
			for (let i = 0; i < region.length; i++) {
				var element = region[i];
				data.data.push(
					getData([
						dataFar[element.codeRegion],
						dataFmar[element.codeRegion],
						dataFemmeEnceinte[element.codeRegion],
					])
				);
				data.categories.push(element.region);
			}
			type = '';
		} else if (this.value === 'distanceMoyenneRouteProche') {
			for (let i = 0; i < region.length; i++) {
				var element = region[i];
				data.data.push(
					getData([
						dataDistanceMoyenneRouteProche[element.codeRegion],
					])
				);
				data.categories.push(element.region);
			}
			type = 'Km';
		} else if (this.value === 'indiceSynthetiqueFecondite') {
			for (let i = 0; i < region.length; i++) {
				var element = region[i];
				data.data.push(
					getData([
						dataIndiceSynthetiqueFecondite[element.codeRegion],
					])
				);
				data.categories.push(element.region);
			}
			type = '';
		} else if (this.value === 'personneAge') {
			for (let i = 0; i < region.length; i++) {
				var element = region[i];
				data.data.push(getData([dataPersonneAge[element.codeRegion]]));
				data.categories.push(element.region);
			}
			type = '';
		}
		chart.updateSeries([
			{
				data: data.data,
			},
		]);
	});
});
