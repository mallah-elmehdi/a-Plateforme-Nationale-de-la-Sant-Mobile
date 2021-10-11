$(document).ready(function () {
	// VARIABLES
	var wholeData = $('#dataProvince').data('carte'),
		province = $('#province-chart').data('province'),
		provinceList = $('#data').data('list'),
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
	for (let i = 0; i < province.length; i++) {
		const element = province[i];
		if (provinceList.includes(element.codeProvince)) {
		data.data.push(getData([dataPopulationCible[element.codeProvince]]));
		data.categories.push(element.province);
		}
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
			height: 40 * provinceList.length,
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
		data.data = [];
		data.categories = [];
		// change te data
		if (this.value === 'populationCible') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
		if (provinceList.includes(element.codeProvince)) {
				data.data.push(
					getData([dataPopulationCible[element.codeProvince]])
				);
				data.categories.push(element.province);
		}
			}
			type = '';
		} else if (this.value === 'enfant') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
		if (provinceList.includes(element.codeProvince)) {
				data.data.push(
					getData([
						dataEnfantMoins1ans[element.codeProvince],
						dataEnfantMoins5ans[element.codeProvince],
						dataNaissancesAttendues[element.codeProvince],
					])
				);
				data.categories.push(element.province);
		}
			}
			type = '';
		} else if (this.value === 'femme') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
		if (provinceList.includes(element.codeProvince)) {
				data.data.push(
					getData([
						dataFar[element.codeProvince],
						dataFmar[element.codeProvince],
						dataFemmeEnceinte[element.codeProvince],
					])
				);
				data.categories.push(element.province);
		}
			}
			type = '';
		} else if (this.value === 'distanceMoyenneRouteProche') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
		if (provinceList.includes(element.codeProvince)) {
				data.data.push(
					getData([
						dataDistanceMoyenneRouteProche[element.codeProvince],
					])
				);
				data.categories.push(element.province);
		}
			}
			type = 'Km';
		} else if (this.value === 'indiceSynthetiqueFecondite') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
		if (provinceList.includes(element.codeProvince)) {
				data.data.push(
					getData([
						dataIndiceSynthetiqueFecondite[element.codeProvince],
					])
				);
				data.categories.push(element.province);
		}
			}
			type = '';
		} else if (this.value === 'personneAge') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
		if (provinceList.includes(element.codeProvince)) {
				data.data.push(getData([dataPersonneAge[element.codeProvince]]));
				data.categories.push(element.province);
		}
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
