$(document).ready(function () {
	// VARIABLES
	var wholeData = $('#dataProvince').data('carte'),
		province = $('#province-chart').data('province'),
		type = '',
		// init data
		dataFemmePriseCharge = wholeData.femmePriseCharge.data,
		dataCpnNouvelleInscriteT1 = wholeData.cpnNouvelleInscriteT1.data,
		dataCpnNouvelleInscriteT2 = wholeData.cpnNouvelleInscriteT2.data,
		dataCpnNouvelleInscriteT3 = wholeData.cpnNouvelleInscriteT3.data,
		dataCpnAncienneInscriteT1 = wholeData.cpnAncienneInscriteT1.data,
		dataCpnAncienneInscriteT2 = wholeData.cpnAncienneInscriteT2.data,
		dataCpnAncienneInscriteT3 = wholeData.cpnAncienneInscriteT3.data,
		dataAutreConsultation = wholeData.autreConsultation.data,
		dataFemmeExaminePostNatal = wholeData.femmeExaminePostNatal.data,
		dataGahrDepiste = wholeData.garDepiste.data,
		dataVat = wholeData.vat.data,
		dataReference = wholeData.reference.data,
		data = {
			data: [],
			categories: [],
		};
	// DATA LOADING
	for (let i = 0; i < province.length; i++) {
		const element = province[i];
		data.data.push(getData([dataFemmePriseCharge[element.codeProvince]]));
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
		if (this.value === 'femmePriseCharge') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
				data.data.push(
					getData([dataFemmePriseCharge[element.codeProvince]])
				);
				data.categories.push(element.province);
			}
			type = '';
		} else if (this.value === 'cpn') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
				data.data.push(
					getData([
						dataCpnNouvelleInscriteT1[element.codeProvince],
						dataCpnNouvelleInscriteT2[element.codeProvince],
						dataCpnNouvelleInscriteT3[element.codeProvince],
						dataCpnAncienneInscriteT1[element.codeProvince],
						dataCpnAncienneInscriteT2[element.codeProvince],
						dataCpnAncienneInscriteT3[element.codeProvince],
					])
				);
				data.categories.push(element.province);
			}
			type = '';
		} else if (this.value === 'femmeExaminePostNatal') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
				data.data.push(
					getData([dataFemmeExaminePostNatal[element.codeProvince]])
				);
				data.categories.push(element.province);
			}
			type = '';
		} else if (this.value === 'garDepiste') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
				data.data.push(getData([dataGahrDepiste[element.codeProvince]]));
				data.categories.push(element.province);
			}
			type = '';
		} else if (this.value === 'autreConsultation') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
				data.data.push(getData([dataAutreConsultation[element.codeProvince]]));
				data.categories.push(element.province);
			}
			type = '';
		} else if (this.value === 'vat') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
				data.data.push(getData([dataVat[element.codeProvince]]));
				data.categories.push(element.province);
			}
			type = '';
		} else if (this.value === 'reference') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
				data.data.push(getData([dataReference[element.codeProvince]]));
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
