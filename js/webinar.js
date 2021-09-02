$(function () {
    $('#webinar-list').hide();

    // Reset filters and see more button
    $('#grid-button').click(function () {
        $('.2021').show();
        $('.2020').show();

        $('#webinar-grid').show();
        $('#webinar-list').hide();
        $('.see-more-webinars').hide();
        $('.see-more-button-row').show();
    });
    $('#list-button').click(function () {
        $('#webinar-grid').hide();
        $('#webinar-list').show();
        $('.see-more-button-row').hide();
    });

    $(".search-button").click(function(){
		var attr = $(this).attr("data-li");

        $('.see-more-webinars').show();
        $('.see-more-button-row').hide();

		if(attr == "2020"){
            $(".webinar-item").hide();
			$("." + attr).show();
		}
		else if(attr == "2021"){
            $(".webinar-item").hide();
			$("." + attr).show();
		}
		else{
			$(".webinar-item").show();
		}
	});

    $('.see-more-webinars').hide();
    $('#see-more-button').click(function () {
        $('.see-more-webinars').show();
        $('.see-more-button-row').hide();
    });

    // Read More Modal
    
    // Set iframe attributes when the show instance method is called
    $("#videoModal").on("show.bs.modal", function (event) {
        let button = $(event.relatedTarget); // Button that triggered the modal
        let url = button.data("video"); // Extract url from data-video attribute

        $(this).find("iframe").attr({
            src: url,
            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        });
    });

    // Remove iframe attributes when the modal has finished being hidden from the user
    $("#videoModal").on("hidden.bs.modal", function () {
        $("#videoModal iframe").removeAttr("src allow");
    });
});