$(function () {
  $(".see-more-speakers").hide();
  $("#see-less-speakers-button").hide();

  $(".see-more-participants").hide();
  $("#see-less-participants-button").hide();

  $(".see-more-volunteers").hide();
  $("#see-less-volunteers-button").hide();

  $("#see-more-speakers-button").click(function () {
    $(".see-more-speakers").show();
    $("#see-more-speakers-button").hide();
    $("#see-less-speakers-button").show();
  });

  $("#see-less-speakers-button").click(function () {
    $(".see-more-speakers").hide();
    $("#see-more-speakers-button").show();
    $("#see-less-speakers-button").hide();
  });

  $("#see-less-participants-button").click(function () {
    $(".see-more-participants").hide();
    $("#see-more-participants-button").show();
    $("#see-less-participants-button").hide();
  });

  $("#see-more-participants-button").click(function () {
    $(".see-more-participants").show();
    $("#see-more-participants-button").hide();
    $("#see-less-participants-button").show();
  });

  $("#see-less-participants-button").click(function () {
    $(".see-more-participants").hide();
    $("#see-more-participants-button").show();
    $("#see-less-participants-button").hide();
  });

  $("#see-more-volunteers-button").click(function () {
    $(".see-more-volunteers").show();
    $("#see-more-volunteers-button").hide();
    $("#see-less-volunteers-button").show();
  });

  $("#see-less-volunteers-button").click(function () {
    $(".see-more-volunteers").hide();
    $("#see-more-volunteers-button").show();
    $("#see-less-volunteers-button").hide();
  });
});
