$(document).ready(function () {
	// VARIABLES
	var wholeData = $('#dataProvince').data('carte'),
		province = $('#province-chart').data('province'),
		provinceList = $('#data').data('list'),
		type = '',
		// init data
		dataConsultationRealiseMMoins5ans = wholeData.consultationRealiseMMoins5ans.data
		dataConsultationRealiseMEntre5ans18ans = wholeData.consultationRealiseMEntre5ans18ans.data
		dataConsultationRealiseMPlus18ans = wholeData.consultationRealiseMPlus18ans.data
		dataConsultationRealiseFMoins5ans = wholeData.consultationRealiseFMoins5ans.data
		dataConsultationRealiseFEntre5ans18ans = wholeData.consultationRealiseFEntre5ans18ans.data
		dataConsultationRealiseFPlus18ans = wholeData.consultationRealiseFPlus18ans.data

		dataPecParPemMoins5ans = wholeData.pecParPemMoins5ans.data
		dataPecParPemEntre5ans18ans = wholeData.pecParPemEntre5ans18ans.data
		dataPecParPemPlus18ans = wholeData.pecParPemPlus18ans.data
		
		dataReferenceConsSpecMoins5ans = wholeData.referenceConsSpecMoins5ans.data
		dataReferenceConsSpecEntre5ans18ans = wholeData.referenceConsSpecEntre5ans18ans.data
		dataReferenceConsSpecPlus18ans = wholeData.referenceConsSpecPlus18ans.data
		dataReferenceUrgenceMoins5ans = wholeData.referenceUrgenceMoins5ans.data
		dataReferenceUrgenceEntre5ans18ans = wholeData.referenceUrgenceEntre5ans18ans.data
		dataReferenceUrgencePlus18ans = wholeData.referenceUrgencePlus18ans.data
		dataReferenceExLaboMoins5ans = wholeData.referenceExLaboMoins5ans.data
		dataReferenceExLaboEntre5ans18ans = wholeData.referenceExLaboEntre5ans18ans.data
		dataReferenceExLaboPlus18ans = wholeData.referenceExLaboPlus18ans.data
		dataReferenceExRadioMoins5ans = wholeData.referenceExRadioMoins5ans.data
		dataReferenceExRadioEntre5ans18ans = wholeData.referenceExRadioEntre5ans18ans.data
		dataReferenceExRadioPlus18ans = wholeData.referenceExRadioPlus18ans.data
		
		dataBudgetMedicamentDispenseEm = wholeData.budgetMedicamentDispenseEm.data
		data = {
			data: [],
			categories: [],
		};
	// DATA LOADING
	for (let i = 0; i < province.length; i++) {
		var element = province[i];
		if (provinceList.includes(element.codeProvince)) {
			data.data.push(
				getData([
					dataConsultationRealiseMMoins5ans[element.codeProvince],
					dataConsultationRealiseMEntre5ans18ans[element.codeProvince],
					dataConsultationRealiseMPlus18ans[element.codeProvince],
					dataConsultationRealiseFMoins5ans[element.codeProvince],
					dataConsultationRealiseFEntre5ans18ans[element.codeProvince],
					dataConsultationRealiseFPlus18ans[element.codeProvince],
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

		if (this.value === 'consultationRealise') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
				if (provinceList.includes(element.codeProvince)) {
					data.data.push(
						getData([
							dataConsultationRealiseMMoins[element.codeProvince],
							dataConsultationRealiseMPlus[element.codeProvince],
							dataConsultationRealiseFMoins[element.codeProvince],
							dataConsultationRealiseFPlus[element.codeProvince],
						])
					);
					data.categories.push(element.province);
				}
			}
			type = '';
		} else if (this.value === 'pecParPem') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
				if (provinceList.includes(element.codeProvince)) {
					data.data.push(
						getData([
							dataPecParPemMoins5ans[element.codeProvince],
							dataPecParPemEntre5ans18ans[element.codeProvince],
							dataPecParPemPlus18ans[element.codeProvince],
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
					data.data.push(
						getData([
							dataReferenceConsSpecMoins5ans[element.codeProvince],
							dataReferenceConsSpecEntre5ans18ans[element.codeProvince],
							dataReferenceConsSpecPlus18ans[element.codeProvince],
							dataReferenceUrgenceMoins5ans[element.codeProvince],
							dataReferenceUrgenceEntre5ans18ans[element.codeProvince],
							dataReferenceUrgencePlus18ans[element.codeProvince],
							dataReferenceExLaboMoins5ans[element.codeProvince],
							dataReferenceExLaboEntre5ans18ans[element.codeProvince],
							dataReferenceExLaboPlus18ans[element.codeProvince],
							dataReferenceExRadioMoins5ans[element.codeProvince],
							dataReferenceExRadioEntre5ans18ans[element.codeProvince],
							dataReferenceExRadioPlus18ans[element.codeProvince],
						])
					);
					data.categories.push(element.province);
				}
			}
			type = '';
		} else if (this.value === 'budgetMedicamentDispenseEm') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
				if (provinceList.includes(element.codeProvince)) {
					data.data.push(
						getData([
							dataBudgetMedicamentDispenseEm[
								element.codeProvince
							],
						])
					);
					data.categories.push(element.province);
				}
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
