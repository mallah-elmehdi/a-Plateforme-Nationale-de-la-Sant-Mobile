$(document).ready(function () {
	// VARIABLES
	var wholeData = $('#dataProvince').data('carte'),
		province = $('#province-chart').data('province'),
		provinceList = $('#data').data('list'),
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
		dataTuberculosePolmonaireCas = wholeData.tuberculosePolmonaireCas.data,
		dataTuberculosePolmonaireCasPec =
			wholeData.tuberculosePolmonaireCasPec.data,
		dataTuberculosePolmonaireReference =
			wholeData.tuberculosePolmonaireReference.data,
		data = {
			data: [],
			categories: [],
		};
	// DATA LOADING
	for (let i = 0; i < province.length; i++) {
		const element = province[i];
		if (provinceList.includes(element.codeProvince)) {
			data.data.push(
				getData([
					dataDiabeteCas[element.codeProvince],
					dataDiabeteCasPec[element.codeProvince],
					dataDiabeteReference[element.codeProvince],
				])
			);
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

		if (this.value === 'diabete') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
				if (provinceList.includes(element.codeProvince)) {
					data.data.push(
						getData([
							dataDiabeteCas[element.codeProvince],
							dataDiabeteCasPec[element.codeProvince],
							dataDiabeteReference[element.codeProvince],
						])
					);
					data.categories.push(element.province);
				}
			}
			type = '';
		} else if (this.value === 'hta') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
				if (provinceList.includes(element.codeProvince)) {
					data.data.push(
						getData([
							dataHtaCas[element.codeProvince],
							dataHtaCasPec[element.codeProvince],
							dataHtaReference[element.codeProvince],
						])
					);
					data.categories.push(element.province);
				}
			}
			type = '';
		} else if (this.value === 'angine') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
				if (provinceList.includes(element.codeProvince)) {
					data.data.push(
						getData([
							dataAngineCas[element.codeProvince],
							dataAngineCasPec[element.codeProvince],
							dataAngineReference[element.codeProvince],
						])
					);
					data.categories.push(element.province);
				}
			}
			type = '';
		} else if (this.value === 'carie') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
				if (provinceList.includes(element.codeProvince)) {
					data.data.push(
						getData([
							dataCarieCas[element.codeProvince],
							dataCarieCasPec[element.codeProvince],
							dataCarieReference[element.codeProvince],
						])
					);
					data.categories.push(element.province);
				}
			}
			type = '';
		} else if (this.value === 'parodontopathie') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
				if (provinceList.includes(element.codeProvince)) {
					data.data.push(
						getData([
							dataParodontopathieCas[element.codeProvince],
							dataParodontopathieCasPec[element.codeProvince],
							dataParodontopathieReference[element.codeProvince],
						])
					);
					data.categories.push(element.province);
				}
			}
			type = '';
		} else if (this.value === 'maladieMentale') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
				if (provinceList.includes(element.codeProvince)) {
					data.data.push(
						getData([
							dataMaladieMentaleCas[element.codeProvince],
							dataMaladieMentaleCasPec[element.codeProvince],
							dataMaladieMentaleReference[element.codeProvince],
						])
					);
					data.categories.push(element.province);
				}
			}
			type = '';
		} else if (this.value === 'ist') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
				if (provinceList.includes(element.codeProvince)) {
					data.data.push(
						getData([
							dataIstCas[element.codeProvince],
							dataIstCasPec[element.codeProvince],
							dataIstReference[element.codeProvince],
						])
					);
					data.categories.push(element.province);
				}
			}
			type = '';
		} else if (this.value === 'raa') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
				if (provinceList.includes(element.codeProvince)) {
					data.data.push(
						getData([
							dataRaaAvecCarditesCas[element.codeProvince],
							dataRaaAvecCarditesCasPec[element.codeProvince],
							dataRaaAvecCarditesReference[element.codeProvince],
							dataRaaSansCarditesCas[element.codeProvince],
							dataRaaSansCarditesCasPec[element.codeProvince],
							dataRaaSansCarditesReference[element.codeProvince],
						])
					);
					data.categories.push(element.province);
				}
			}
			type = '';
		} else if (this.value === 'tuberculose') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
				if (provinceList.includes(element.codeProvince)) {
					data.data.push(
						getData([
							dataTuberculosePolmonaireCas[element.codeProvince],
							dataTuberculosePolmonaireCasPec[
								element.codeProvince
							],
							dataTuberculosePolmonaireReference[
								element.codeProvince
							],
						])
					);
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
