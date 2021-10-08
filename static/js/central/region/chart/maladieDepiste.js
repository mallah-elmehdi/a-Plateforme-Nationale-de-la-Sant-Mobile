$(document).ready(function () {
	// VARIABLES
	var wholeData = $('#dataRegion').data('carte'),
		region = $('#region-chart').data('region'),
		type = '',
		// init data
		dataDiabeteCas = wholeData.diabeteCas.data,
		dataDiabeteCasPec = wholeData.diabeteCasPec.data,
		dataDiabeteReference = wholeData.diabeteReference.data,
		dataHtaCas = wholeData.htaCas.data,
		dataHtaCasPec = wholeData.htaCasPec.data,
		dataHtaReference = wholeData.htaReference.data,
		dataAngineCas = wholeData.angineCas.data,
		dataAngineCasPec = wholeData.angineCasPec.data,
		dataAngineReference = wholeData.angineReference.data,
		dataCarieCas = wholeData.carieCas.data,
		dataCarieCasPec = wholeData.carieCasPec.data,
		dataCarieReference = wholeData.carieReference.data,
		dataParodontopathieCas = wholeData.parodontopathieCas.data,
		dataParodontopathieCasPec = wholeData.parodontopathieCasPec.data,
		dataParodontopathieReference = wholeData.parodontopathieReference.data,
		dataMaladieMentaleCas = wholeData.maladieMentaleCas.data,
		dataMaladieMentaleCasPec = wholeData.maladieMentaleCasPec.data,
		dataMaladieMentaleReference = wholeData.maladieMentaleReference.data,
		dataIstCas = wholeData.istCas.data,
		dataIstCasPec = wholeData.istCasPec.data,
		dataIstReference = wholeData.istReference.data,
		dataRaaAvecCarditesCas = wholeData.raaAvecCarditesCas.data,
		dataRaaAvecCarditesCasPec = wholeData.raaAvecCarditesCasPec.data,
		dataRaaAvecCarditesReference = wholeData.raaAvecCarditesReference.data,
		dataRaaSansCarditesCas = wholeData.raaSansCarditesCas.data,
		dataRaaSansCarditesCasPec = wholeData.raaSansCarditesCasPec.data,
		dataRaaSansCarditesReference = wholeData.raaSansCarditesReference.data,
		dataCancerSeinCas = wholeData.cancerSeinCas.data,
		dataCancerSeinCasPec = wholeData.cancerSeinCasPec.data,
		dataCancerSeinReference = wholeData.cancerSeinReference.data,
		dataCancerColCas = wholeData.cancerColCas.data,
		dataCancerColCasPec = wholeData.cancerColCasPec.data,
		dataCancerColReference = wholeData.cancerColReference.data,
		dataTuberculosePolmonaireCas = wholeData.tuberculosePolmonaireCas.data,
		dataTuberculosePolmonaireCasPec =
			wholeData.tuberculosePolmonaireCasPec.data,
		dataTuberculosePolmonaireReference =
			wholeData.tuberculosePolmonaireReference.data,
		dataTuberculoseExtraPolmonaireCas =
			wholeData.tuberculoseExtraPolmonaireCas.data,
		dataTuberculoseExtraPolmonaireCasPec =
			wholeData.tuberculoseExtraPolmonaireCasPec.data,
		dataTuberculoseExtraPolmonaireReference =
			wholeData.tuberculoseExtraPolmonaireReference.data,
		data = {
			data: [],
			categories: [],
		};
	// DATA LOADING
	for (let i = 0; i < region.length; i++) {
		const element = region[i];
		data.data.push(
			getData([
				dataDiabeteCas[element.codeRegion],
				dataDiabeteCasPec[element.codeRegion],
				dataDiabeteReference[element.codeRegion],
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
		
		if (this.value === 'diabete') {
			for (let i = 0; i < region.length; i++) {
				var element = region[i];
				data.data.push(
					getData([
						dataDiabeteCas[element.codeRegion],
						dataDiabeteCasPec[element.codeRegion],
						dataDiabeteReference[element.codeRegion],
					])
				);
				data.categories.push(element.region);
			}
			type = '';
		} else if (this.value === 'hta') {
			for (let i = 0; i < region.length; i++) {
				var element = region[i];
				data.data.push(
					getData([
						dataHtaCas[element.codeRegion],
						dataHtaCasPec[element.codeRegion],
						dataHtaReference[element.codeRegion],
					])
				);
				data.categories.push(element.region);
			}
			type = '';
		} else if (this.value === 'angine') {
		
			for (let i = 0; i < region.length; i++) {
				var element = region[i];
				data.data.push(
					getData([
						dataAngineCas[element.codeRegion],
						dataAngineCasPec[element.codeRegion],
						dataAngineReference[element.codeRegion],
					])
				);
				data.categories.push(element.region);
			}
			type = ''
		} else if (this.value === 'carie') {
		
			for (let i = 0; i < region.length; i++) {
				var element = region[i];
				data.data.push(
					getData([
						dataCarieCas[element.codeRegion],
						dataCarieCasPec[element.codeRegion],
						dataCarieReference[element.codeRegion],
					])
				);
				data.categories.push(element.region);
			}
			type = ''
		} else if (this.value === 'parodontopathie') {

			for (let i = 0; i < region.length; i++) {
				var element = region[i];
				data.data.push(
					getData([
						dataParodontopathieCas[element.codeRegion],
						dataParodontopathieCasPec[element.codeRegion],
						dataParodontopathieReference[element.codeRegion],
					])
				);
				data.categories.push(element.region);
			}
			type = ''
		} else if (this.value === 'maladieMentale') {

			for (let i = 0; i < region.length; i++) {
				var element = region[i];
				data.data.push(
					getData([
						dataMaladieMentaleCas[element.codeRegion],
						dataMaladieMentaleCasPec[element.codeRegion],
						dataMaladieMentaleReference[element.codeRegion],
					])
				);
				data.categories.push(element.region);
			}
			type = ''
		} else if (this.value === 'ist') {
			for (let i = 0; i < region.length; i++) {
				var element = region[i];
				data.data.push(
					getData([
						dataIstCas[element.codeRegion],
						dataIstCasPec[element.codeRegion],
						dataIstReference[element.codeRegion],
					])
				);
				data.categories.push(element.region);
			}
			type = ''
		} else if (this.value === 'raa') {
			for (let i = 0; i < region.length; i++) {
				var element = region[i];
				data.data.push(
					getData([
						dataRaaAvecCarditesCas[element.codeRegion],
						dataRaaAvecCarditesCasPec[element.codeRegion],
						dataRaaAvecCarditesReference[element.codeRegion],
						dataRaaSansCarditesCas[element.codeRegion],
						dataRaaSansCarditesCasPec[element.codeRegion],
						dataRaaSansCarditesReference[element.codeRegion],
					])
				);
				data.categories.push(element.region);
			}
			type = ''
		} else if (this.value === 'cancer') {
			
			for (let i = 0; i < region.length; i++) {
				var element = region[i];
				data.data.push(
					getData([
						dataCancerSeinCas[element.codeRegion],
						dataCancerSeinCasPec[element.codeRegion],
						dataCancerSeinReference[element.codeRegion],
						dataCancerColCas[element.codeRegion],
						dataCancerColCasPec[element.codeRegion],
						dataCancerColReference[element.codeRegion],
					])
				);
				data.categories.push(element.region);
			}
			type = ''
		} else if (this.value === 'tuberculose') {
			for (let i = 0; i < region.length; i++) {
				var element = region[i];
				data.data.push(
					getData([
						dataTuberculosePolmonaireCas[element.codeRegion],
						dataTuberculosePolmonaireCasPec[element.codeRegion],
						dataTuberculosePolmonaireReference[element.codeRegion],
						dataTuberculoseExtraPolmonaireCas[element.codeRegion],
						dataTuberculoseExtraPolmonaireCasPec[element.codeRegion],
						dataTuberculoseExtraPolmonaireReference[element.codeRegion],
					])
				);
				data.categories.push(element.region);
			}
			type = ''
		}
		chart.updateSeries([
			{
				data: data.data,
			},
		]);
	});
});
