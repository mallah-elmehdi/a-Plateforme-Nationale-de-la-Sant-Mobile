$(document).ready(function () {
	// VARIABLES
	var wholeData = $('#dataProvince').data('carte'),
		province = $('#province-chart').data('province'),
		type = '',
		// init data
		dataFixeMedecin = wholeData.fixeMedecin.data,
		// fixeInfirmier
		dataFixeInfirmier = wholeData.fixeInfirmier.data,
		// fixeSageFemme
		dataFixeSageFemme = wholeData.fixeSageFemme.data,
		// fixeTechnicien
		dataFixeTechnicien = wholeData.fixeTechnicien.data,
		// fixeChauffeur
		dataFixeChauffeur = wholeData.fixeChauffeur.data,
		// fixeAppuie
		dataFixeAppuie = wholeData.fixeAppuie.data,
		// mobileMedecin
		dataMobileMedecin = wholeData.mobileMedecin.data,
		// mobileInfirmier
		dataMobileInfirmier = wholeData.mobileInfirmier.data,
		// mobileSageFemme
		dataMobileSageFemme = wholeData.mobileSageFemme.data,
		// mobileTechnicien
		dataMobileTechnicien = wholeData.mobileTechnicien.data,
		// mobileChauffeur
		dataMobileChauffeur = wholeData.mobileChauffeur.data,
		// mobileAppuie
		dataMobileAppuie = wholeData.mobileAppuie.data,
		// mobileEmOperationnelle
		dataMobileEmOperationnelle = wholeData.mobileEmOperationnelle.data,
		data = {
			data: [],
			categories: [],
		};
	// DATA LOADING
	for (let i = 0; i < province.length; i++) {
		const element = province[i];
		data.data.push(
			getData([
				dataFixeMedecin[element.codeProvince],
				dataFixeInfirmier[element.codeProvince],
				dataFixeSageFemme[element.codeProvince],
				dataFixeTechnicien[element.codeProvince],
				dataFixeChauffeur[element.codeProvince],
				dataFixeAppuie[element.codeProvince],
			])
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
		if (this.value === 'fixe') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
				data.data.push(
					getData([
						dataFixeMedecin[element.codeProvince],
						dataFixeInfirmier[element.codeProvince],
						dataFixeSageFemme[element.codeProvince],
						dataFixeTechnicien[element.codeProvince],
						dataFixeChauffeur[element.codeProvince],
						dataFixeAppuie[element.codeProvince],
					])
				);
				data.categories.push(element.province);
			}
			type = '';
		} else if (this.value === 'mobile') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
				data.data.push(
					getData([
						dataMobileMedecin[element.codeProvince],
						dataMobileInfirmier[element.codeProvince],
						dataMobileSageFemme[element.codeProvince],
						dataMobileTechnicien[element.codeProvince],
						dataMobileChauffeur[element.codeProvince],
						dataMobileAppuie[element.codeProvince],
					])
				);
				data.categories.push(element.province);
			}
			type = '';
		} else if (this.value === 'emOperationnelle') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
				data.data.push(getData([dataMobileEmOperationnelle[element.codeProvince]]));
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
	$('.thisProvince').addClass('d-none');
});
