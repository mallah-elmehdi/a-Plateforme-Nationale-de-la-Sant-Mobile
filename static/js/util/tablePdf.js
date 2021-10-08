$(document).ready(function () {
	// --------------------------------------- download one pdf
	console.log();

	function getPng() {
		var url = document.URL,
			len = url.split('/').length - 4, outStr = '';
		for (let i = 0; i < len; i++) {
			outStr += '../' 
		}
		outStr += 'image/ms.png'
		return outStr
	}
	function generateOnePdf(
		header,
		id,
		title,
		align,
		direction,
		delegation,
		year
	) {
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
		// TABLE TITLE
		doc.text('1 - ' + title, 15, 82);
		// TABLE
		doc.autoTable({
			html: '#' + id,
			startY: 85,
			theme: 'grid',
			styles: {
				halign: align,
				textColor: [0, 0, 0],
				font: 'times',
			},
		});
		// DOWMLOAD
		doc.save(title.split(' ').join('-').toLowerCase() + '.pdf');
	}
	// ------------------------------------------------- download multiple pdfs
	function generateMulPdf(header, direction, delegation, year) {
		// VARIABLES
		var listTable = [];
		// GET ALL TABLES
		console.log($('table.thisTable'));

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
			direction = $(this).data('direction'),
			delegation = $(this).data('delegation');
		// DOWNLOAD ALL PDFS
		if (id === 'all') {
			generateMulPdf(header, direction, delegation, today.getFullYear());
		}
		// DOWNLOAD ONE PDF
		else {

			generateOnePdf(
				header,
				id,
				$(this).data('title'),
				$(this).data('align'),
				direction,
				delegation,
				today.getFullYear()
			);
		}
	});
});
