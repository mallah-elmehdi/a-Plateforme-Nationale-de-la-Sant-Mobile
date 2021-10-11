$(document).ready(function () {
	// VARIABLES
	var wholeData = $('#dataProvince').data('carte'),
		province = $('#province-chart').data('province'),
		type = '',
		// init data
		dataEnfantPrisesCharge = wholeData.enfantPrisesCharge.data,
		dataVaccinationPentavalent = wholeData.vaccinationDtc3Hib3.data,
		dataVaccinationRr = wholeData.vaccinationVar.data,
		dataVitamineA = wholeData.vitamineA.data,
		dataVitamineD = wholeData.vitamineD.data,
		dataPesee = wholeData.pesee.data,
		dataDiarrhe = wholeData.diarrhe.data,
		dataIra = wholeData.ira.data,
		dataReference = wholeData.reference.data,
		data = {
			data: [],
			categories: [],
		};
	// DATA LOADING
	for (let i = 0; i < province.length; i++) {
		const element = province[i];
		data.data.push(getData([dataEnfantPrisesCharge[element.codeProvince]]));
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
		if (this.value === 'enfantPrisesCharge') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
				data.data.push(
					getData([dataEnfantPrisesCharge[element.codeProvince]])
				);
				data.categories.push(element.province);
			}
			type = '';
		} else if (this.value === 'vaccination') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
				data.data.push(
					getData([
						dataVaccinationPentavalent[element.codeProvince],
						dataVaccinationRr[element.codeProvince],
					])
				);
				data.categories.push(element.province);
			}
			type = '';
		} else if (this.value === 'vitamineA') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
				data.data.push(
					getData([dataVitamineA[element.codeProvince]])
				);
				data.categories.push(element.province);
			}
			type = '';
		} else if (this.value === 'vitamineD') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
				data.data.push(getData([dataVitamineD[element.codeProvince]]));
				data.categories.push(element.province);
			}
			type = '';
		} else if (this.value === 'pesee') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
				data.data.push(getData([dataPesee[element.codeProvince]]));
				data.categories.push(element.province);
			}
			type = '';
		} else if (this.value === 'diarrhe') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
				data.data.push(getData([dataDiarrhe[element.codeProvince]]));
				data.categories.push(element.province);
			}
			type = '';
		} else if (this.value === 'ira') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
				data.data.push(getData([dataIra[element.codeProvince]]));
				data.categories.push(element.province);
			}
			type = '';
		} else if (this.value === 'reference') {
			for (let i = 0; i < province.length; i++) {
				var element = province[i];
				data.data.push(getData([dataReference[element.codeProvince]]));
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
	$('.thisProvince').addClass('d-none')
});
