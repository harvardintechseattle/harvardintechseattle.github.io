$(function () {

    // Enable tooltip
    $('[data-toggle="tooltip"]').tooltip()

    // == Search / Filters ==

    $('.podcast-list').hide();

    // Show grid + reset
    $('#grid-button').click(function () {
        $('.podcast-grid').show();
        $('.podcast-list').hide();

        $('.2021').show();
        $('.2020').show();
    });

    // Show list + reset
    $('#list-button').click(function () {
        $('.podcast-grid').hide();
        $('.podcast-list').show();

        $('.2021').show();
        $('.2020').show();
    });

    $(".search-button").click(function () {
        var attr = $(this).attr("data-li");

        if (attr == "2020") {
            $(".2021").hide();
            $(".2020").show();
            
        } else if (attr == "2021") {
            $(".2021").show();
            $(".2020").hide();

        } else {
            $(".2021").show();
            $(".2020").show();
        }
    });
});