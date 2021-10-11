$(document).ready(function () {
	// SUM DATA
	function sumPdrProvince(t1, t2, t3, t4, codeProvince) {
		// VARIABLE
		var ObjOut = {
			[codeProvince]: 0,
		};
		// loop
		ObjOut[codeProvince] += t1[codeProvince];
		ObjOut[codeProvince] += t2[codeProvince];
		ObjOut[codeProvince] += t3[codeProvince];
		ObjOut[codeProvince] += t4[codeProvince];
		ObjOut[codeProvince] /= 4;
		return ObjOut;
	}
	// GET THE MAX VALUE OF ARRAY
	function sumTrimestreProvince(data, codeProvince, trimestre) {
		// VARIABLE
		var ObjOut = {
			[codeProvince]: 0,
		}, csrCount = 0;
		// loop
		for (const key in data) {
			if (Object.hasOwnProperty.call(data, key)) {
				const element = data[key];
				ObjOut[codeProvince] += element['t' + trimestre].tauxCover;
				csrCount++
				if (element.t1.pdr.length)
					year = element.t1.pdr[0].year
			}
		}
		ObjOut[codeProvince] = Math.ceil(ObjOut[codeProvince] / csrCount)
		return ObjOut;
	}
	// GET DATA TABLE
	function getDataTable(data) {
		var strOut = '';
		for (const csr in data) {
			if (Object.hasOwnProperty.call(data, csr)) {
				if (data[csr].t1.pdr.length) {
					const trimestreElement = data[csr].t1;
					// calculate the rowspan
					var rowpan = 0;
					for (let i = 0; i < trimestreElement.pdr.length; i++) {
						const element = trimestreElement.pdr[i];
						rowpan += element.localite.length
					}
					// done
					strOut += '<tr><td rowspan="' + rowpan + '">' + csr +  '</td><td rowspan="' + rowpan + '">' + data[csr].category +  '</td>'
					strOut += '<td rowspan="' + trimestreElement.pdr[0].localite.length + '">' + trimestreElement.pdr[0].pdr +  '</td>'
					strOut += '<td>' + trimestreElement.pdr[0].localite[0] +  '</td>'
					strOut += '<td rowspan="' + rowpan + '">' + trimestreElement.pdr.length +  '</td></tr>'
					// add localite
					for (let j = 1; j < trimestreElement.pdr[0].localite.length; j++) {
						const localite = trimestreElement.pdr[0].localite[j];
						strOut += '<tr><td>' + localite +  '</td></tr>'
					}
					// add
					for (let i = 1; i < trimestreElement.pdr.length; i++) {
						const element = trimestreElement.pdr[i];
						strOut += '<tr><td rowspan="' + element.localite.length + '">' + element.pdr +  '</td>'
						// add localite
						strOut += '<td>' + element.localite[0] +  '</td></th>'
						for (let j = 1; j < element.localite.length; j++) {
							const localite = element.localite[j];
							strOut += '<tr><td>' + localite +  '</td></tr>'
						}
					}
				}
			}
		}
		return strOut
	}
	// VARIABLES
	var wholeData = $('#data').data('provincedata'),
		codeProvince = $('#data').data('code'),
		title = $('#title').text(),
		year, 
		// init data
		// Taux de pdr
		dataTrimestre1 = sumTrimestreProvince(
			wholeData.tauxCoverturePdr,
			codeProvince,
			1
		),
		dataTrimestre2 = sumTrimestreProvince(
			wholeData.tauxCoverturePdr,
			codeProvince,
			2
		),
		dataTrimestre3 = sumTrimestreProvince(
			wholeData.tauxCoverturePdr,
			codeProvince,
			3
		),
		dataTrimestre4 = sumTrimestreProvince(
			wholeData.tauxCoverturePdr,
			codeProvince,
			4
		),
		data = sumPdrProvince(
			dataTrimestre1,
			dataTrimestre2,
			dataTrimestre3,
			dataTrimestre4,
			codeProvince
		),
		// other
		scale = [
			'#FF4646',
			'#FFF891',
			'#fcf75a',
			'#a9a403',
			'#7DFE69',
			'#169a01',
			'#0a4600',
		];
	getDataTable(wholeData.tauxCoverturePdr);

	// MAP
	$('#province-map').vectorMap({
		map: 'province',
		series: {
			regions: [
				{
					values: { [codeProvince]: data[codeProvince] },
					scale,
					normalizeFunction: 'polynomial',
					max: 100,
					min: 0,
					legend: {
						horizontal: true,
						labelRender: function (v) {
							return v;
						},
					},
				},
			],
		},
		regionStyle: {
			initial: {
				stroke: '#000000',
				'stroke-width': 3,
				fill: '#c6cacd',
			},
			hover: {
				stroke: '#000000',
				'stroke-width': 3,
				fill: '#6294ed',
			},
		},
		backgroundColor: '#a5bfdd',
		regionLabelStyle: {
			initial: {
				fill: '#000000',
			},
		},
		onRegionTipShow: function (event, label, code) {
			if (code == codeProvince) {
				label.html(
					`
					<div class="bg-white shadow-sm p-1 rounded">
					<table class="table table-sm table-bordered fs-8 text-dark">
						<tbody>
							<tr>
								<th colspan="2" class="text-center">Province : ${label.html()}</th>
							</tr>
							
							<tr>
								<th colspan="2" class="text-center">${title} : <span class="fs-7"><span class="badge bg-5">${
						data[code]
					}%</span></span></th>
							</tr>
							
							<tr>
								<td>Trimestre 1</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataTrimestre1[code]
								}%</span></td>
							</tr>
							
							<tr>
								<td>Trimestre 2</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataTrimestre2[code]
								}%</span></td>
							</tr>
							
							<tr>
								<td>Trimestre 3</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataTrimestre3[code]
								}%</span></td>
							</tr>
							
							<tr>
								<td>Trimestre 4</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									dataTrimestre4[code]
								}%</span></td>
							</tr>
							
							<tr>
								<td>Annuel</td>
								<td class="fs-7 text-center"><span class="badge bg-5">${
									(dataTrimestre1[code] +
										dataTrimestre2[code] +
										dataTrimestre3[code] +
										dataTrimestre4[code]) /
									4
								}%</span></td>
							</tr>
							</tr>
						</tbody>
					</table>
					</div>
					`
				);
			}
		}
	});
});
