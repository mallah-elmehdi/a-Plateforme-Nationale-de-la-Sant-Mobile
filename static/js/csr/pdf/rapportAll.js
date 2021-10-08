$(document).ready(function () {
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
	function generateMulPdf(region, province, csr, category, trimestre, createdat) {
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
		doc.text('Rapport des activités des Unités Médical Mobile (UMM)', 45, 50);
		// SET FONT SIZE FOR THE TEXT
		doc.setFontSize(12);
		// INSERT THE YEAR
		doc.text('Année : ' + createdat.getFullYear(), 90, 56);
		// IDENTITY
		doc.text('Direction Régionale de la Santé : ' + region, 15, 66);
		doc.text('Délégation du Ministère de la Santé : ' + province, 15, 72);
		doc.text('Centre de santé (' + category + ') : ' + csr, 15, 78);
		doc.text('Trimester : ' + trimestre, 15, 84);
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
								data.cell.text[i] = data.cell.text[i].split('...Observations')[1]
							}
						}
					}
				});
			} else {
				doc.text(i + 1 + '- ' + listTable[i].title, 15, 94);
				doc.autoTable({
					html: '#' + listTable[i].id,
					startY: 97,
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
								data.cell.text[i] = data.cell.text[i].split('...Observations')[1]
							}
						}
					}
				});
			}
			// PREVENT SPLITING THE TABLE
			if (doc.lastAutoTable.finalY >= 260) {
				doc.addPage();
				doc.lastAutoTable.finalY = 0
			};
		}
		// PAGINATION
		const pageCount = doc.internal.getNumberOfPages();
		doc.setFontSize(10);
		for(var i = 1; i <= pageCount; i++) {
			doc.setPage(i);
			doc.text('Page ' + String(i) + ' of ' + String(pageCount),131-20,318-30,null,null,"right");
		}
		// GENERATE THE FINALE PDF
		doc.save(
			"rapport des activités des unités médical mobile (umm)  - " + csr + ' - ' + createdat.getFullYear() + '.pdf'
		);
	}
	// call the function
	$('#downloadRapportAllPdf').click(function () {
		// DOWNLOAD ALL PDFS
		generateMulPdf(
			$(this).data('region'),
			$(this).data('province'),
			$(this).data('csr'),
			$(this).data('category'),
			$(this).data('trimestre'),
			new Date($(this).data('createdat')),
		);
	});
});
