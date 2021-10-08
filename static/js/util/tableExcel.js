$(document).ready(function () {
    // download excel
    function generateExcel(id, title) {
        $('#' + id).table2excel({
            name: title,
            filename: title.split(' ').join('-'),
            fileext: ".xls",
            // preserveColors: true
        }); 
    }
    // click
    $('.downloadExcel').click(function() {
        var id = $(this).data('id')
        var title = $(this).data('title')
        generateExcel(id, title)
    })
})