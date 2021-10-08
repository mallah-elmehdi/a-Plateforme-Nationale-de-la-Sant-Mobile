jQuery(document).ready(function () {
	// fuctions
	// variable
    var document = $('#data').data('document');
	// logic
	$.getJSON('../../json/localite.json', function (data) {
        // init select
        $('.select-localite').append(`
            <option selected disabled>Choisissez une localité</option>
        `);
        // variables
        var localiteList = []
        // loop commune
		for (let i = 0; i < data.length; i++) {
		    if (document.commune === data[i].commune) {
                localiteList.push(data[i].localite)
		    }
        }
        // loop cs
        if (!localiteList.length) {
            for (let i = 0; i < data.length; i++) {
                if (document.cs === data[i].cs) {
                    localiteList.push(data[i].localite)
                }
            }
        }
        // loop province
        if (!localiteList.length) {
            for (let i = 0; i < data.length; i++) {
                if (document.province === data[i].province) {
                    localiteList.push(data[i].localite)
                }
            }
        }
        // sort the list
        localiteList.sort()
        // append options
		for (let i = 0; i < localiteList.length; i++) {
            $('.select-localite').append(`
                <option value="${localiteList[i]}">${localiteList[i]}</option>
            `);
        }
        // $("#localite").select2();
    }).fail(function (error) {
		console.log(error);
    });
});
