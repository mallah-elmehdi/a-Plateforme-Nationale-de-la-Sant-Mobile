$(document).ready(function () {
	// FUNCTION
	function getData(data, csrList) {
		// variable
		var objOut = {
				data: [],
				categories: [],
			},
			listTemp = {};
		for (let i = 0; i < csrList.length; i++) {
			const element = csrList[i];
			listTemp[element.csr] = 0;
		}
		// loop
		for (let i = 0; i < data.length; i++) {
			const dataeElement = data[i];
			for (const key in dataeElement.data) {
				if (Object.hasOwnProperty.call(dataeElement.data, key)) {
					const element = dataeElement.data[key];
					listTemp[key] += element.value;
				}
			}
		}
		for (const key in listTemp) {
			if (Object.hasOwnProperty.call(listTemp, key)) {
				const element = listTemp[key];
				objOut.data.push(element);
				objOut.categories.push(key);
			}
		}
		return objOut;
	}
	// VARIABLES
	var wholeData = $('#data').data('provincedata'),
		csrList = $('#data').data('csrlist'),
		// init data
		// DATA LOADING
		data = getData(
			[
				wholeData.enfantPrisesCharge
			],
			csrList
		);
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
			height: 30 * data.categories.length,
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
				return val;
			},
			offsetX: 0,
		},
		xaxis: {
			categories: data.categories,
		},
		yaxis: {
			min: 0,
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
					return value;
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
	var chart = new ApexCharts(document.querySelector('#csr-chart'), options);
	chart.render();
	// EVENTS
	$('input[type=radio][name=data]').change(function () {
		data = null;
		// change te data
		if (this.value === 'enfantPrisesCharge') {
			data = getData([wholeData.enfantPrisesCharge], csrList);
		} else if (this.value === 'vaccination') {
			data = getData([
				wholeData.vaccinationRr,
				wholeData.vaccinationPentavalent,
				wholeData.vaccinationBcg,
			], csrList);
		} else if (this.value === 'vitamineA') {
			data = getData([wholeData.vitamineA], csrList);
		} else if (this.value === 'vitamineD') {
			data = getData([wholeData.vitamineD], csrList);
		} else if (this.value === 'enfantsAvecInsuffisancePonderale') {
			data = getData([wholeData.enfantsAvecInsuffisancePonderale], csrList);
		} else if (this.value === 'enfantsAvecRetardCroissance') {
			data = getData([wholeData.enfantsAvecRetardCroissance], csrList);
		} else if (this.value === 'diarrhe') {
			data = getData([wholeData.diarrhe], csrList);
		} else if (this.value === 'ira') {
			data = getData([wholeData.ira], csrList);
		} else if (this.value === 'reference') {
			data = getData([wholeData.reference], csrList);
		}
		// apply changes
		chart.updateSeries([
			{
				data: data.data,
			},
		]);
	});
});
