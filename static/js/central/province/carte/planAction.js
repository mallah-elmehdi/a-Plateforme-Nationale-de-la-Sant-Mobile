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
		function generateMulPdf(region, province, year) {
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
				'Plan d’action des unités médicales mobiles (UMM)',
				50,
				50
			);
			// SET FONT SIZE FOR THE TEXT
			doc.setFontSize(12);
			// INSERT THE YEAR
			doc.text('Année : ' + year, 90, 56);
			// IDENTITY
			doc.text('Direction Régionale de la Santé : ' + region, 15, 66);
			doc.text('Délégation du Ministère de la Santé : ' + province, 15, 72);
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
					doc.text(i + 1 + '- ' + listTable[i].title, 15, 82);
					doc.autoTable({
						html: '#' + listTable[i].id,
						startY: 85,
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
				"plan d'action des unités médicales mobiles (umm) - " +
					province +
					' - ' +
					year +
					'.pdf'
			);
		}
		// call the function
		$('#downloadPlanActionAllPdf').click(function () {
			const today = new Date();
			// DOWNLOAD ALL PDFS
			generateMulPdf(
				$(this).data('region'),
				$(this).data('province'),
				today.getFullYear()
			);
		});
	}
	function arraySize(array) {
		var out = 0;
		for (let i = 0; i < array.length; i++) {
			const element = array[i];
			out += element.localite.length;
		}
		return out;
	}
	// GET THE RESSOURCE
	function ressourceData(ressource) {
		var strOut = '';
		for (const cs in ressource) {
			if (Object.hasOwnProperty.call(ressource, cs)) {
				const vehicules = ressource[cs];
				strOut +=
					'<tr><td rowspan="' +
					vehicules.length +
					'">' +
					cs +
					'</td>';
				strOut += '<td>' + vehicules[0].csr.name + '</td>';
				strOut += '<td>' + vehicules[0].csr.category + '</td>';
				strOut += '<td>' + vehicules[0].type + '</td>';
				strOut += '<td>' + vehicules[0].age + '</td></tr>';
				for (let i = 1; i < vehicules.length; i++) {
					const vehicule = vehicules[i];
					strOut += '<tr><td>' + vehicule.csr.name + '</td>';
					strOut += '<td>' + vehicule.csr.category + '</td>';
					strOut += '<td>' + vehicule.type + '</td>';
					strOut += '<td>' + vehicule.age + '</td></tr>';
				}
			}
		}
		if (strOut === '') {
			strOut =
				'<tr><td>Aucune</td><td>Aucune</td><td>Aucune</td><td>Aucune</td><td>0</td><td>0</td><td>0</td><td>0</td><td>Aucune</td></tr>';
		}
		return strOut;
	}
	function pdrData(pdr) {
		var strOut = '';
		for (const key in pdr) {
			var commune = pdr[key];
			strOut += `<tr>
							<td rowspan="${arraySize(commune)}">${key}</td>
							<td rowspan="${commune[0].localite.length}">${commune[0].pdr}</td>
							<td>${commune[0].localite[0]}</td>
						</tr>
						`;

			for (let i = 1; i < commune[0].localite.length; i++) {
				strOut += `
						<tr>
							<td>${commune[0].localite[i]}</td>
						</tr>`;
			}

			for (let j = 1; j < commune.length; j++) {
				const pdrElement = commune[j];

				strOut += `<tr>
								<td rowspan="${pdrElement.localite.length}">${pdrElement.pdr}</td>
								<td>${pdrElement.localite[0]}</td>
							</tr>`;

				for (let i = 1; i < pdrElement.localite.length; i++) {
					strOut += `
						<tr>
							<td>${pdrElement.localite[i]}</td>
						</tr>`;
				}
			}
		}
		if (strOut === '') {
			strOut =
				'<tr><td>Aucune</td><td>Aucune</td><td>Aucune</td><td>0</td><td>Aucune</td><td>Aucune</td></tr>';
		}
		return strOut;
	}

	// PDR DATA
	function programmeData(programme) {
		var strOut = '';
		for (const cs in programme) {
			if (Object.hasOwnProperty.call(programme, cs)) {
				const pdrs = programme[cs];
				strOut +=
					'<tr><td rowspan="' + pdrs.length + '">' + cs + '</td>';
				strOut += '<td>' + pdrs[0].pdr + '</td>';
				strOut += '<td>' + pdrs[0].t1 + '</td>';
				strOut += '<td>' + pdrs[0].t2 + '</td>';
				strOut += '<td>' + pdrs[0].t3 + '</td>';
				strOut += '<td>' + pdrs[0].t4 + '</td></tr>';
				for (let i = 1; i < pdrs.length; i++) {
					const pdr = pdrs[i];
					strOut += '<tr><td>' + pdr.pdr + '</td>';
					strOut += '<td>' + pdr.t1 + '</td>';
					strOut += '<td>' + pdr.t2 + '</td>';
					strOut += '<td>' + pdr.t3 + '</td>';
					strOut += '<td>' + pdr.t4 + '</td></tr>';
				}
			}
		}
		if (strOut === '') {
			strOut =
				'<tr><td>Aucune</td><td>Aucune</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>';
		}
		return strOut;
	}
	// SHOW TABLE
	function showModal(planAction, code) {
		var regionElement, provinceElement
		for (let i = 0; i < province.length; i++) {
			const element = province[i];
			if (element.codeProvince == code) {
				regionElement = element.region
				provinceElement = element.province
			}
		}
		$('#modalPlace').empty().append(`
				<div class="modal fade p-0 m-0" id="modalTable" tabindex="-1" aria-labelledby="modalTableLabel" aria-hidden="true">
					<div class="modal-dialog modal-fullscreen">
						<div class="modal-content">
							<div class="modal-header border-0 p-2 bg-5">
								<span class="modal-title text-white fw-bold fs-7" id="modalTableLabel">Plan d’action des unités médicales mobiles (UMM) de la province ${provinceElement}</span>
								<button type="button" class="btn btn-sm p-1 text-white" data-bs-dismiss="modal" aria-label="Close"><ion-icon class="fs-5 align-middle" name="close-outline"></ion-icon></button>
							</div>
							<div class="modal-body bg-body">
								<div class="row g-3">
									<div class="col-12">
										<button type="button" class="btn btn-sm btn-light" id="downloadPlanActionAllPdf" data-region="${regionElement}" data-province="${provinceElement}">
											<div class='d-flex align-items-center'>
												<img class="me-2" src="/../../image/pdf.svg", alt="pdf" width="20px">
												<span>PDF</span>
											</div>
										</button>
									</div>
									<div class="col-12">
										<div class="card">
											<div class="card-body">
												<div class="d-flex align-items-center">
													<ion-icon class='text-1 fs-6 me-2' name='people-circle-outline'></ion-icon>
													<span class="fs-7 text-dark">Population à couvrir</span>
												</div>
											</div>
											<div class="card-body">
												<div class="table-responsive">
													<table class='table thisTable table-bordered' id='population' data-title='Population à couvrir' data-id='population' data-align='left'>
														<tbody>
															<tr>
																<th>Population rurale</th>
																<td>${planAction[code].population.population.rurale}</td>
															</tr>
															<tr>
																<th>Population cible</th>
																<td>${planAction[code].population.population.cible}</td>
															</tr>
															<tr>
																<th>Population habitant à moins de 3km</th>
																<td>${planAction[code].population.population.habitantMoins3km}</td>
															</tr>
															<tr>
																<th>Population habitant entre 3km et 6km</th>
																<td>${planAction[code].population.population.habitantEntre3km6km}</td>
															</tr>
															<tr>
																<th>Population habitant entre 6km et 10km</th>
																<td>${planAction[code].population.population.habitantEntre6km10km}</td>
															</tr>
															<tr>
																<th>Population habitant à plus de 10km</th>
																<td>${planAction[code].population.population.habitantPlus10km}</td>
															</tr>
															<tr>
																<th>Distance moyenne à la route goudronnée la plus proche</th>
																<td>${planAction[code].population.distanceMoyenneRouteProche}</td>
															</tr>
															<tr>
																<th>Naissances attendues</th>
																<td>${planAction[code].population.enfant.naissancesAttendues}</td>
															</tr>
															<tr>
																<th>Enfants moins de 1ans</th>
																<td>${planAction[code].population.enfant.moins1ans}</td>
															</tr>
															<tr>
																<th>Enfants moins de 5ans</th>
																<td>${planAction[code].population.enfant.moins5ans}</td>
															</tr>
															<tr>
																<th>Nombre de FAR</th>
																<td>${planAction[code].population.femme.far}</td>
															</tr>
															<tr>
																<th>Nombre de FMAR</th>
																<td>${planAction[code].population.femme.fmar}</td>
															</tr>
															<tr>
																<th>Femmes enceintes</th>
																<td>${planAction[code].population.femme.femmeEnceinte}</td>
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
												<div class="d-flex align-items-center fw-bold">
													<ion-icon class="text-1 fs-6 me-2" name="location-outline"></ion-icon><span class="fs-7 text-dark">Points de rassemblement à couvrir</span>
												</div>
											</div>
											<div class="card-body">
												<div class="table-responsive">
													<table class="table thisTable table-bordered" id="pdrCover" data-title="Points de rassemblement à couvrir" data-id="pdrCover" data-align="center">
														<tbody>
															<tr>
																<th>Commune</th>
																<th>PDR à visiter</th>
																<th>Localité</th>
															</tr>
															${pdrData(planAction[code].pdr)}
														</tbody>
													</table>
												</div>
											</div>
										</div>
									</div>
		
									<div class="col-12">
										<div class="card">
											<div class="card-body">
												<div class="d-flex align-items-center fw-bold">
													<ion-icon class="text-1 fs-6 me-2" name="list-outline"></ion-icon><span class="fs-7 text-dark">Programme prévisionnel des UMM</span>
												</div>
											</div>
											<div class="card-body">
												<div class="table-responsive">
													<table class="table thisTable table-bordered" id="programme" data-title="Programme prévisionnel des UMM" data-id="programme" data-align="center">
														<tbody>
															<tr>
																<th rowspan="2">Commune</th>
																<th rowspan="2">PDR à visiter</th>
																<th colspan="4">Nombre des UMM programmées</th>
															</tr>
															<tr>
																<th>T1</th>
																<th>T2</th>
																<th>T3</th>
																<th>T4</th>
															</tr>
															${programmeData(planAction[code].programme)}
														</tbody>
													</table>
												</div>
											</div>
										</div>
									</div>
		
									<div class="col-12">
										<div class="card">
											<div class="card-body">
												<div class="d-flex align-items-center fw-bold">
													<ion-icon class="text-1 fs-6 me-2" name="car-outline"></ion-icon><span class="fs-7 text-dark">Situation des moyens de mobilité</span>
												</div>
											</div>
											<div class="card-body">
												<div class="d-flex align-items-center mb-3">
													<ion-icon class="text-1 fs-10 me-2" name="ellipse"></ion-icon><span class="fs-7 text-dark">Moyens de mobilité du Ministère de la Santé</span>
												</div>
												<div class="table-responsive">
													<table class="table thisTable table-bordered" id="ressourceMs" data-title="Situation des moyens de mobilité du Ministère de la Santé" data-id="ressourceMs" data-align="center">
														<tbody>
															<tr>
																<th rowspan="2">CS</th>
																<th colspan="2">Centre de santé</th>
																<th colspan="2">Informations sur le véhicule</th>
															</tr>
															<tr>
																<th>Nom</th>
																<th>Catégorie</th>
																<th>Type</th>
																<th>Age</th>
															</tr>
															${ressourceData(planAction[code].ressource.ms)}
														</tbody>
													</table>
												</div>
												<div class="d-flex align-items-center my-3">
													<ion-icon class="text-1 fs-10 me-2" name="ellipse"></ion-icon><span class="fs-7 text-dark">Moyens de mobilité de la Commune</span>
												</div>
												<div class="table-responsive">
													<table class="table thisTable table-bordered" id="ressourceCommune" data-title="Situation des moyens de mobilité de la Commune" data-id="ressourceCommune" data-align="center">
														<tbody>
															<tr>
																<th rowspan="2">CS</th>
																<th colspan="2">Centre de santé</th>
																<th colspan="2">Informations sur le véhicule</th>
															</tr>
															<tr>
																<th>Nom</th>
																<th>Catégorie</th>
																<th>Type</th>
																<th>Age</th>
															</tr>
															${ressourceData(planAction[code].ressource.commune)}
														</tbody>
													</table>
												</div>
												<div class="d-flex align-items-center my-3">
													<ion-icon class="text-1 fs-10 me-2" name="ellipse"></ion-icon><span class="fs-7 text-dark">Moyens de mobilité d'une organisation non gouvernementale (ONG)</span>
												</div>
												<div class="table-responsive">
													<table class="table thisTable table-bordered" id="ressourceCommune" data-title="Situation des moyens de mobilité d'une organisation non gouvernementale (ONG)" data-id="ressourceCommune" data-align="center">
														<tbody>
															<tr>
																<th rowspan="2">CS</th>
																<th colspan="2">Centre de santé</th>
																<th colspan="2">Informations sur le véhicule</th>
															</tr>
															<tr>
																<th>Nom</th>
																<th>Catégorie</th>
																<th>Type</th>
																<th>Age</th>
															</tr>
															${ressourceData(planAction[code].ressource.commune)}
														</tbody>
													</table>
												</div>
											</div>
										</div>
									</div>
		
									<div class="col-12">
										<div class="card">
											<div class="card-body">
												<div class="d-flex align-items-center fw-bold">
													<ion-icon class="text-1 fs-6 me-2" name="people-outline"></ion-icon><span class="fs-7 text-dark">Ressources humaines à mobiliser</span>
												</div>
											</div>
											<div class="card-body">
												<div class="table-responsive">
													<table class="table thisTable table-bordered" id="ressourceHumain" data-title="Ressources humaines à mobiliser" data-id="ressourceHumain" data-align="center">
														<tbody>
															<tr>
																<th></th>
																<th>Médecin</th>
																<th>Infirmière(er)</th>
																<th>Sage Femme</th>
																<th>Technicien</th>
																<th>Chauffeur</th>
																<th>Ressources humaines d'appuie</th>
															</tr>
															<tr>
																<th>Mode Fixe</th>
																<td>${planAction[code].ressourceHumain.fixe.medecin}</td>
																<td>${planAction[code].ressourceHumain.fixe.infirmier}</td>
																<td>${planAction[code].ressourceHumain.fixe.sageFemme}</td>
																<td>${planAction[code].ressourceHumain.fixe.technicien}</td>
																<td>${planAction[code].ressourceHumain.fixe.chauffeur}</td>
																<td>${planAction[code].ressourceHumain.fixe.appuie}</td>
															</tr>
															<tr>
																<th>Mode Mobile</th>
																<td>${planAction[code].ressourceHumain.mobile.medecin}</td>
																<td>${planAction[code].ressourceHumain.mobile.infirmier}</td>
																<td>${planAction[code].ressourceHumain.mobile.sageFemme}</td>
																<td>${planAction[code].ressourceHumain.mobile.technicien}</td>
																<td>${planAction[code].ressourceHumain.mobile.chauffeur}</td>
																<td>${planAction[code].ressourceHumain.mobile.appuie}</td>
															</tr>
															<tr>
																<th class="text-start" colspan="6"> Nombre d’équipes mobile opérationnelle</th>
																<td>${planAction[code].ressourceHumain.mobile.emOperationnelle}</td>
															</tr>
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
						<span class="modal-title text-dark fw-bold fs-7" id="modalTableLabel">vous ne pouvez pas voir ce plan d'action</span>
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
	var data = $('#dataProvince').data('carte'),
		planAction = $('#dataProvince').data('planaction'),
		province = $('#province-chart').data('province'),
		title = 'Taux de remplissage du plan d\'action',
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
		];;
	// MAP
	$('#province-map').vectorMap({
		map: 'province',
		series: {
			regions: [
				{
					values: data,
					scale,
					normalizeFunction: 'polynomial',
					max,
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
		},
		onRegionClick: function (e, code) {
			showModal(planAction, code);
		},
	});

	$('.thisProvince').addClass('d-none');
});
