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
				len = url.split('/').length - 4,
				outStr = '';
			for (let i = 0; i < len; i++) {
				outStr += '../';
			}
			outStr += 'image/ms.png';
			return outStr;
		}
		// ------------------------------------------------- download multiple pdfs
		function generateMulPdf(header, direction, delegation, year) {
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
				img.src = getPng();
				// HEADER
				doc.text(header, 70, 50);
			} else {
				var img = new Image();
				img.src = getPng();
				// HEADER
				doc.text(header, 40, 50);
			}
			// IMAGE HEADER
			doc.addImage(img, 'PNG', 30, 15, 0, 0);
			// IDENTITY
			doc.setFontSize(12);
			doc.text('Direction Régionale de : ' + direction, 15, 60);
			doc.text('Délégation de : ' + delegation, 15, 66);
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
			delegation = $(this).data('province');
			// DOWNLOAD ALL PDFS
			generateMulPdf(header, direction, delegation, today.getFullYear());
			// DOWNLOAD ONE PDF
		});
	}

	// VARIABLES
	var data = $('#dataProvince').data('carte'),
		planAction = $('#dataProvince').data('planaction'),
		province = $('#province-chart').data('province'),
		provinceList = $('#data').data('list'),
		title = "Taux de remplissage du plan d'action",
		// other
		max = 100,
		scale = ['#FE8989', '#FCFE89', '#6ED369'];
	function getValue(data, provinceList) {
		var out = {}
		for (let i = 0; i < provinceList.length; i++) {
			const element = provinceList[i];
			out[element] = data[element]
		}
		return out
	}
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
min:0,
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
	// ADD RESSOURCES
	function ressourceData(ressource) {
		var out = '';
		for (const key in ressource) {
			var res = ressource[key];
			out += `<tr>
						<td rowspan="${res.length}">${key}</td>
						<td>${res[0].csr.name}</td>
						<td>${res[0].csr.category}</td>
						<td>${res[0].type}</td>
						<td>${res[0].age}</td>
						<td>${res[0].budget.kmsParcourir}</td>
						<td>${res[0].budget.besoinCarburant}</td>
						<td>${res[0].besoinUsm}</td>
						<td>${res[0].observation.length ? res[0].observation : 'Aucune'}</td>
					</tr>`;
			for (let i = 1; i < res.length; i++) {
				const resElement = res[i];
				out += `<tr>
							<td>${resElement.csr.name}</td>
							<td>${resElement.csr.category}</td>
							<td>${resElement.type}</td>
							<td>${resElement.age}</td>
							<td>${resElement.budget.kmsParcourir}</td>
							<td>${resElement.budget.besoinCarburant}</td>
							<td>${resElement.besoinUsm}</td>
							<td>${resElement.observation.length ? resElement.observation : 'Aucune'}</td>
						</tr>`;
			}
		}
		if (out === '') {
			out =
				'<tr><td>Aucune</td><td>Aucune</td><td>Aucune</td><td>Aucune</td><td>0</td><td>0</td><td>0</td><td>0</td><td>Aucune</td></tr>';
		}
		return out;
	}
	// obj size
	function objectSize(obj) {
		var out = 0;
		for (const key in obj) {
			var array = obj[key];
			for (let i = 0; i < array.length; i++) {
				const element = array[i];
				out += element.localite.length;
			}
		}
		return out;
	}
	function objectSize2(obj) {
		var out = 0;
		for (const key in obj) {
			var array = obj[key];
			out += array.length;
		}
		return out;
	}
	// array size
	function arraySize(array) {
		var out = 0;
		for (let i = 0; i < array.length; i++) {
			const element = array[i];
			out += element.localite.length;
		}
		return out;
	}
	// ADD PDR
	function pdrData(pdr) {
		var out = '';
		for (const key in pdr) {
			var commune = pdr[key];
			out += `<tr>
							<td rowspan="${arraySize(commune)}">${key}</td>
							<td rowspan="${commune[0].localite.length}">${commune[0].pdr}</td>
							<td>${commune[0].localite[0].localite}</td>
							<td>${commune[0].localite[0].distance}</td>
							<td>${commune[0].localite[0].accessibility}</td>
							<td>${commune[0].localite[0].niveau}</td>
						</tr>
						`;

			for (let i = 1; i < commune[0].localite.length; i++) {
				out += `
						<tr>
							<td>${commune[0].localite[i].localite}</td>
							<td>${commune[0].localite[i].distance}</td>
							<td>${commune[0].localite[i].accessibility}</td>
							<td>${commune[0].localite[i].niveau}</td>
						</tr>`;
			}

			for (let j = 1; j < commune.length; j++) {
				const pdrElement = commune[j];

				out += `<tr>
								<td rowspan="${pdrElement.localite.length}">${pdrElement.pdr}</td>
								<td>${pdrElement.localite[0].localite}</td>
								<td>${pdrElement.localite[0].distance}</td>
								<td>${pdrElement.localite[0].accessibility}</td>
								<td>${pdrElement.localite[0].niveau}</td>
							</tr>`;

				for (let i = 1; i < pdrElement.localite.length; i++) {
					out += `
						<tr>
							<td>${pdrElement.localite[i].localite}</td>
							<td>${pdrElement.localite[i].distance}</td>
							<td>${pdrElement.localite[i].accessibility}</td>
							<td>${pdrElement.localite[i].niveau}</td>
						</tr>`;
				}
			}
		}
		if (out === '') {
			out =
				'<tr><td>Aucune</td><td>Aucune</td><td>Aucune</td><td>0</td><td>Aucune</td><td>Aucune</td></tr>';
		}
		return out;
	}
	// ADD PDR
	function programmeData(programme) {
		var out = '';
		for (const key in programme) {
			const commune = programme[key];
			out += `<tr>
							<td rowspan="${commune.length}">${key}</td>
							<td>${commune[0].pdr}</td>
							<td>${commune[0].t1}</td>
							<td>${commune[0].t2}</td>
							<td>${commune[0].t3}</td>
							<td>${commune[0].t4}</td>
						</tr>`;
			for (let j = 1; j < commune.length; j++) {
				out += `
						<tr>
							<td>${commune[j].pdr}</td>
							<td>${commune[j].t1}</td>
							<td>${commune[j].t2}</td>
							<td>${commune[j].t3}</td>
							<td>${commune[j].t4}</td>
						</tr>`;
			}
		}
		if (out === '') {
			out =
				'<tr><td>Aucune</td><td>Aucune</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>';
		}
		return out;
	}
	// SHOW TABLE
	function showModal(code) {
		var title, pro, reg;
		for (let i = 0; i < province.length; i++) {
			const provinceElement = province[i];
			if (provinceElement.codeProvince == code) {
				pro = provinceElement.province;
				reg = provinceElement.region;
			}
		}
		console.log(reg);
		title = "Plan d'action de la province " + pro;

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
								<button type="button" class="btn btn-sm btn-light downloadPdf"  data-header='Plan d’action de santé mobile' data-region='${reg}' data-province='${pro}'>
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
														<th>Enfants moins de 1ans</th>
														<td>${planAction[code].population.enfant.moins1ans}</td>
													</tr>
													<tr>
														<th>Enfants moins de 5ans</th>
														<td>${planAction[code].population.enfant.moins5ans}</td>
													</tr>
													<tr>
														<th>Naissances attendues</th>
														<td>${planAction[code].population.naissancesAttendues}</td>
													</tr>
													<tr>
														<th>Nombre de FAR</th>
														<td>${planAction[code].population.far}</td>
													</tr>
													<tr>
														<th>Nombre de FMAR</th>
														<td>${planAction[code].population.fmar}</td>
													</tr>
													<tr>
														<th>Femmes enceintes</th>
														<td>${planAction[code].population.femmeEnceinte}</td>
													</tr>
													<tr>
														<th>Distance moyenne à la route goudronnée la plus proche</th>
														<td>${planAction[code].population.distanceMoyenneRouteProche}</td>
													</tr>
													<tr>
														<th>Indice synthétique de fécondité</th>
														<td>${planAction[code].population.indiceSynthetiqueFecondite}</td>
													</tr>
													<tr>
														<th>Personnes âgées</th>
														<td>${planAction[code].population.personneAge}</td>
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
														<th rowspan="2">Commune</th>
														<th rowspan="2">PDR à visiter</th>
														<th colspan="4">Liste des localités</th>
													</tr>
													<tr>
														<th>Localité</th>
														<th>Distance</th>
														<th>Accessibilité</th>
														<th>Niveau</th>
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
											<ion-icon class="text-1 fs-10 me-2" name="ellipse"></ion-icon><span class="fs-7 text-dark">moyens de mobilité du MS</span>
										</div>
										<div class="table-responsive">
											<table class="table thisTable table-bordered" id="ressourceMs" data-title="Situation des moyens de mobilité du MS" data-id="ressourceMs" data-align="center">
												<tbody>
													<tr>
														<th rowspan="2">CS</th>
														<th colspan="2">CSR</th>
														<th colspan="2">Informations sur le véhicule</th>
														<th rowspan="2">kms à parcourir</th>
														<th rowspan="2">besoin en carburant</th>
														<th rowspan="2">Besoins en usm</th>
														<th rowspan="2">Observation</th>
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
											<ion-icon class="text-1 fs-10 me-2" name="ellipse"></ion-icon><span class="fs-7 text-dark">moyens de mobilité de la Commune</span>
										</div>
										<div class="table-responsive">
											<table class="table thisTable table-bordered" id="ressourceCommune" data-title="Situation des moyens de mobilité de la Commune" data-id="ressourceCommune" data-align="center">
												<tbody>
													<tr>
														<th rowspan="2">CS</th>
														<th colspan="2">CSR</th>
														<th colspan="2">Informations sur le véhicule</th>
														<th rowspan="2">kms à parcourir</th>
														<th rowspan="2">besoin en carburant</th>
														<th rowspan="2">Besoins en usm</th>
														<th rowspan="2">Observation</th>
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
														<th>Appuie</th>
													</tr>
													<tr>
														<th>Mode Fix</th>
														<td>${planAction[code].ressourceHumain.fix.medecin}</td>
														<td>${planAction[code].ressourceHumain.fix.infirmier}</td>
														<td>${planAction[code].ressourceHumain.fix.sageFemme}</td>
														<td>${planAction[code].ressourceHumain.fix.technicien}</td>
														<td>${planAction[code].ressourceHumain.fix.chauffeur}</td>
														<td>${planAction[code].ressourceHumain.fix.appuie}</td>
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
		pdfListner();
	}
	$('.thisProvince').addClass('d-none');
});
