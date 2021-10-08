$(document).ready(function () {
	// VARIABLES
	var wholeData = $('#dataRegion').data('carte'),
		region = $('#region-chart').data('region'),
		type = '',
		// init data
		dataConsultationRealiseMMoins =
			wholeData.consultationRealiseMMoins5ans.data,
		dataConsultationRealiseMPlus =
			wholeData.consultationRealiseMPlus5ans.data,
		dataConsultationRealiseFMoins =
			wholeData.consultationRealiseFMoins5ans.data,
		dataConsultationRealiseFPlus =
			wholeData.consultationRealiseFPlus5ans.data,
		dataPecParPemMoins = wholeData.pecParPemMoins5ans.data,
		dataPecParPemPlus = wholeData.pecParPemPlus5ans.data,
		dataReferenceConsSpecMoins = wholeData.referenceConsSpecMoins5ans.data,
		dataReferenceConsSpecPlus = wholeData.referenceConsSpecPlus5ans.data,
		dataReferenceHospMoins = wholeData.referenceHospMoins5ans.data,
		dataReferenceHospPlus = wholeData.referenceHospPlus5ans.data,
		dataReferenceExLaboMoins = wholeData.referenceExLaboMoins5ans.data,
		dataReferenceExLaboPlus = wholeData.referenceExLaboPlus5ans.data,
		dataReferenceExRadioMoins = wholeData.referenceExRadioMoins5ans.data,
		dataReferenceExRadioPlus = wholeData.referenceExRadioPlus5ans.data,
		dataBudgetMedicamentDispenseEm =
			wholeData.budgetMedicamentDispenseEm.data,
		data = {
			data: [],
			categories: [],
		};
	// DATA LOADING
	for (let i = 0; i < region.length; i++) {
		var element = region[i];
		data.data.push(
			getData([
				dataConsultationRealiseMMoins[element.codeRegion],
				dataConsultationRealiseMPlus[element.codeRegion],
				dataConsultationRealiseFMoins[element.codeRegion],
				dataConsultationRealiseFPlus[element.codeRegion],
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
		
		if (this.value === 'consultationRealise') {
			for (let i = 0; i < region.length; i++) {
				var element = region[i];
				data.data.push(
					getData([
						dataConsultationRealiseMMoins[element.codeRegion],
						dataConsultationRealiseMPlus[element.codeRegion],
						dataConsultationRealiseFMoins[element.codeRegion],
						dataConsultationRealiseFPlus[element.codeRegion],
					])
				);
				data.categories.push(element.region);
			}
			type = '';
		} else if (this.value === 'pecParPem') {
			for (let i = 0; i < region.length; i++) {
				var element = region[i];
				data.data.push(
					getData([
						dataPecParPemMoins[element.codeRegion],
						dataPecParPemPlus[element.codeRegion],
					])
				);
				data.categories.push(element.region);
			}
			type = '';
		} else if (this.value === 'reference') {
			for (let i = 0; i < region.length; i++) {
				var element = region[i];
				data.data.push(
					getData([
						dataReferenceConsSpecMoins[element.codeRegion],
						dataReferenceConsSpecPlus[element.codeRegion],
						dataReferenceHospMoins[element.codeRegion],
						dataReferenceHospPlus[element.codeRegion],
						dataReferenceExLaboMoins[element.codeRegion],
						dataReferenceExLaboPlus[element.codeRegion],
						dataReferenceExRadioMoins[element.codeRegion],
						dataReferenceExRadioPlus[element.codeRegion],
					])
				);
				data.categories.push(element.region);
			}
			type = '';
		} else if (this.value === 'budgetMedicamentDispenseEm') {
			for (let i = 0; i < region.length; i++) {
				var element = region[i];
				data.data.push(
					getData([
						dataBudgetMedicamentDispenseEm[element.codeRegion],
					])
				);
				data.categories.push(element.region);
			}
			type = ' DH';
		}
		chart.updateSeries([
			{
				data: data.data,
			},
		]);
	});
});
