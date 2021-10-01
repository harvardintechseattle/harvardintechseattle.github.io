$(function () {
	$(".page-1").show();
	$(".page-2").hide();
	$(".page-3").hide();
	$(".page-4").hide();

    $(".btn").click(function(){
		var attr = $(this).attr("data-li");

        if(attr == "page-1"){
			$(".page-1").show();
			$(".page-2").hide();
			$(".page-3").hide();
			$(".page-4").hide();
		}
		else if(attr == "page-2"){
			$(".page-1").hide();
			$(".page-2").show();
			$(".page-3").hide();
			$(".page-4").hide();
		}
        else if(attr == "page-3"){
			$(".page-1").hide();
			$(".page-2").hide();
			$(".page-3").show();
			$(".page-4").hide();
		}
		else if(attr == "page-4"){
			$(".page-1").hide();
			$(".page-2").hide();
			$(".page-3").hide();
			$(".page-4").show();
			
		}
    })    
});