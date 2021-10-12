$(document).ready(function () {
	// VARIABLES
	var wholeData = $('#dataRegion').data('carte'),
		region = $('#region-chart').data('region'),
		type = '',
		// init data
		dataConsultationRealiseMMoins5ans =
			wholeData.consultationRealiseMMoins5ans.data,
		dataConsultationRealiseMEntre5ans18ans =
			wholeData.consultationRealiseMEntre5ans18ans.data,
		dataConsultationRealiseMPlus18ans =
			wholeData.consultationRealiseMPlus18ans.data,
		dataConsultationRealiseFMoins5ans =
			wholeData.consultationRealiseFMoins5ans.data,
		dataConsultationRealiseFEntre5ans18ans =
			wholeData.consultationRealiseFEntre5ans18ans.data,
		dataConsultationRealiseFPlus18ans =
			wholeData.consultationRealiseFPlus18ans.data,
		dataPecParPemMoins5ans = wholeData.pecParPemMoins5ans.data,
		dataPecParPemEntre5ans18ans = wholeData.pecParPemEntre5ans18ans.data,
		dataPecParPemPlus18ans = wholeData.pecParPemPlus18ans.data,
		dataReferenceConsSpecMoins5ans =
			wholeData.referenceConsSpecMoins5ans.data,
		dataReferenceConsSpecEntre5ans18ans =
			wholeData.referenceConsSpecEntre5ans18ans.data,
		dataReferenceConsSpecPlus18ans =
			wholeData.referenceConsSpecPlus18ans.data,
		dataReferenceUrgenceMoins5ans =
			wholeData.referenceUrgenceMoins5ans.data,
		dataReferenceUrgenceEntre5ans18ans =
			wholeData.referenceUrgenceEntre5ans18ans.data,
		dataReferenceUrgencePlus18ans =
			wholeData.referenceUrgencePlus18ans.data,
		dataReferenceExLaboMoins5ans = wholeData.referenceExLaboMoins5ans.data,
		dataReferenceExLaboEntre5ans18ans =
			wholeData.referenceExLaboEntre5ans18ans.data,
		dataReferenceExLaboPlus18ans = wholeData.referenceExLaboPlus18ans.data,
		dataReferenceExRadioMoins5ans =
			wholeData.referenceExRadioMoins5ans.data,
		dataReferenceExRadioEntre5ans18ans =
			wholeData.referenceExRadioEntre5ans18ans.data,
		dataReferenceExRadioPlus18ans =
			wholeData.referenceExRadioPlus18ans.data,
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
				dataConsultationRealiseMMoins5ans[element.codeRegion],
				dataConsultationRealiseMEntre5ans18ans[element.codeRegion],
				dataConsultationRealiseMPlus18ans[element.codeRegion],
				dataConsultationRealiseFMoins5ans[element.codeRegion],
				dataConsultationRealiseFEntre5ans18ans[element.codeRegion],
				dataConsultationRealiseFPlus18ans[element.codeRegion],
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
						dataConsultationRealiseMMoins5ans[element.codeRegion],
						dataConsultationRealiseMEntre5ans18ans[element.codeRegion],
						dataConsultationRealiseMPlus18ans[element.codeRegion],
						dataConsultationRealiseFMoins5ans[element.codeRegion],
						dataConsultationRealiseFEntre5ans18ans[element.codeRegion],
						dataConsultationRealiseFPlus18ans[element.codeRegion],
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
						dataPecParPemMoins5ans[element.codeRegion],
						dataPecParPemEntre5ans18ans[element.codeRegion],
						dataPecParPemPlus18ans[element.codeRegion],
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
						dataReferenceConsSpecMoins5ans[element.codeRegion],
						dataReferenceConsSpecEntre5ans18ans[element.codeRegion],
						dataReferenceConsSpecPlus18ans[element.codeRegion],
						dataReferenceUrgenceMoins5ans[element.codeRegion],
						dataReferenceUrgenceEntre5ans18ans[element.codeRegion],
						dataReferenceUrgencePlus18ans[element.codeRegion],
						dataReferenceExLaboMoins5ans[element.codeRegion],
						dataReferenceExLaboEntre5ans18ans[element.codeRegion],
						dataReferenceExLaboPlus18ans[element.codeRegion],
						dataReferenceExRadioMoins5ans[element.codeRegion],
						dataReferenceExRadioEntre5ans18ans[element.codeRegion],
						dataReferenceExRadioPlus18ans[element.codeRegion],
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
			type = ' MAD';
		}
		chart.updateSeries([
			{
				data: data.data,
			},
		]);
	});
});
