$(document).ready(function () {
	Object.size = function (obj) {
		var size = 0,
			key;
		for (key in obj) {
			if (obj.hasOwnProperty(key)) size++;
		}
		return size;
	};
	function pdfListner() {
		// --------------------------------------- download one pdf
		function getPng() {
			var url = document.URL,
				len = url.split('/').length - 4, outStr = '';
			for (let i = 0; i < len; i++) {
				outStr += '../' 
			}
			outStr += 'image/ms.png'
			return outStr
		}
		// ------------------------------------------------- download multiple pdfs
		function generateMulPdf(header, direction, year) {
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
			// INIT THE DOCUMENT
			var doc = new jsPDF('p', 'mm', 'a4');
			// SET FONT STYLE
			doc.setFont('times');
			doc.setFontSize(15);
			if (header === 'Plan d’action de santé mobile') {
				var img = new Image();
				img.src = getPng()
				// HEADER
				doc.text(header, 70, 50);
			} else {
				var img = new Image();
				img.src = getPng();
				// HEADER
				doc.text(header, 50, 50);
			}
			// IMAGE HEADER
			doc.addImage(img, 'PNG', 30, 15, 0, 0);
			// IDENTITY
			doc.setFontSize(12);
			doc.text('Direction Régionale de : ' + direction, 15, 60);
			doc.text('Trimestre : ' + trimestre, 15, 66);
			doc.text('Année : ' + year, 15, 72);
			// ADD ALL TABLES
			for (let i = 0; i < listTable.length; i++) {
				doc.setFontSize(12);
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
					});
				}
			}
			doc.save(header.split(' ').join('-').toLowerCase() + '.pdf');
		}
		// call thr function
		$('.downloadPdf').click(function () {
			var id = $(this).data('id'),
				header = $(this).data('header'),
				today = new Date(),
				direction = $(this).data('region');
			// DOWNLOAD ALL PDFS
			generateMulPdf(header, direction, today.getFullYear());
			// DOWNLOAD ONE PDF
		});
	};
	
	// VARIABLES
	var data = $('#dataRegion').data('carte'),
		rapport = $('#dataRegion').data('rapport'),
		region = $('#region-chart').data('region'),
		trimestre = $('#dataRegion').data('trimestre'),
		title = 'Taux de remplissage du rapport - Trimestre ' + trimestre,
		// other
		max = 100,
		scale = ['#FE8989', '#FCFE89', '#6ED369'];
	// MAP
	$('#region-map').vectorMap({
		map: 'region',
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
				'stroke-width': 8,
			},
			hover: {
				stroke: '#000000',
				'stroke-width': 8,
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
								<th colspan="3">${label.html()}</th>
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
			showModal(code);
		},
	});
	// obj size
	function objectSize(obj) {
		var out = 0;
		for (const key in obj) {
			var obj1 = obj[key];
			out += Object.size(obj1)
		}
		return out;
	}
	function objectSize2(obj) {
		var out = 0;
		for (const key in obj) {
			var array = obj[key];
			out += array.length
		}
		return out;
	}
	// ADD PDR
	function autreActiviteData(autreActivite) {
		var out = '';
		for (const key in autreActivite) {
			var province = autreActivite[key];
			out += `<tr>
						<td rowspan="${objectSize2(province)}">${key}</td>`;
			for (const key1 in province) {
				const commune = province[key1];
				out += `<td rowspan="${commune.length}">${key1}</td>
						<td>${commune[0].type}</td>
						<td>${commune[0].beneficier}</td>
						<td>${commune[0].observation}</td>
					</tr>`;
				for (let j = 1; j < commune.length; j++) {
						out += `
						<tr>
							<td>${commune[j].type}</td>
							<td>${commune[j].beneficier}</td>
							<td>${commune[j].observation}</td>
						</tr>`;
				}
			}
		}
		if (out === '') {
			out = '<tr><td>Aucune</td><td>Aucune</td><td>Aucune</td><td>0</td><td>Aucune</td></tr>'
		}
		return out;
	}
	// ADD PDR
	function pdrVisiteData(pdrVisite) {
		var out = '';
		for (const key in pdrVisite) {
			var province = pdrVisite[key];
			out += `<tr>
						<td rowspan="${objectSize(province)}">${key}</td>`;
			for (const key1 in province) {
				const commune = province[key1];
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
		}
		if (out === '') {
			out = '<tr><td>Aucune</td><td>Aucune</td><td>Aucune</td><td>0</td><td>0</td></tr>'
		}
		return out;
	}
	// SHOW TABLE
	function showModal(code) {
		var title, reg;
		for (let i = 0; i < region.length; i++) {
			const regionElement = region[i];
			if (regionElement.codeRegion == code) {
				reg =  regionElement.region;
			}
		}
		title = "Rapport de la région " + reg + ' - Trimestre ' + trimestre;

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
								<button type="button" class="btn btn-sm btn-light downloadPdf"  data-header='Rapport de suivi des activités de l’équipe mobile' data-region='${reg}'>
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
														<th rowspan="2">Province</th>
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
														<th>Enfants moins de 1ans</th>
														<td> ${rapport[code].populationCible.enfant.moins1ans}</td>
													</tr>
													<tr>
														<th>Enfants moins de 5ans</th>
														<td> ${rapport[code].populationCible.enfant.moins5ans}</td>
													</tr>
													<tr>
														<th>Naissances attendus</th>
														<td> ${rapport[code].populationCible.naissanceAttendu}</td>
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
														<th>Appuie</th>
													</tr>
													<tr>
														<td>${rapport[code].ressourceHumainMobile.ressourcesHumaineMobilise.medecin}</td>
														<td>${rapport[code].ressourceHumainMobile.ressourcesHumaineMobilise.infirmier}</td>
														<td>${rapport[code].ressourceHumainMobile.ressourcesHumaineMobilise.sageFemme}</td>
														<td>${rapport[code].ressourceHumainMobile.ressourcesHumaineMobilise.technicien}</td>
														<td>${rapport[code].ressourceHumainMobile.ressourcesHumaineMobilise.chauffeur}</td>
														<td>${rapport[code].ressourceHumainMobile.ressourcesHumaineMobilise.appuie}</td>
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
														<th colspan="2">Nombre de femmes prises en charge</th>
														<td>${rapport[code].santeMaternelle.femmePriseCharge}</td>
													</tr>
													<tr>
														<th rowspan="2" style="vertical-align: middle;">Nombre de consultations prénatales (CPN)</th>
														<th>Nouvelles inscrites</th>
														<td>${rapport[code].santeMaternelle.cpn.nouvelleInscrite}</td>
													</tr>
													<tr>
														<th>Autres consultations</th>
														<td>${rapport[code].santeMaternelle.cpn.autreConsultation}</td>
													</tr>
													<tr>
														<th colspan="2">Nombre de femmes examinées en post natal</th>
														<td>${rapport[code].santeMaternelle.femmeExaminePostNatal}</td>
													</tr>
													<tr>
														<th colspan="2">Nombre de Grossesses à risque (GAR) dépistées</th>
														<td>${rapport[code].santeMaternelle.garDepiste}</td>
													</tr>
													<tr>
														<th colspan="2">VAT</th>
														<td>${rapport[code].santeMaternelle.vat}</td>
													</tr>
													<tr>
														<th colspan="2">Référence</th>
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
														<td>${rapport[code].santeInfantile.enfantPrisesCharge}</td>
													</tr>
													<tr>
														<th rowspan="2" style="vertical-align:middle;">Vaccination</th>
														<th>DTC3-Hib3-HB3 (pentavalent)</th>
														<td>${rapport[code].santeInfantile.vaccination.dtc3Hib3}</td>
													</tr>
													<tr>
														<th>VAR</th>
														<td>${rapport[code].santeInfantile.vaccination.var}</td>
													</tr>
													<tr>
														<th colspan="2">Vitamine A (2ème prise)</th>
														<td>${rapport[code].santeInfantile.vitamineA}</td>
													</tr>
													<tr>
														<th colspan="2">Vitamine D (2ème prise)</th>
														<td>${rapport[code].santeInfantile.vitamineD}</td>
													</tr>
													<tr>
														<th colspan="2">Nombre de pesées</th>
														<td>${rapport[code].santeInfantile.pesee}</td>
													</tr>
													<tr>
														<th colspan="2">Nombre de cas de diarrhée</th>
														<td>${rapport[code].santeInfantile.diarrhe}</td>
													</tr>
													<tr>
														<th colspan="2">Nombre de cas d’infections respiratoires aiguës (IRA)</th>
														<td>${rapport[code].santeInfantile.ira}</td>
													</tr>
													<tr>
														<th colspan="2">Référence</th>
														<td>${rapport[code].santeInfantile.reference}</td>
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
														<th rowspan="2">Elèves vus</th>
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
														<td rowspan="2">${rapport[code].santeScolaire.visite.eleveVue}</td>
														<th>cible</th>
														<td>${rapport[code].santeScolaire.eleveExamineVms.cible}</td>
														<td>${rapport[code].santeScolaire.lutteContreDeficienceVisuelle.echelleMetrique.cible}</td>
														<td>${rapport[code].santeScolaire.lutteContreDeficienceVisuelle.refractionAutomatique.cible}</td>
													</tr>
													<tr>
														<th>réalisation</th>
														<td>${rapport[code].santeScolaire.eleveExamineVms.realisation}</td>
														<td>${rapport[code].santeScolaire.lutteContreDeficienceVisuelle.echelleMetrique.realisation}</td>
														<td>${rapport[code].santeScolaire.lutteContreDeficienceVisuelle.refractionAutomatique.realisation}</td>
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
														<th>Cons spéc</th>
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
														<th>Plus de 5 ans</th>
														<td>${rapport[code].consultationMedical.consultationRealise.m.plus5ans}</td>
														<td>${rapport[code].consultationMedical.consultationRealise.f.plus5ans}</td>
														<td>${rapport[code].consultationMedical.pecParPem.plus5ans}</td>
														<td>${rapport[code].consultationMedical.reference.consSpec.plus5ans}</td>
														<td>${rapport[code].consultationMedical.reference.urgence.plus5ans}</td>
														<td>${rapport[code].consultationMedical.reference.exLabo.plus5ans}</td>
														<td>${rapport[code].consultationMedical.reference.exRadio.plus5ans}</td>
													</tr>
													<tr>
														<th>Total</th>
														<td>${parseInt(rapport[code].consultationMedical.consultationRealise.m.plus5ans) + parseInt(rapport[code].consultationMedical.consultationRealise.m.moins5ans)}</td>
														<td>${parseInt(rapport[code].consultationMedical.consultationRealise.f.plus5ans) + parseInt(rapport[code].consultationMedical.consultationRealise.f.moins5ans)}</td>
														<td>${parseInt(rapport[code].consultationMedical.pecParPem.plus5ans) + parseInt(rapport[code].consultationMedical.pecParPem.moins5ans)}</td>
														<td>${parseInt(rapport[code].consultationMedical.reference.consSpec.plus5ans) + parseInt(rapport[code].consultationMedical.reference.consSpec.moins5ans)}</td>
														<td>${parseInt(rapport[code].consultationMedical.reference.urgence.plus5ans) + parseInt(rapport[code].consultationMedical.reference.urgence.moins5ans)}</td>
														<td>${parseInt(rapport[code].consultationMedical.reference.exLabo.plus5ans) + parseInt(rapport[code].consultationMedical.reference.exLabo.moins5ans)}</td>
														<td>${parseInt(rapport[code].consultationMedical.reference.exRadio.plus5ans) + parseInt(rapport[code].consultationMedical.reference.exRadio.moins5ans)}</td>
													</tr>
													<tr>
														<th colspan="7">Budget en médicaments dispensés par l’équipe mobile</th>
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
													<td style="text-align: center;">${rapport[code].maladieDepiste.diabete.casPec}</td>
													<td style="text-align: center;">${rapport[code].maladieDepiste.diabete.reference}</td>
												</tr>
												<tr>
													<th colspan="2">HTA</th>
													<td style="text-align: center;">${rapport[code].maladieDepiste.hta.cas}</td>
													<td style="text-align: center;">${rapport[code].maladieDepiste.hta.casPec}</td>
													<td style="text-align: center;">${rapport[code].maladieDepiste.hta.reference}</td>
												</tr>
												<tr>
													<th colspan="2">Angine</th>
													<td style="text-align: center;">${rapport[code].maladieDepiste.angine.cas}</td>
													<td style="text-align: center;">${rapport[code].maladieDepiste.angine.casPec}</td>
													<td style="text-align: center;">${rapport[code].maladieDepiste.angine.reference}</td>
												</tr>
												<tr>
													<th colspan="2">Caries</th>
													<td style="text-align: center;">${rapport[code].maladieDepiste.carie.cas}</td>
													<td style="text-align: center;">${rapport[code].maladieDepiste.carie.casPec}</td>
													<td style="text-align: center;">${rapport[code].maladieDepiste.carie.reference}</td>
												</tr>
												<tr>
													<th colspan="2">Parodontopathie</th>
													<td style="text-align: center;">${rapport[code].maladieDepiste.parodontopathie.cas}</td>
													<td style="text-align: center;">${rapport[code].maladieDepiste.parodontopathie.casPec}</td>
													<td style="text-align: center;">${rapport[code].maladieDepiste.parodontopathie.reference}</td>
												</tr>
												<tr>
													<th colspan="2">Maladies mentales</th>
													<td style="text-align: center;">${rapport[code].maladieDepiste.maladieMentale.cas}</td>
													<td style="text-align: center;">${rapport[code].maladieDepiste.maladieMentale.casPec}</td>
													<td style="text-align: center;">${rapport[code].maladieDepiste.maladieMentale.reference}</td>
												</tr>
												<tr>
													<th colspan="2">IST</th>
													<td style="text-align: center;">${rapport[code].maladieDepiste.ist.cas}</td>
													<td style="text-align: center;">${rapport[code].maladieDepiste.ist.casPec}</td>
													<td style="text-align: center;">${rapport[code].maladieDepiste.ist.reference}</td>
												</tr>
												<tr>
													<th rowspan="2" style="vertical-align:middle;">RAA</th>
													<th>Avec cardites</th>
													<td style="text-align: center;">${rapport[code].maladieDepiste.raa.avecCardites.cas}</td>
													<td style="text-align: center;">${rapport[code].maladieDepiste.raa.avecCardites.casPec}</td>
													<td style="text-align: center;">${rapport[code].maladieDepiste.raa.avecCardites.reference}</td>
												</tr>
												<tr>
													<th>Sans cardites</th>
													<td style="text-align: center;">${rapport[code].maladieDepiste.raa.sansCardites.cas}</td>
													<td style="text-align: center;">${rapport[code].maladieDepiste.raa.sansCardites.casPec}</td>
													<td style="text-align: center;">${rapport[code].maladieDepiste.raa.sansCardites.reference}</td>
												</tr>
												<tr>
													<th rowspan="2" style="vertical-align:middle;">Cancer</th>
													<th>Sein</th>
													<td style="text-align: center;">${rapport[code].maladieDepiste.cancer.sein.cas}</td>
													<td style="text-align: center;">${rapport[code].maladieDepiste.cancer.sein.casPec}</td>
													<td style="text-align: center;">${rapport[code].maladieDepiste.cancer.sein.reference}</td>
												</tr>
												<tr>
													<th>Col</th>
													<td style="text-align: center;">${rapport[code].maladieDepiste.cancer.col.cas}</td>
													<td style="text-align: center;">${rapport[code].maladieDepiste.cancer.col.casPec}</td>
													<td style="text-align: center;">${rapport[code].maladieDepiste.cancer.col.reference}</td>
												</tr>
												<tr>
													<th rowspan="2" style="vertical-align:middle;">Tuberculose</th>
													<th>Pulmonaire</th>
													<td style="text-align: center;">${rapport[code].maladieDepiste.tuberculose.polmonaire.cas}</td>
													<td style="text-align: center;">${rapport[code].maladieDepiste.tuberculose.polmonaire.casPec}</td>
													<td style="text-align: center;">${rapport[code].maladieDepiste.tuberculose.polmonaire.reference}</td>
												</tr>
												<tr>
													<th>Extra pulmonaire</th>
													<td style="text-align: center;">${rapport[code].maladieDepiste.tuberculose.extraPolmonaire.cas}</td>
													<td style="text-align: center;">${rapport[code].maladieDepiste.tuberculose.extraPolmonaire.casPec}</td>
													<td style="text-align: center;">${rapport[code].maladieDepiste.tuberculose.extraPolmonaire.reference}</td>
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
										<table class="table thisTable table-bordered" id="autreActivity" data-title="Autre activités" data-id="autreActivity" data-align="center">
											<tbody>
												<tr>
													<th>Province</th>
													<th>Commune</th>
													<th>Type d’activité</th>
													<th>Nombre de bénéficieras</th>
													<th>Observations</th>
												</tr>
												${autreActiviteData(rapport[code].autreActivite)}
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
		pdfListner()
	}
});
