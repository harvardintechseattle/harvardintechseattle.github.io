$(function () {

    // == Scroll button ==
    // $('.intro .button').click(function () {
    //     document.querySelector('.latest-Webinars').scrollIntoView({
    //         behavior: 'smooth'
    //     });
    // });


    // == Search / Filters ==

    $('#webinar-list').hide();
    $('.remaining-webinars').hide();

    // Reset filters and see more button
    $('#grid-button').click(function () {
        $('.2021').show();
        $('.2020').show();

        $('#webinar-grid').show();
        $('.remaining-webinars').hide();
        $('#webinar-list').hide();
        $('.see-more-button-row').show();
    });

    // Reset list to show all webinars
    $('#list-button').click(function () {
        $('.2021').show();
        $('.2020').show();

        $('#webinar-grid').hide();
        $('#webinar-list').show();
        $('.see-more-button-row').hide();
    });

    $(".search-button").click(function () {
        var attr = $(this).attr("data-li");
        $('.see-more-button-row').hide();

        if (attr == "2020") {
            $(".2021").hide();
            $('.remaining-webinars').show();

            $("." + attr).show();
        } else if (attr == "2021") {
            $(".2020").hide();
            $("." + attr).show();
        } else {
            $(".2020").show();
            $(".2021").show();
        }
    });

    $('.see-more-webinars').hide();
    $('#see-more-button').click(function () {
        $('.remaining-webinars').show();
        $('.see-more-button-row').hide();
    });



    // == Read More Modals ==

    // Digital assets
    // Set iframe attributes when the show instance method is called
    $("#digitalAsset").on("show.bs.modal", function (event) {
        let button = $(event.relatedTarget); // Button that triggered the modal
        let url = button.data("video"); // Extract url from data-video attribute

        $(this).find("iframe").attr({
            src: url,
            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        });
    });

    // Remove iframe attributes when the modal has finished being hidden from the user
    $("#digitalAsset").on("hidden.bs.modal", function () {
        $("#digitalAsset iframe").removeAttr("src allow");
    });

    // Future of travel
    $("#futureOfTravel").on("show.bs.modal", function (event) {
        let button = $(event.relatedTarget);
        let url = button.data("video");

        $(this).find("iframe").attr({
            src: url,
            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        });
    });

    $("#futureOfTravel").on("hidden.bs.modal", function () {
        $("#futureOfTravel iframe").removeAttr("src allow");
    });

    // Tech innovation: US defense
    $("#techDefense").on("show.bs.modal", function (event) {
        let button = $(event.relatedTarget);
        let url = button.data("video");

        $(this).find("iframe").attr({
            src: url,
            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        });
    });

    $("#techDefense").on("hidden.bs.modal", function () {
        $("#techDefense iframe").removeAttr("src allow");
    });

    // Tech innovation: politics
    $("#techPolitics").on("show.bs.modal", function (event) {
        let button = $(event.relatedTarget);
        let url = button.data("video");

        $(this).find("iframe").attr({
            src: url,
            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-inPicture"
        });
    });

    $("#techPolitics").on("hidden.bs.modal", function () {
        $("#techPolitics iframe").removeAttr("src allow");
    });

    // Smart city
    $("#smartCity").on("show.bs.modal", function (event) {
        let button = $(event.relatedTarget);
        let url = button.data("video");

        $(this).find("iframe").attr({
            src: url,
            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        });
    });

    $("#smartCity").on("hidden.bs.modal", function () {
        $("#smartCity iframe").removeAttr("src allow");
    });

    // Racism
    $("#racism").on("show.bs.modal", function (event) {
        let button = $(event.relatedTarget);
        let url = button.data("video");

        $(this).find("iframe").attr({
            src: url,
            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        });
    });

    $("#racism").on("hidden.bs.modal", function () {
        $("#racism iframe").removeAttr("src allow");
    });

    // Covid-19 vaccine
    $("#covidVaccine").on("show.bs.modal", function (event) {
        let button = $(event.relatedTarget);
        let url = button.data("video");

        $(this).find("iframe").attr({
            src: url,
            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        });
    });

    $("#covidVaccine").on("hidden.bs.modal", function () {
        $("#covidVaccine iframe").removeAttr("src allow");
    });

    // Covid-19 mental health
    $("#covidMentalHealth").on("show.bs.modal", function (event) {
        let button = $(event.relatedTarget);
        let url = button.data("video");

        $(this).find("iframe").attr({
            src: url,
            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        });
    });

    $("#covidMentalHealth").on("hidden.bs.modal", function () {
        $("#covidMentalHealth iframe").removeAttr("src allow");
    });

    // Covid-19 telemedicine
    $("#covidTelemedicine").on("show.bs.modal", function (event) {
        let button = $(event.relatedTarget);
        let url = button.data("video");

        $(this).find("iframe").attr({
            src: url,
            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        });
    });

    $("#covidTelemedicine").on("hidden.bs.modal", function () {
        $("#covidTelemedicine iframe").removeAttr("src allow");
    });

    // Covid-19 reopening economy
    $("#covidReopening").on("show.bs.modal", function (event) {
        let button = $(event.relatedTarget);
        let url = button.data("video");

        $(this).find("iframe").attr({
            src: url,
            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        });
    });

    $("#covidReopening").on("hidden.bs.modal", function () {
        $("#covidReopening iframe").removeAttr("src allow");
    });

    // Edutech solutions
    $("#edutech").on("show.bs.modal", function (event) {
        let button = $(event.relatedTarget);
        let url = button.data("video");

        $(this).find("iframe").attr({
            src: url,
            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        });
    });

    $("#edutech").on("hidden.bs.modal", function () {
        $("#edutech iframe").removeAttr("src allow");
    });

});