$(document).ready(function () {
	Object.size = function (obj) {
		var size = 0,
			key;
		for (key in obj) {
			if (obj.hasOwnProperty(key)) size++;
		}
		return size;
	};
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
		function generateMulPdf(region, province, trimestre, year) {
			// VARIABLES
			var listTable = [];
			// GET ALL TABLES
			$('.table.thisTable').each(function () {
				var obj = {};
				obj.id = $(this).data('id');
				obj.title = $(this).data('title');
				obj.align = $(this).data('align');
				listTable.push(obj);
			});
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
			doc.text(
				'Rapport des activités des Unités Médical Mobile (UMM)',
				45,
				50
			);
			// SET FONT SIZE FOR THE TEXT
			doc.setFontSize(12);
			// INSERT THE YEAR
			doc.text('Année : ' + year, 90, 56);
			// IDENTITY
			doc.text('Direction Régionale de la Santé : ' + region, 15, 66);
			doc.text(
				'Délégation du Ministère de la Santé : ' + province,
				15,
				72
			);
			doc.text('Trimester : ' + $('#data').data('trimestre'), 15, 78);
			// ADD ALL TABLES
			for (let i = 0; i < listTable.length; i++) {
				// ADD CONTENT
				if (i != 0) {
					doc.text(
						i + 1 + ' - ' + listTable[i].title,
						15,
						doc.lastAutoTable.finalY + 15
					);
					doc.autoTable({
						html: '#' + listTable[i].id,
						startY: doc.lastAutoTable.finalY + 18,
						theme: 'grid',
						styles: {
							halign: listTable[i].align,
							textColor: [0, 0, 0],
							font: 'times',
						},
						willDrawCell: function (data) {
							for (let i = 0; i < data.cell.text.length; i++) {
								const element = data.cell.text[i];
								if (element.includes('...Observations')) {
									data.cell.text[i] =
										data.cell.text[i].split(
											'...Observations'
										)[1];
								}
							}
						},
					});
				} else {
					doc.text(i + 1 + '- ' + listTable[i].title, 15, 88);
					doc.autoTable({
						html: '#' + listTable[i].id,
						startY: 91,
						theme: 'grid',
						styles: {
							halign: listTable[i].align,
							textColor: [0, 0, 0],
							font: 'times',
						},
						willDrawCell: function (data) {
							for (let i = 0; i < data.cell.text.length; i++) {
								const element = data.cell.text[i];
								if (element.includes('...Observations')) {
									data.cell.text[i] =
										data.cell.text[i].split(
											'...Observations'
										)[1];
								}
							}
						},
					});
				}
				// PREVENT SPLITING THE TABLE
				if (doc.lastAutoTable.finalY >= 260) {
					doc.addPage();
					doc.lastAutoTable.finalY = 0;
				}
			}
			// PAGINATION
			const pageCount = doc.internal.getNumberOfPages();
			doc.setFontSize(10);
			for (var i = 1; i <= pageCount; i++) {
				doc.setPage(i);
				doc.text(
					'Page ' + String(i) + ' of ' + String(pageCount),
					131 - 20,
					318 - 30,
					null,
					null,
					'right'
				);
			}
			// GENERATE THE FINALE PDF
			doc.save(
				'rapport des activités des unités médical mobile (umm)  - ' +
					province +
					' - ' +
					year +
					'.pdf'
			);
		}
		// call the function
		$('#downloadRapportAllPdf').click(function () {
			var today = new Date();
			// DOWNLOAD ALL PDFS
			generateMulPdf(
				$(this).data('region'),
				$(this).data('province'),
				$(this).data('trimestre'),
				today.getFullYear()
			);
		});
	}
	function getDataBeneficierTable(data) {
		var strOut = '';
		for (const csr in data) {
			if (Object.hasOwnProperty.call(data, csr)) {
				if (data[csr].activity && data[csr].activity.length) {
					var include = false;
					for (let i = 0; i < data[csr].activity.length; i++) {
						const element = data[csr].activity[i];
						if (element.typeBeneficier === 'Bénéficiaire') {
							include = true;
						}
					}
					if (include) {
						strOut +=
							'<tr><td rowspan="' +
							data[csr].activity.length +
							'">' +
							csr +
							'</td>';
						strOut += '<td>' + data[csr].activity[0].type + '</td>';
						strOut +=
							'<td>' + data[csr].activity[0].beneficier + '</td>';
						strOut +=
							'<td>' +
							(data[csr].activity[0].observation.length
								? data[csr].activity[0].observation
								: 'Aucune') +
							'</td></tr>';
						//
						for (let i = 1; i < data[csr].activity.length; i++) {
							const activityElement = data[csr].activity[i];
							strOut +=
								'<tr><td>' + activityElement.type + '</td>';
							strOut +=
								'<td>' + activityElement.beneficier + '</td>';
							strOut +=
								'<td>' +
								(activityElement.observation.length
									? activityElement.observation
									: 'Aucune') +
								'</td></tr>';
						}
					}
				}
			}
		}
		if (!strOut.length) {
			return '<tr><td>Aucune</td><td>Aucune</td><td>Aucune</td><td>Aucune</td></tr>';
		}
		return strOut;
	}
	function getDataActeTable(data) {
		var strOut = '';
		for (const csr in data) {
			if (Object.hasOwnProperty.call(data, csr)) {
				if (data[csr].activity && data[csr].activity.length) {
					var include = false;
					for (let i = 0; i < data[csr].activity.length; i++) {
						const element = data[csr].activity[i];
						if (element.typeBeneficier === 'Acte') {
							include = true;
						}
					}
					if (include) {
						strOut +=
							'<tr><td rowspan="' +
							data[csr].activity.length +
							'">' +
							csr +
							'</td>';
						strOut += '<td>' + data[csr].activity[0].type + '</td>';
						strOut +=
							'<td>' + data[csr].activity[0].beneficier + '</td>';
						strOut +=
							'<td>' + data[csr].activity[0].observation.length
								? data[csr].activity[0].observation
								: 'Aucune' + '</td></tr>';
						//
						for (let i = 1; i < data[csr].activity.length; i++) {
							const activityElement = data[csr].activity[i];
							strOut +=
								'<tr><td>' + activityElement.type + '</td>';
							strOut +=
								'<td>' + activityElement.beneficier + '</td>';
							strOut +=
								'<td>' + activityElement.observation.length
									? activityElement.observation
									: 'Aucune' + '</td></tr>';
						}
					}
				}
			}
		}
		if (!strOut.length) {
			return '<tr><td>Aucune</td><td>Aucune</td><td>Aucune</td><td>Aucune</td></tr>';
		}
		return strOut;
	}
	function getValue(data, provinceList) {
		var out = {};
		for (let i = 0; i < provinceList.length; i++) {
			const element = provinceList[i];
			out[element] = data[element];
		}
		return out;
	}
	// VARIABLES
	var data = $('#dataProvince').data('carte'),
		rapport = $('#dataProvince').data('rapport'),
		province = $('#province-chart').data('province'),
		region = $('#data').data('region'),
		provinceList = $('#data').data('list'),
		trimestre = $('#dataProvince').data('trimestre'),
		title = 'Taux de remplissage du rapport - Trimestre ' + trimestre,
		// other
		max = 100,
		scale = [
			'#FF4646',
			'#FFF891',
			'#fcf75a',
			'#a9a403',
			'#7DFE69',
			'#169a01',
			'#0a4600',
		];

	// MAP
	$('#province-map').vectorMap({
		map: 'province',
		series: {
			regions: [
				{
					values: getValue(data, provinceList),
					scale,
					normalizeFunction: 'polynomial',
					max,
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
			if (provinceList.includes(parseInt(code))) {
				label.html(
					`
				<div class="bg-white shadow-sm p-1 rounded">
					<table class="table table-sm table-bordered fs-8 text-center text-dark">
						<tbody>
							<tr>
								<th colspan="3">Province : ${label.html()}</th>
							</tr>
							<tr>
								<th colspan="3">${title} : <span class="fs-7"> <span class="badge bg-5">${
						data[code]
					} %</span></span></th>
							</tr>
						</tbody>
					</table>
					</div>
					`
				);
			}
		},
		onRegionClick: function (e, code) {
			if (provinceList.includes(parseInt(code))) showModal(code);
			else showErrorModal();
		},
	});
	function showErrorModal() {
		$('#modalPlace').empty().append(`
			<div class="modal fade p-0 m-0" id="modalTable" tabindex="-1" aria-labelledby="modalTableLabel" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-body justify-content-between align-items-centre d-flex">
							<span class="modal-title text-dark fw-bold fs-7" id="modalTableLabel">Vous ne pouvez pas voir ce rapport</span>
							<button type="button" class="btn btn-sm p-1 text-body" data-bs-dismiss="modal" aria-label="Close"><ion-icon class="fs-5 align-middle" name="close-outline"></ion-icon></button>
						</div>
					</div>
				</div>
			</div>
			`);
		var modal = new bootstrap.Modal(document.getElementById('modalTable'));
		modal.show();
	}
	// ADD PDR
	function pdrVisiteData(pdrVisite) {
		var out = '';
		console.log(pdrVisite);
		for (const key1 in pdrVisite) {
			const commune = pdrVisite[key1];
			out += `<td rowspan="${Object.size(commune)}">${key1}</td>
						<td>${commune[Object.keys(commune)[0]].pdr}</td>
						<td>${commune[Object.keys(commune)[0]].programme}</td>
						<td>${commune[Object.keys(commune)[0]].realise}</td>
					</tr>`;
			for (let j = 1; j < Object.keys(commune).length; j++) {
				out += `
						<tr>
							<td>${commune[Object.keys(commune)[j]].pdr}</td>
							<td>${commune[Object.keys(commune)[j]].programme}</td>
							<td>${commune[Object.keys(commune)[j]].realise}</td>
						</tr>`;
			}
		}
		if (out === '') {
			out = '<tr><td>Aucune</td><td>Aucune</td><td>0</td><td>0</td></tr>';
		}
		return out;
	}
	// SHOW TABLE
	function showModal(code) {
		var title =
			'Rapport des activités des Unités Médical Mobile (UMM)', provinceElement;
			for (let i = 0; i < province.length; i++) {
				const element = province[i];
				if (code == element.codeProvince) {
					provinceElement = element.province
				}
			}
		$('#modalPlace').empty().append(`
		<div class="modal fade p-0 m-0" id="modalTable" tabindex="-1" aria-labelledby="modalTableLabel" aria-hidden="true">
			<div class="modal-dialog modal-fullscreen">
				<div class="modal-content">
					<div class="modal-header border-0 p-2 bg-5">
						<span class="modal-title text-white fw-bold fs-7" id="modalTableLabel">${title}</span>
						<button type="button" class="btn btn-sm p-1 text-white" data-bs-dismiss="modal" aria-label="Close"><ion-icon class="fs-5 align-middle" name="close-outline"></ion-icon></button>
					</div>
					<div class="modal-body bg-body">
						<div class="row g-3">
							<div class="col-12">
								<button type="button" class="btn btn-sm btn-light"  id="downloadRapportAllPdf" data-header='Rapport de suivi des activités de l’équipe mobile' data-region='${region}' data-province='${provinceElement}'>
									<div class='d-flex align-items-center'>
										<img class="me-2" src="/../../image/pdf.svg", alt="pdf" width="20px">
										<span>PDF</span>
									</div>
								</button>
							</div>
							
							
							<div class="col-12">
								<div class="card">
									<div class="card-body">
										<div class="d-flex align-items-center justify-content-between">
											<div class="d-flex align-items-center fw-bold">
												<ion-icon class="text-1 fs-6 me-2" name="location-outline"></ion-icon><span class="fs-7 text-dark">PDR programmée de visiter</span>
											</div>
										</div>
									</div>
									<div class="card-body">
										<div class="table-responsive">
											<table class="table thisTable table-bordered" id="pdrProgrammeVisite" data-title="PDR programmée de visiter" data-id="pdrProgrammeVisite" data-align="center">
												<tbody>
													<tr>
														<th rowspan="2">Commune</th>
														<th rowspan="2">PDR visité</th>
														<th colspan="2">Sortie</th>
													</tr>
													<tr>
														<th>programmée</th>
														<th>réalisée</th>
													</tr>
													${pdrVisiteData(rapport[code].pdrVisite)}
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
							
							
							<div class="col-12">
								<div class="card">
									<div class="card-body">
										<div class="d-flex align-items-center justify-content-between">
											<div class="d-flex align-items-center fw-bold">
												<ion-icon class="text-1 fs-6 me-2" name="people-circle-outline"></ion-icon><span class="fs-7 text-dark">Population ciblée par l'équipe mobile</span>
											</div>
										</div>
									</div>
									<div class="card-body">
										<div class="table-responsive">
											<table class="table thisTable table-bordered" id="populationCible" data-id="populationCible" data-title="Population ciblée par l'équipe mobile" data-align="left">
												<tbody>
													<tr>
														<th>Population cible</th>
														<td> ${rapport[code].populationCible.populationCible}</td>
													</tr>
													<tr>
														<th>Femmes mariées en age de reproduction</th>
														<td> ${rapport[code].populationCible.fmar}</td>
													</tr>
													<tr>
														<th>Naissances attendus</th>
														<td> ${rapport[code].populationCible.enfant.naissanceAttendu}</td>
													</tr>
													<tr>
														<th>Enfants moins de 1ans</th>
														<td> ${rapport[code].populationCible.enfant.moins1ans}</td>
													</tr>
													<tr>
														<th>Enfants moins de 5ans</th>
														<td> ${rapport[code].populationCible.enfant.moins5ans}</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
							
							
							<div class="col-12">
								<div class="card">
									<div class="card-body">
										<div class="d-flex align-items-center justify-content-between">
											<div class="d-flex align-items-center fw-bold">
												<ion-icon class="text-1 fs-6 me-2" name="people-outline"></ion-icon><span class="fs-7 text-dark">Ressources humaines mobilisées</span>
											</div>
										</div>
									</div>
									<div class="card-body">
										<div class="table-responsive">
											<table class="table thisTable table-bordered" id="ressourceHumainMobile" data-title="Ressources humaines mobilisées" data-id="ressourceHumainMobile" data-align="centre">
												<tbody>
													<tr>
														<th>Médecin</th>
														<th>Infirmier</th>
														<th>Sages femmes</th>
														<th>Technicien</th>
														<th>Chauffeur</th>
														<th>Ressources humaines d'appuie</th>
													</tr>
													<tr>
														<td>${rapport[code].ressourceHumainMobile.medecin}</td>
														<td>${rapport[code].ressourceHumainMobile.infirmier}</td>
														<td>${rapport[code].ressourceHumainMobile.sageFemme}</td>
														<td>${rapport[code].ressourceHumainMobile.technicien}</td>
														<td>${rapport[code].ressourceHumainMobile.chauffeur}</td>
														<td>${rapport[code].ressourceHumainMobile.appuie}</td>
													</tr>
													<tr>
														<th colspan="5">Nombre d’équipe mobile opérationnelle </th>
														<td>${rapport[code].ressourceHumainMobile.emOperationnelle}</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
							
							
							<div class="col-12">
								<div class="card">
									<div class="card-body">
										<div class="d-flex align-items-center justify-content-between">
											<div class="d-flex align-items-center fw-bold">
												<ion-icon class="text-1 fs-6 me-2" name="woman-outline"></ion-icon><span class="fs-7 text-dark">Santé maternelle</span>
											</div>
										</div>
									</div>
									<div class="card-body">
										<div class="table-responsive">
											<table class="table thisTable table-bordered" id="santeMaternelle" data-title="Santé maternelle" data-id="santeMaternelle" data-align="left">
												<tbody>
													<tr>
														<th colspan="3">Nombre de femmes prises en charge</th>
														<td>${rapport[code].santeMaternelle.femmePriseCharge}</td>
													</tr>
													<tr>
														<th rowspan="6" style="vertical-align: middle;">Nombre de consultations prénatales (CPN)</th>
														<th rowspan="3" style="vertical-align: middle;">Nouvelles inscrites</th>
														<th>T1</th>
														<td>${rapport[code].santeMaternelle.cpn.nouvelleInscrite.t1}</td>
													</tr>
													<tr>
														<th>T2</th>
														<td>${rapport[code].santeMaternelle.cpn.nouvelleInscrite.t2}</td>
													</tr>
													<tr>
														<th>T3</th>
														<td>${rapport[code].santeMaternelle.cpn.nouvelleInscrite.t3}</td>
													</tr>
													<tr>
														<th rowspan="3" style="vertical-align: middle;">Anciennes inscrites</th>
														<th>T1</th>
														<td>${rapport[code].santeMaternelle.cpn.ancienneInscrite.t1}</td>
													</tr>
													<tr>
														<th>T2</th>
														<td>${rapport[code].santeMaternelle.cpn.ancienneInscrite.t2}</td>
													</tr>
													<tr>
														<th>T3</th>
														<td>${rapport[code].santeMaternelle.cpn.ancienneInscrite.t3}</td>
													</tr>

													<tr>
														<th colspan="3">Nombre de femmes examinées en post natal</th>
														<td>${rapport[code].santeMaternelle.femmeExaminePostNatal}</td>
													</tr>
													<tr>
														<th colspan="3">Nombre de Grossesses à risque (GAR) dépistées</th>
														<td>${rapport[code].santeMaternelle.garDepiste}</td>
													</tr>
													<tr>
														<th colspan="3">Vaccination antitétanique (VAT)</th>
														<td>${rapport[code].santeMaternelle.vat}</td>
													</tr>
													<tr>
														<th colspan="3">Nombre de femmes référées</th>
														<td>${rapport[code].santeMaternelle.reference}</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
							
							
							
							<div class="col-12">
								<div class="card">
									<div class="card-body">
										<div class="d-flex align-items-center justify-content-between">
											<div class="d-flex align-items-center fw-bold">
												<ion-icon class="text-1 fs-6 me-2" name="accessibility-outline"></ion-icon><span class="fs-7 text-dark">Santé infantile </span>
											</div>
										</div>
									</div>
									<div class="card-body">
										<div class="table-responsive">
											<table class="table thisTable table-bordered" id="santeInfantile" data-title="Santé infantile " data-id="santeInfantile" data-align="left">
												<tbody>
													<tr>
														<th colspan="2">Nombre d’enfants pris en charge</th>
														<td class="text-center">${rapport[code].santeInfantile.enfantPrisesCharge}</td>
													</tr>
													<tr>
														<th rowspan="3" style="vertical-align:middle;">Vaccination</th>
														<th>DTC3-Hib3-HB3 (pentavalent)</th>
														<td class="text-center">${
															rapport[code]
																.santeInfantile
																.vaccination
																.pentavalent
														}</td>
													</tr>
													<tr>
														<th>RR</th>
														<td class="text-center">${rapport[code].santeInfantile.vaccination.rr}</td>
													</tr>
													<tr>
														<th>BCG</th>
														<td class="text-center">${rapport[code].santeInfantile.vaccination.bcg}</td>
													</tr>
													<tr>
														<th colspan="2">Vitamine A (2ème prise)</th>
														<td class="text-center">${rapport[code].santeInfantile.vitamineA}</td>
													</tr>
													<tr>
														<th colspan="2">Vitamine D (2ème prise)</th>
														<td class="text-center">${rapport[code].santeInfantile.vitamineD}</td>
													</tr>
													<tr>
														<th colspan="2">Nombre d’enfants avec insuffisance Pondérale (P/A&lt;-2DS)</th>
														<td class="text-center">${
															rapport[code]
																.santeInfantile
																.enfantsAvecInsuffisancePonderale
														}</td>
													</tr>
													<tr>
														<th colspan="2">Nombre d’enfants avec retard de croissance (T/A&lt;-2DS)</th>
														<td class="text-center">${
															rapport[code]
																.santeInfantile
																.enfantsAvecRetardCroissance
														}</td>
													</tr>
													<tr>
														<th colspan="2">Nombre de cas de diarrhée</th>
														<td class="text-center">${rapport[code].santeInfantile.diarrhe}</td>
													</tr>
													<tr>
														<th colspan="2">Nombre de cas d’infections respiratoires aiguës (IRA)</th>
														<td class="text-center">${rapport[code].santeInfantile.ira}</td>
													</tr>
													<tr>
														<th colspan="2">Nombre des enfants référées</th>
														<td class="text-center">${rapport[code].santeInfantile.reference}</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
							
							<div class="col-12">
								<div class="card">
									<div class="card-body">
										<div class="d-flex align-items-center justify-content-between">
											<div class="d-flex align-items-center fw-bold">
												<ion-icon class="text-1 fs-6 me-2" name="people-circle-outline"></ion-icon><span class="fs-7 text-dark">Planification familiale</span>
											</div>
										</div>
									</div>
									<div class="card-body">
										<div class="table-responsive">
											<table class="table thisTable table-bordered" id="planificationFamiliale" data-title="Planification familiale" data-id="planificationFamiliale" data-align="center">
												<tbody>
													<tr>
														<th colspan="2">Pilule</th>
														<th colspan="2">Progestatifs Injectables</th>
														<th colspan="2">DIU</th>
														<th colspan="2">condom</th>
														<th colspan="2">Références</th>
													</tr>
													<tr>
														<th>NA</th>
														<th>AA</th>
														<th>NA</th>
														<th>AA</th>
														<th>NA</th>
														<th>AA</th>
														<th>NA</th>
														<th>AA</th>
														<th>DIU</th>
														<th>L.T</th>
													</tr>
													<tr>
														<td>${rapport[code].planificationFamiliale.pilule.na}</td>
														<td>${rapport[code].planificationFamiliale.pilule.aa}</td>
														<td>${rapport[code].planificationFamiliale.injectable.na}</td>
														<td>${rapport[code].planificationFamiliale.injectable.aa}</td>
														<td>${rapport[code].planificationFamiliale.diu.na}</td>
														<td>${rapport[code].planificationFamiliale.diu.aa}</td>
														<td>${rapport[code].planificationFamiliale.condom.na}</td>
														<td>${rapport[code].planificationFamiliale.condom.aa}</td>
														<td>${rapport[code].planificationFamiliale.reference.diu}</td>
														<td>${rapport[code].planificationFamiliale.reference.lt}</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
							
							
							<div class="col-12">
								<div class="card">
									<div class="card-body">
										<div class="d-flex align-items-center justify-content-between">
											<div class="d-flex align-items-center fw-bold">
												<ion-icon class="text-1 fs-6 me-2" name="school-outline"></ion-icon><span class="fs-7 text-dark">Santé scolaire</span>
											</div>
										</div>
									</div>
									<div class="card-body">
										<div class="table-responsive">
											<table class="table thisTable table-bordered" id="santeScolaire" data-title="Santé scolaire" data-id="santeScolaire" data-align="left">
												<tbody>
													<tr>
														<th rowspan="2">Etablissements visités</th>
														<th rowspan="2"></th>
														<th rowspan="2">Elèves examinés lors de la VMS</th>
														<th colspan="2">Lutte contre les déficiences visuelles</th>
													</tr>
													<tr>
														<th>Echelle Métrique</th>
														<th>Réfraction automatique</th>
													</tr>
													<tr>
														<td rowspan="2">${rapport[code].santeScolaire.etablissementVisite}</td>
														<th>cible</th>
														<td>${rapport[code].santeScolaire.eleveExamineVms.cible}</td>
														<td>${
															rapport[code]
																.santeScolaire
																.lutteContreDeficienceVisuelle
																.echelleMetrique
																.cible
														}</td>
														<td>${
															rapport[code]
																.santeScolaire
																.lutteContreDeficienceVisuelle
																.refractionAutomatique
																.cible
														}</td>
													</tr>
													<tr>
														<th>réalisation</th>
														<td>${rapport[code].santeScolaire.eleveExamineVms.realisation}</td>
														<td>${
															rapport[code]
																.santeScolaire
																.lutteContreDeficienceVisuelle
																.echelleMetrique
																.realisation
														}</td>
														<td>${
															rapport[code]
																.santeScolaire
																.lutteContreDeficienceVisuelle
																.refractionAutomatique
																.realisation
														}</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
							<div class="col-12">
								<div class="card">
									<div class="col-12">
										<div class="card">
											<div class="card-body">
												<div class="d-flex align-items-center justify-content-between">
													<div class="d-flex align-items-center fw-bold">
														<ion-icon class="text-1 fs-6 me-2" name="pulse-outline"></ion-icon><span class="fs-7 text-dark">Détection précoce des cancers du sein et du col de l’utérus</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="card-body">
										<div class="table-responsive">
											<table class="table thisTable table-bordered" data-align="center" data-title="Détection précoce des cancers du sein et du col de l’utérus" data-id="detectionPrecoceCancer" id="detectionPrecoceCancer">
												<tbody>
													<tr>
														<th></th>
														<th>Détection précoce du cancer du sein</th>
														<th>Détection précoce du cancer du col</th>
													</tr>
													<tr>
														<th>Nombre de femmes examinées</th>
														<td class="text-center">${
															rapport[code]
																.detectionPrecoceCancer
																.femmeExamine
																.cancerSein
														}</td>
														<td class="text-center">${
															rapport[code]
																.detectionPrecoceCancer
																.femmeExamine
																.cancerCol
														}</td>
													</tr>
													<tr>
														<th>Nombre de femmes référées</th>
														<td class="text-center">${
															rapport[code]
																.detectionPrecoceCancer
																.femmeRefere
																.cancerSein
														}</td>
														<td class="text-center">${
															rapport[code]
																.detectionPrecoceCancer
																.femmeRefere
																.cancerCol
														}</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
							<div class="col-12">
								<div class="card">
									<div class="card-body">
										<div class="d-flex align-items-center justify-content-between">
											<div class="d-flex align-items-center fw-bold">
												<ion-icon class="text-1 fs-6 me-2" name="pulse-outline"></ion-icon><span class="fs-7 text-dark">Consultations médicales</span>
											</div>
										</div>
									</div>
									<div class="card-body">
										<div class="table-responsive">
											<table class="table thisTable table-bordered" id="consultationMedical" data-title="Consultations médicales" data-id="consultationMedical" data-align="center">
												<tbody>
													<tr>
														<th rowspan="2"></th>
														<th colspan="2">Consultations réalisées</th>
														<th rowspan="2">Nombre de patients pris en charge par l'équipe mobile</th>
														<th colspan="4">Nombre de patients Référés</th>
													</tr>
													<tr>
														<th>Masculin</th>
														<th>Féminin</th>
														<th>Consultation spécialisée</th>
														<th>Urgence</th>
														<th>Examen De laboratoire</th>
														<th>Examen radiologique</th>
													</tr>
													<tr>
														<th>Moins de 5 ans</th>
														<td>${rapport[code].consultationMedical.consultationRealise.m.moins5ans}</td>
														<td>${rapport[code].consultationMedical.consultationRealise.f.moins5ans}</td>
														<td>${rapport[code].consultationMedical.pecParPem.moins5ans}</td>
														<td>${rapport[code].consultationMedical.reference.consSpec.moins5ans}</td>
														<td>${rapport[code].consultationMedical.reference.urgence.moins5ans}</td>
														<td>${rapport[code].consultationMedical.reference.exLabo.moins5ans}</td>
														<td>${rapport[code].consultationMedical.reference.exRadio.moins5ans}</td>
													</tr>
													<tr>
														<th>Entre 5ans et 18ans</th>
														<td>${
															rapport[code]
																.consultationMedical
																.consultationRealise
																.m
																.entre5ans18ans
														}</td>
														<td>${
															rapport[code]
																.consultationMedical
																.consultationRealise
																.f
																.entre5ans18ans
														}</td>
														<td>${rapport[code].consultationMedical.pecParPem.entre5ans18ans}</td>
														<td>${rapport[code].consultationMedical.reference.consSpec.entre5ans18ans}</td>
														<td>${rapport[code].consultationMedical.reference.urgence.entre5ans18ans}</td>
														<td>${rapport[code].consultationMedical.reference.exLabo.entre5ans18ans}</td>
														<td>${rapport[code].consultationMedical.reference.exRadio.entre5ans18ans}</td>
													</tr>
													<tr>
														<th>Plus de 18 ans</th>
														<td>${rapport[code].consultationMedical.consultationRealise.m.plus18ans}</td>
														<td>${rapport[code].consultationMedical.consultationRealise.f.plus18ans}</td>
														<td>${rapport[code].consultationMedical.pecParPem.plus18ans}</td>
														<td>${rapport[code].consultationMedical.reference.consSpec.plus18ans}</td>
														<td>${rapport[code].consultationMedical.reference.urgence.plus18ans}</td>
														<td>${rapport[code].consultationMedical.reference.exLabo.plus18ans}</td>
														<td>${rapport[code].consultationMedical.reference.exRadio.plus18ans}</td>
													</tr>
													<tr>
														<th>Total</th>
														<td>${
															parseInt(
																rapport[code]
																	.consultationMedical
																	.consultationRealise
																	.m.moins5ans
															) +
															parseInt(
																rapport[code]
																	.consultationMedical
																	.consultationRealise
																	.m
																	.entre5ans18ans
															) +
															parseInt(
																rapport[code]
																	.consultationMedical
																	.consultationRealise
																	.m.plus18ans
															)
														}</td>
														<td>${
															parseInt(
																rapport[code]
																	.consultationMedical
																	.consultationRealise
																	.f.moins5ans
															) +
															parseInt(
																rapport[code]
																	.consultationMedical
																	.consultationRealise
																	.f
																	.entre5ans18ans
															) +
															parseInt(
																rapport[code]
																	.consultationMedical
																	.consultationRealise
																	.f.plus18ans
															)
														}</td>
														<td>${
															parseInt(
																rapport[code]
																	.consultationMedical
																	.pecParPem
																	.moins5ans
															) +
															parseInt(
																rapport[code]
																	.consultationMedical
																	.pecParPem
																	.entre5ans18ans
															) +
															parseInt(
																rapport[code]
																	.consultationMedical
																	.pecParPem
																	.plus18ans
															)
														}</td>
														<td>${
															parseInt(
																rapport[code]
																	.consultationMedical
																	.reference
																	.consSpec
																	.moins5ans
															) +
															parseInt(
																rapport[code]
																	.consultationMedical
																	.reference
																	.consSpec
																	.entre5ans18ans
															) +
															parseInt(
																rapport[code]
																	.consultationMedical
																	.reference
																	.consSpec
																	.plus18ans
															)
														}</td>
														<td>${
															parseInt(
																rapport[code]
																	.consultationMedical
																	.reference
																	.urgence
																	.moins5ans
															) +
															parseInt(
																rapport[code]
																	.consultationMedical
																	.reference
																	.urgence
																	.entre5ans18ans
															) +
															parseInt(
																rapport[code]
																	.consultationMedical
																	.reference
																	.urgence
																	.plus18ans
															)
														}</td>
														<td>${
															parseInt(
																rapport[code]
																	.consultationMedical
																	.reference
																	.exLabo
																	.moins5ans
															) +
															parseInt(
																rapport[code]
																	.consultationMedical
																	.reference
																	.exLabo
																	.entre5ans18ans
															) +
															parseInt(
																rapport[code]
																	.consultationMedical
																	.reference
																	.exLabo
																	.plus18ans
															)
														}</td>
														<td>${
															parseInt(
																rapport[code]
																	.consultationMedical
																	.reference
																	.exRadio
																	.moins5ans
															) +
															parseInt(
																rapport[code]
																	.consultationMedical
																	.reference
																	.exRadio
																	.entre5ans18ans
															) +
															parseInt(
																rapport[code]
																	.consultationMedical
																	.reference
																	.exRadio
																	.plus18ans
															)
														}</td>
													</tr>
													<tr>
														<th colspan="7">Budget estimé en médicaments dispensés</th>
														<td>${rapport[code].consultationMedical.budgetMedicamentDispenseEm}</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
							
							
							<div class="col-12">
								<div class="card">
									<div class="card-body">
										<div class="d-flex align-items-center justify-content-between">
											<div class="d-flex align-items-center fw-bold">
												<ion-icon class="text-1 fs-6 me-2" name="clipboard-outline"></ion-icon><span class="fs-7 text-dark">Maladies dépistées</span>
											</div>
										</div>
									</div>
									<div class="card-body">
										<div class="table-responsive">
											<table class="table thisTable table-bordered" id="maladieDepiste" data-title="Maladies dépistées" data-id="maladieDepiste" data-align="center">
												<tbody>
													<tr>
														<th colspan="2"></th>
														<th style="text-align: center;">Nombre de cas</th>
														<th style="text-align: center;">Nombre de cas PEC</th>
														<th style="text-align: center;">références</th>
													</tr>
													<tr>
														<th colspan="2">Diabète</th>
														<td style="text-align: center;">${rapport[code].maladieDepiste.diabete.cas}</td>
														<td style="text-align: center;">${
															rapport[code]
																.maladieDepiste
																.diabete.casPec
														}</td>
														<td style="text-align: center;">${
															rapport[code]
																.maladieDepiste
																.diabete
																.reference
														}</td>
													</tr>
													<tr>
														<th colspan="2">HTA</th>
														<td style="text-align: center;">${rapport[code].maladieDepiste.hta.cas}</td>
														<td style="text-align: center;">${rapport[code].maladieDepiste.hta.casPec}</td>
														<td style="text-align: center;">${
															rapport[code]
																.maladieDepiste
																.hta.reference
														}</td>
													</tr>
													<tr>
														<th colspan="2">Angine</th>
														<td style="text-align: center;">${rapport[code].maladieDepiste.angine.cas}</td>
														<td style="text-align: center;">${
															rapport[code]
																.maladieDepiste
																.angine.casPec
														}</td>
														<td style="text-align: center;">${
															rapport[code]
																.maladieDepiste
																.angine
																.reference
														}</td>
													</tr>
													<tr>
														<th colspan="2">Caries</th>
														<td style="text-align: center;">${rapport[code].maladieDepiste.carie.cas}</td>
														<td style="text-align: center;">${
															rapport[code]
																.maladieDepiste
																.carie.casPec
														}</td>
														<td style="text-align: center;">${
															rapport[code]
																.maladieDepiste
																.carie.reference
														}</td>
													</tr>
													<tr>
														<th colspan="2">Parodontopathie</th>
														<td style="text-align: center;">${
															rapport[code]
																.maladieDepiste
																.parodontopathie
																.cas
														}</td>
														<td style="text-align: center;">${
															rapport[code]
																.maladieDepiste
																.parodontopathie
																.casPec
														}</td>
														<td style="text-align: center;">${
															rapport[code]
																.maladieDepiste
																.parodontopathie
																.reference
														}</td>
													</tr>
													<tr>
														<th colspan="2">Maladies mentales</th>
														<td style="text-align: center;">${
															rapport[code]
																.maladieDepiste
																.maladieMentale
																.cas
														}</td>
														<td style="text-align: center;">${
															rapport[code]
																.maladieDepiste
																.maladieMentale
																.casPec
														}</td>
														<td style="text-align: center;">${
															rapport[code]
																.maladieDepiste
																.maladieMentale
																.reference
														}</td>
													</tr>
													<tr>
														<th colspan="2">IST</th>
														<td style="text-align: center;">${rapport[code].maladieDepiste.ist.cas}</td>
														<td style="text-align: center;">${rapport[code].maladieDepiste.ist.casPec}</td>
														<td style="text-align: center;">${
															rapport[code]
																.maladieDepiste
																.ist.reference
														}</td>
													</tr>
													<tr>
														<th rowspan="2" style="vertical-align:middle;">RAA</th>
														<th>Avec cardites</th>
														<td style="text-align: center;">${
															rapport[code]
																.maladieDepiste
																.raa
																.avecCardites
																.cas
														}</td>
														<td style="text-align: center;">${
															rapport[code]
																.maladieDepiste
																.raa
																.avecCardites
																.casPec
														}</td>
														<td style="text-align: center;">${
															rapport[code]
																.maladieDepiste
																.raa
																.avecCardites
																.reference
														}</td>
													</tr>
													<tr>
														<th>Sans cardites</th>
														<td style="text-align: center;">${
															rapport[code]
																.maladieDepiste
																.raa
																.sansCardites
																.cas
														}</td>
														<td style="text-align: center;">${
															rapport[code]
																.maladieDepiste
																.raa
																.sansCardites
																.casPec
														}</td>
														<td style="text-align: center;">${
															rapport[code]
																.maladieDepiste
																.raa
																.sansCardites
																.reference
														}</td>
													</tr>
													<tr>
														<th colspan="2">Tuberculose pulmonaire</th>
														<td style="text-align: center;">${
															rapport[code]
																.maladieDepiste
																.tuberculosePolmonaire
																.cas
														}</td>
														<td style="text-align: center;">${
															rapport[code]
																.maladieDepiste
																.tuberculosePolmonaire
																.casPec
														}</td>
														<td style="text-align: center;">${
															rapport[code]
																.maladieDepiste
																.tuberculosePolmonaire
																.reference
														}</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
							<div class="col-12">
								<div class="card">
									<div class="card-body">
										<div class="d-flex align-items-center justify-content-between">
											<div class="d-flex align-items-center fw-bold">
												<ion-icon class="text-1 fs-6 me-2" name="clipboard-outline"></ion-icon><span class="text-dark fs-7">Autre activités</span>
											</div>
										</div>
									</div>
									<div class="card-body">
										<div class="table-responsive">
											<table class='table thisTable table-bordered' id="autreAvtiviteBenefier" data-id="autreAvtiviteBenefier" data-title="Autre activités (Bénéficiaires)" data-align="center">
												<tbody>
													<tr>
														<th>Centre de santé</th>
														<th>Type d’activité</th>
														<th>Nombre de bénéficiaires</th>
														<th>Observations</th>
													</tr>
													${getDataBeneficierTable(rapport[code].autreActivite)}
												</tbody>
											</table>
										</div>
									</div>
									<div class="card-body">
										<div class="table-responsive">
											<table class='table thisTable table-bordered' id="autreAvtiviteActe" data-id="autreAvtiviteActe" data-title="Autre activités (Actes)" data-align="center">
												<tbody>
													<tr>
														<th>Centre de santé</th>
														<th>Type d’activité</th>
														<th>Nombre d’actes</th>
														<th>Observations</th>
													</tr>
													${getDataActeTable(rapport[code].autreActivite)}
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
});
