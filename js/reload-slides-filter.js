function initializeSlides() {
  $("#slider-showroom").responsiveSlides({
    auto: false,
    pager: true,
    nav: true,
    speed: 500,
    maxwidth: 800,
    namespace: "centered-btns",
  });

  $("#slider-photos").responsiveSlides({
    auto: false,
    pager: true,
    nav: true,
    speed: 500,
    maxwidth: 800,
    namespace: "centered-btns",
  });

  $("#slider-taiwan").responsiveSlides({
    auto: false,
    pager: true,
    nav: true,
    speed: 500,
    maxwidth: 800,
    namespace: "centered-btns",
  });

  $("#slider-investeren").responsiveSlides({
    auto: false,
    pager: true,
    nav: true,
    speed: 500,
    maxwidth: 800,
    namespace: "centered-btns",
  });

  $("#slider-afstamming").responsiveSlides({
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
