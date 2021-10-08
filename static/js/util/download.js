$(document).ready(function () {
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
	function generateOnePdf(
		id,
		region,
	) {
		// INIT THE DOCUMENT
		var doc = new jsPDF('p', 'mm', 'a4');
		var img = new Image();
		img.src = getPng();
		doc.addImage(img, 'PNG', 30, 15, 0, 0);
		doc.setFont('times');
		doc.setFontSize(15);
		doc.text('Liste des emails et mots de passe des Régions', 60, 50);
		doc.setFontSize(12);
		doc.text('Direction Régionale de : ' + region, 15, 55);
		// TABLE
		doc.autoTable({
			html: '#rr',
			startY: 60,
			theme: 'grid',
			styles: {
				halign: 'centre',
				textColor: [0, 0, 0],
				font: 'times',
			},
		});
		// DOWMLOAD
		doc.save('dp.pdf');
	}
	// call thr function
	$('.downloadPdf').click(function () {
		$('.thisTable').each(function () {
			generateOnePdf($(this).data('id'), $(this).data('region'))
		})
	});
});
