$(document).ready(function() {
    $('#select').click(function() {
        var checkboxes = $('input:checkbox:checked').length;
        $("#xyz").text(' You are similar to Eziz about '+parseInt((checkboxes/60)*100)+'%');
    })
});
