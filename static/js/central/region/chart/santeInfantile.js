$(document).ready(function () {
	// VARIABLES
	var wholeData = $('#dataRegion').data('carte'),
		region = $('#region-chart').data('region'),
		type = '',
		// init data
		dataEnfantPrisesCharge = wholeData.enfantPrisesCharge.data,
		dataVaccinationDtc3Hib3 = wholeData.vaccinationDtc3Hib3.data,
		dataVaccinationVar = wholeData.vaccinationVar.data,
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
	for (let i = 0; i < region.length; i++) {
		const element = region[i];
		data.data.push(getData([dataEnfantPrisesCharge[element.codeRegion]]));
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
		if (this.value === 'enfantPrisesCharge') {
			for (let i = 0; i < region.length; i++) {
				var element = region[i];
				data.data.push(
					getData([dataEnfantPrisesCharge[element.codeRegion]])
				);
				data.categories.push(element.region);
			}
			type = '';
		} else if (this.value === 'vaccination') {
			for (let i = 0; i < region.length; i++) {
				var element = region[i];
				data.data.push(
					getData([
						dataVaccinationDtc3Hib3[element.codeRegion],
						dataVaccinationVar[element.codeRegion],
					])
				);
				data.categories.push(element.region);
			}
			type = '';
		} else if (this.value === 'vitamineA') {
			for (let i = 0; i < region.length; i++) {
				var element = region[i];
				data.data.push(
					getData([dataVitamineA[element.codeRegion]])
				);
				data.categories.push(element.region);
			}
			type = '';
		} else if (this.value === 'vitamineD') {
			for (let i = 0; i < region.length; i++) {
				var element = region[i];
				data.data.push(getData([dataVitamineD[element.codeRegion]]));
				data.categories.push(element.region);
			}
			type = '';
		} else if (this.value === 'pesee') {
			for (let i = 0; i < region.length; i++) {
				var element = region[i];
				data.data.push(getData([dataPesee[element.codeRegion]]));
				data.categories.push(element.region);
			}
			type = '';
		} else if (this.value === 'diarrhe') {
			for (let i = 0; i < region.length; i++) {
				var element = region[i];
				data.data.push(getData([dataDiarrhe[element.codeRegion]]));
				data.categories.push(element.region);
			}
			type = '';
		} else if (this.value === 'ira') {
			for (let i = 0; i < region.length; i++) {
				var element = region[i];
				data.data.push(getData([dataIra[element.codeRegion]]));
				data.categories.push(element.region);
			}
			type = '';
		} else if (this.value === 'reference') {
			for (let i = 0; i < region.length; i++) {
				var element = region[i];
				data.data.push(getData([dataReference[element.codeRegion]]));
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
