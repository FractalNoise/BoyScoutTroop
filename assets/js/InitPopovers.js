$(document).ready(function () {
  $(".hasPop").popover({ trigger: "click", html: true }); //Init popover for elements with class hasPop
  $(".nav-tabs").find("li").click(function (evt) {$(".hasPop").popover('hide');});
});
