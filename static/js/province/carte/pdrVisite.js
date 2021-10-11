$(document).ready(function () {
	// FUNCTION
	function pdf() {
	// --------------------------------------- download one pdf
		function getPng() {
			var url = document.URL,
				len = url.split('/').length - 4,
				outStr = '';
			for (let i = 0; i < len; i++) {
				outStr += '../';
			}
			outStr += 'image/ms.png';
			return outStr;
		}
		// ------------------------------------------------- download multiple pdfs
		function generateOnePdf() {
			// INIT THE DOCUMENT
			var doc = new jsPDF('p', 'mm', 'a4');
			// INSERT THE IMAGE HEADER
			var img = new Image();
			img.src = getPng();
			doc.addImage(img, 'PNG', 30, 15, 0, 0);
			// SET FONT STYLE
			doc.setFont('times');
			// SET FONT SIZE FOR THE HEADER
			doc.setFontSize(15);
			// INSERT THE HEADER
			doc.text('La liste des PDR et localités par centre de santé', 50, 50);
			// SET FONT SIZE FOR THE TEXT
			doc.setFontSize(12);
			// INSERT THE YEAR
			doc.text('Année : ' + year, 90, 56);
			// IDENTITY
			doc.text('Direction Régionale de la Santé : ' + $('#data').data('region'), 15, 66);
			doc.text('Délégation du Ministère de la Santé : ' + $('#data').data('province'), 15, 72);
			// ADD CONTENT
			doc.autoTable({
				html: '#listPdr',
				startY: 82,
				theme: 'grid',
				styles: {
					halign: 'center',
					textColor: [0, 0, 0],
					font: 'times',
				},
			});
			// PREVENT SPLITING THE TABLE
			if (doc.lastAutoTable.finalY >= 260) {
				doc.addPage();
				doc.lastAutoTable.finalY = 0
			};
			// PAGINATION
			const pageCount = doc.internal.getNumberOfPages();
			doc.setFontSize(10);
			for(var i = 1; i <= pageCount; i++) {
				doc.setPage(i);
				doc.text('Page ' + String(i) + ' of ' + String(pageCount),131-20,318-30,null,null,"right");
			}
			// GENERATE THE FINALE PDF
			doc.save(
				'La liste des PDR et localités par centre de santé - ' + year + '.pdf'
			);
		}
		// call the function
		$('#downloadListPdr').click(function () {
			// DOWNLOAD THE PDF
			generateOnePdf();
		});
	}
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
	// SHOW TABLE
	function showModal() {
		$('#modalPlace').empty().append(`
		<div class="modal fade p-0 m-0" id="modalTable" tabindex="-1" aria-labelledby="modalTableLabel" aria-hidden="true">
			<div class="modal-dialog modal-fullscreen">
				<div class="modal-content">
					<div class="modal-header border-0 p-2 bg-5">
						<span class="modal-title text-white fw-bold fs-7" id="modalTableLabel">La liste des PDR et localités par centre de santé</span>
						<button type="button" class="btn btn-sm p-1 text-white" data-bs-dismiss="modal" aria-label="Close"><ion-icon class="fs-5 align-middle" name="close-outline"></ion-icon></button>
					</div>
					<div class="modal-body bg-body">
						<div class="row g-3">
							<div class="col-12">
								<button type="button" id='downloadListPdr' class="btn btn-sm btn-light">
									<div class='d-flex align-items-center'>
										<img class="me-2" src="/../../image/pdf.svg", alt="pdf" width="20px">
										<span>PDF</span>
									</div>
								</button>
							</div>
							<div class="col-12">
								<div class="card">
									<div class="card-body">
										<div class="table-responsive">
											<table class='table thisTable table-bordered' id='listPdr'>
												<tbody>
													<tr>
														<th>Centre de santé</th>
														<th>Catégorie</th>
														<th>PDR</th>
														<th>Localités</th>
														<th>Total</th>
													</tr>
													${getDataTable(wholeData.tauxCoverturePdr)}
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		`);
		var modal = new bootstrap.Modal(document.getElementById('modalTable'));
		modal.show();
		pdf();
	}
	function showErrorModal() {
		$('#modalPlace').empty().append(`
		<div class="modal fade p-0 m-0" id="modalTable" tabindex="-1" aria-labelledby="modalTableLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-body justify-content-between align-items-centre d-flex">
						<span class="modal-title text-dark fw-bold fs-7" id="modalTableLabel">vous ne pouvez pas voir la list of PDP and localities</span>
						<button type="button" class="btn btn-sm p-1 text-body" data-bs-dismiss="modal" aria-label="Close"><ion-icon class="fs-5 align-middle" name="close-outline"></ion-icon></button>
					</div>
				</div>
			</div>
		</div>
		`);
		var modal = new bootstrap.Modal(document.getElementById('modalTable'));
		modal.show();
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
		},
		onRegionClick: function (e, code) {
			if (code == codeProvince) {
				showModal(code);
			} else {
				showErrorModal();
			}
		},
	});
});
