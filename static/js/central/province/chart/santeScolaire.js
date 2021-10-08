$(document).ready(function () {
	// VARIABLES
	var wholeData = $('#dataProvince').data('carte'),
		province = $('#province-chart').data('province'),
		type = '',
		// init data
		dataVisiteEtablissementVisite =
			wholeData.visiteEtablissementVisite.data,
		dataVisiteEleveVue = wholeData.visiteEleveVue.data,
		dataEleveExamineVmsCible = wholeData.eleveExamineVmsCible.data,
		dataEleveExamineVmsRealisation =
			wholeData.eleveExamineVmsRealisation.data,
		dataLutteContreDeficienceVisuelleEchelleMetriqueCible =
			wholeData.lutteContreDeficienceVisuelleEchelleMetriqueCible.data,
		dataLutteContreDeficienceVisuelleEchelleMetriqueRealisation =
			wholeData.lutteContreDeficienceVisuelleEchelleMetriqueRealisation
				.data,
		dataLutteContreDeficienceVisuelleRefractionAutomatiqueCible =
			wholeData.lutteContreDeficienceVisuelleRefractionAutomatiqueCible
				.data,
		dataLutteContreDeficienceVisuelleRefractionAutomatiqueRealisation =
			wholeData
				.lutteContreDeficienceVisuelleRefractionAutomatiqueRealisation
				.data,
		data = {
			data: [],
			categories: [],
		};
	// DATA LOADING
	for (let i = 0; i < province.length; i++) {
		const element = province[i];
		data.data.push(
			getData([dataVisiteEtablissementVisite[element.codeProvince]])
		);
		data.categories.push(element.province);
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
		data.data = [];
		data.categories = [];
		// change te data
		if (this.value === 'visiteEtablissementVisite') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
				data.data.push(
					getData([dataVisiteEtablissementVisite[element.codeProvince]])
				);
				data.categories.push(element.province);
			}
			type = '';
		} else if (this.value === 'visiteEleveVue') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
				data.data.push(
					getData([dataVisiteEleveVue[element.codeProvince]])
				);
				data.categories.push(element.province);
			}
			type = '';
		} else if (this.value === 'eleveExamineVms') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
				data.data.push(
					getData([
						dataEleveExamineVmsCible[element.codeProvince],
						dataEleveExamineVmsRealisation[element.codeProvince],
					])
				);
				data.categories.push(element.province);
			}
			type = '';
		} else if (this.value === 'lutteContreDeficienceVisuelle') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
				data.data.push(
					getData([
						dataLutteContreDeficienceVisuelleEchelleMetriqueCible[
							element.codeProvince
						],
						dataLutteContreDeficienceVisuelleEchelleMetriqueRealisation[
							element.codeProvince
						],
						dataLutteContreDeficienceVisuelleRefractionAutomatiqueCible[
							element.codeProvince
						],
						dataLutteContreDeficienceVisuelleRefractionAutomatiqueRealisation[
							element.codeProvince
						],
					])
				);
				data.categories.push(element.province);
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
