$(document).ready(function () {
	// VARIABLES
	var wholeData = $('#dataRegion').data('carte'),
		region = $('#region-chart').data('region'),
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
	for (let i = 0; i < region.length; i++) {
		const element = region[i];
		data.data.push(
			getData([
				dataFixeMedecin[element.codeRegion],
				dataFixeInfirmier[element.codeRegion],
				dataFixeSageFemme[element.codeRegion],
				dataFixeTechnicien[element.codeRegion],
				dataFixeChauffeur[element.codeRegion],
				dataFixeAppuie[element.codeRegion],
			])
		);
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
		if (this.value === 'fixe') {
			for (let i = 0; i < region.length; i++) {
				const element = region[i];
				data.data.push(
					getData([
						dataFixeMedecin[element.codeRegion],
						dataFixeInfirmier[element.codeRegion],
						dataFixeSageFemme[element.codeRegion],
						dataFixeTechnicien[element.codeRegion],
						dataFixeChauffeur[element.codeRegion],
						dataFixeAppuie[element.codeRegion],
					])
				);
				data.categories.push(element.region);
			}
			type = '';
		} else if (this.value === 'mobile') {
			for (let i = 0; i < region.length; i++) {
				const element = region[i];
				data.data.push(
					getData([
						dataMobileMedecin[element.codeRegion],
						dataMobileInfirmier[element.codeRegion],
						dataMobileSageFemme[element.codeRegion],
						dataMobileTechnicien[element.codeRegion],
						dataMobileChauffeur[element.codeRegion],
						dataMobileAppuie[element.codeRegion],
					])
				);
				data.categories.push(element.region);
			}
			type = '';
		} else if (this.value === 'emOperationnelle') {
			for (let i = 0; i < region.length; i++) {
				const element = region[i];
				data.data.push(
					getData([
						dataMobileEmOperationnelle[element.codeRegion],
					])
				);
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
