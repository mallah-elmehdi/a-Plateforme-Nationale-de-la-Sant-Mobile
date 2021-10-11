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
	function getVehicule(data, csrList) {
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
					listTemp[key] +=
						element.value.ambulance.appartenance.commune.age.moins5ans;
					listTemp[key] +=
						element.value.ambulance.appartenance.commune.age.plus5ans;
					listTemp[key] +=
						element.value.ambulance.appartenance.ms.age.moins5ans;
					listTemp[key] +=
						element.value.ambulance.appartenance.ms.age.plus5ans;
					listTemp[key] +=
						element.value.ambulance.appartenance.ong.age.moins5ans;
					listTemp[key] +=
						element.value.ambulance.appartenance.ong.age.plus5ans;

					listTemp[key] +=
						element.value.camionMobile.appartenance.commune.age.moins5ans;
					listTemp[key] +=
						element.value.camionMobile.appartenance.commune.age.plus5ans;
					listTemp[key] +=
						element.value.camionMobile.appartenance.ms.age.moins5ans;
					listTemp[key] +=
						element.value.camionMobile.appartenance.ms.age.plus5ans;
					listTemp[key] +=
						element.value.camionMobile.appartenance.ong.age.moins5ans;
					listTemp[key] +=
						element.value.camionMobile.appartenance.ong.age.plus5ans;

					listTemp[key] +=
						element.value.usm.appartenance.commune.age.moins5ans;
					listTemp[key] +=
						element.value.usm.appartenance.commune.age.plus5ans;
					listTemp[key] +=
						element.value.usm.appartenance.ms.age.moins5ans;
					listTemp[key] +=
						element.value.usm.appartenance.ms.age.plus5ans;
					listTemp[key] +=
						element.value.usm.appartenance.ong.age.moins5ans;
					listTemp[key] +=
						element.value.usm.appartenance.ong.age.plus5ans;

					listTemp[key] +=
						element.value.vtt.appartenance.commune.age.moins5ans;
					listTemp[key] +=
						element.value.vtt.appartenance.commune.age.plus5ans;
					listTemp[key] +=
						element.value.vtt.appartenance.ms.age.moins5ans;
					listTemp[key] +=
						element.value.vtt.appartenance.ms.age.plus5ans;
					listTemp[key] +=
						element.value.vtt.appartenance.ong.age.moins5ans;
					listTemp[key] +=
						element.value.vtt.appartenance.ong.age.plus5ans;
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
		data = getVehicule([wholeData.vehicule], csrList);
	// CHART OPTION
	var options = {
		series: [
			{
				data: data.data,
			},
		],
		chart: {
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
		if (this.value === 'vehicule') {
			getVehicule([wholeData.vehicule], csrList);
		} else if (this.value === 'kmsParcourir') {
			data = getData([wholeData.budgetKmsParcourir], csrList);
		} else if (this.value === 'besoinCarburant') {
			data = getData([wholeData.budgetBesoinCarburant], csrList);
		} else if (this.value === 'besoinUsm') {
			data = getData([wholeData.besoinUsm], csrList);
		}
		// apply changes
		chart.updateSeries([
			{
				data: data.data,
			},
		]);
	});
});
