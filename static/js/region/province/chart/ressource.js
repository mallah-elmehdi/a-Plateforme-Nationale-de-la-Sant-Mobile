$(document).ready(function () {
	// VARIABLES
	var wholeData = $('#dataProvince').data('carte'),
		province = $('#province-chart').data('province'),
		provinceList = $('#data').data('list'),
		type = '',
		// init data
		dataBesoinUsm = wholeData.besoinUsm.data,
		dataBudgetKmsParcourir = wholeData.budgetKmsParcourir.data,
		dataBudgetBesoinCarburant = wholeData.budgetBesoinCarburant.data,
		dataType = wholeData.type.data,
		data = {
			data: [],
			categories: [],
		};
	// DATA LOADING
	for (let i = 0; i < province.length; i++) {
		var element = province[i];
		if (provinceList.includes(element.codeProvince)) {
			data.data.push(getDataType([dataType[element.codeProvince]]));
			data.categories.push(element.province);
		}
	}
	// SUM DATA
	// GET DATA TYPE
	function getDataType(dataset) {
		var data = 0;
		for (let i = 0; i < dataset.length; i++) {
			var dataElement = dataset[i];
			for (const key in dataElement) {
				data +=
					dataElement[key].appartenance.ms.age.moins5ans +
					dataElement[key].appartenance.ms.age.plus5ans +
					dataElement[key].appartenance.commune.age.moins5ans +
					dataElement[key].appartenance.commune.age.moins5ans +
					dataElement[key].appartenance.ong.age.plus5ans +
					dataElement[key].appartenance.ong.age.plus5ans;
			}
		}
		return data;
	}
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

		if (this.value === 'ressource') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
				if (provinceList.includes(element.codeProvince)) {
					data.data.push(
						getDataType([dataType[element.codeProvince]])
					);
					data.categories.push(element.province);
				}
			}
			type = '';
		} else if (this.value === 'budget') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
				if (provinceList.includes(element.codeProvince)) {
					data.data.push(
						getData([
							dataBudgetBesoinCarburant[element.codeProvince],
						])
					);
					data.categories.push(element.province);
				}
			}
			type = ' MAD';
		} else if (this.value === 'besoinUsm') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
				if (provinceList.includes(element.codeProvince)) {
					data.data.push(
						getData([dataBesoinUsm[element.codeProvince]])
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
	$('.thisProvince').addClass('d-none');
});
