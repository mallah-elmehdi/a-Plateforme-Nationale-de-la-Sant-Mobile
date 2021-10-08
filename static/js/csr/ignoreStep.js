jQuery(document).ready(function () {
	// click
	$('#ignoreStep').on('click', function () {		
		$(
			'#etablissementVisite, '+
			'#eleveExamineVmsCible, '+
			'#eleveExamineVmsRealisation, '+
			'#lutteContreDeficienceVisuelleEchelleMetriqueCible, '+
			'#lutteContreDeficienceVisuelleEchelleMetriqueRealisation, '+
			'#lutteContreDeficienceVisuelleRefractionAutomatiqueCible, '+
			'#lutteContreDeficienceVisuelleRefractionAutomatiqueRealisation'
		).removeAttr('disabled').val(0)
		$('#santeScolaireForm').submit()
	});
});
