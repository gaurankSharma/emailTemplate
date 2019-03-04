$(".menu-column .menu-row").on("click", function(e) {
  const name = $(this).attr("name");
  $(".view-body .view-body-row").addClass("d-none");
  $(`.view-body .view-${name}`).removeClass("d-none");
  $(".body-header .header-title").text(name);
  $(".menu-column .menu-row").removeClass("active-menu");
  $(this).addClass("active-menu");
  if (name === "csv") {
    $(".header-buttton").removeClass("d-none");
  } else {
    $(".header-buttton").addClass("d-none");
  }
});
