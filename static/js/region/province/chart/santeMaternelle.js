$(document).ready(function () {
	// VARIABLES
	var wholeData = $('#dataProvince').data('carte'),
		province = $('#province-chart').data('province'),
		provinceList = $('#data').data('list'),
		type = '',
		// init data
		dataFemmePriseCharge = wholeData.femmePriseCharge.data,
		dataCpnNouvelleInscrite = wholeData.cpnNouvelleInscrite.data,
		dataCpnAutreConsultation = wholeData.cpnAutreConsultation.data,
		dataFemmeExaminePostNatal = wholeData.femmeExaminePostNatal.data,
		dataGahrDepiste = wholeData.gahrDepiste.data,
		dataVat = wholeData.vat.data,
		dataReference = wholeData.reference.data,
		data = {
			data: [],
			categories: [],
		};
	// DATA LOADING
	for (let i = 0; i < province.length; i++) {
		const element = province[i];
		if (provinceList.includes(element.codeProvince)) {
		data.data.push(getData([dataFemmePriseCharge[element.codeProvince]]));
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
		if (this.value === 'femmePriseCharge') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
		if (provinceList.includes(element.codeProvince)) {
				data.data.push(
					getData([dataFemmePriseCharge[element.codeProvince]])
				);
				data.categories.push(element.province);
		}
			}
			type = '';
		} else if (this.value === 'cpn') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
		if (provinceList.includes(element.codeProvince)) {
				data.data.push(
					getData([
						dataCpnAutreConsultation[element.codeProvince],
						dataCpnNouvelleInscrite[element.codeProvince],
					])
				);
				data.categories.push(element.province);
		}
			}
			type = '';
		} else if (this.value === 'femmeExaminePostNatal') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
		if (provinceList.includes(element.codeProvince)) {
				data.data.push(
					getData([
						dataFemmeExaminePostNatal[element.codeProvince],
					])
				);
				data.categories.push(element.province);
		}
			}
			type = '';
		} else if (this.value === 'gahrDepiste') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
		if (provinceList.includes(element.codeProvince)) {
				data.data.push(
					getData([
						dataGahrDepiste[element.codeProvince],
					])
				);
				data.categories.push(element.province);
		}
			}
			type = '';
		} else if (this.value === 'vat') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
		if (provinceList.includes(element.codeProvince)) {
				data.data.push(
					getData([
						dataVat[element.codeProvince],
					])
				);
				data.categories.push(element.province);
		}
			}
			type = '';
		} else if (this.value === 'reference') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
		if (provinceList.includes(element.codeProvince)) {
				data.data.push(getData([dataReference[element.codeProvince]]));
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
