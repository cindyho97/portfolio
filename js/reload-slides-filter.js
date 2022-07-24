function initializeSlides() {
  $("#slider1").responsiveSlides({
    auto: false,
    pager: true,
    nav: true,
    speed: 500,
    maxwidth: 800,
    namespace: "centered-btns",
  });

  $("#slider2").responsiveSlides({
    auto: false,
    pager: true,
    nav: true,
    speed: 500,
    maxwidth: 800,
    namespace: "centered-btns",
  });
}

function reloadSlides() {
  $(".centered-btns_tabs").remove(); //remove old point tabs
  $(".centered-btns_nav").remove(); //remove old arrows
  initializeSlides();
}
