$(document).ready(function () {
	// VARIABLES
	var wholeData = $('#dataRegion').data('carte'),
		region = $('#region-chart').data('region'),
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
	for (let i = 0; i < region.length; i++) {
		const element = region[i];
		data.data.push(getData([dataFemmePriseCharge[element.codeRegion]]));
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
			toolbar: {
				show: false,
			},
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
		if (this.value === 'femmePriseCharge') {
			for (let i = 0; i < region.length; i++) {
				var element = region[i];
				data.data.push(
					getData([dataFemmePriseCharge[element.codeRegion]])
				);
				data.categories.push(element.region);
			}
			type = '';
		} else if (this.value === 'cpn') {
			for (let i = 0; i < region.length; i++) {
				var element = region[i];
				data.data.push(
					getData([
						dataCpnNouvelleInscriteT1[element.codeRegion],
						dataCpnNouvelleInscriteT2[element.codeRegion],
						dataCpnNouvelleInscriteT3[element.codeRegion],
						dataCpnAncienneInscriteT1[element.codeRegion],
						dataCpnAncienneInscriteT2[element.codeRegion],
						dataCpnAncienneInscriteT3[element.codeRegion],
					])
				);
				data.categories.push(element.region);
			}
			type = '';
		} else if (this.value === 'femmeExaminePostNatal') {
			for (let i = 0; i < region.length; i++) {
				var element = region[i];
				data.data.push(
					getData([dataFemmeExaminePostNatal[element.codeRegion]])
				);
				data.categories.push(element.region);
			}
			type = '';
		} else if (this.value === 'garDepiste') {
			for (let i = 0; i < region.length; i++) {
				var element = region[i];
				data.data.push(getData([dataGahrDepiste[element.codeRegion]]));
				data.categories.push(element.region);
			}
			type = '';
		} else if (this.value === 'autreConsultation') {
			for (let i = 0; i < region.length; i++) {
				var element = region[i];
				data.data.push(getData([dataAutreConsultation[element.codeRegion]]));
				data.categories.push(element.region);
			}
			type = '';
		} else if (this.value === 'vat') {
			for (let i = 0; i < region.length; i++) {
				var element = region[i];
				data.data.push(getData([dataVat[element.codeRegion]]));
				data.categories.push(element.region);
			}
			type = '';
		} else if (this.value === 'reference') {
			for (let i = 0; i < region.length; i++) {
				var element = region[i];
				data.data.push(getData([dataReference[element.codeRegion]]));
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
