new fullpage('#fullpage', {
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: false,
    controlArrows: false,
    sectionsColor: [''],
    lockAnchors: false,
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'slidePage','fourthPage'],
    fitToSection: false,
    slidesNavigation: true
});

//methods
fullpage_api.setAllowScrolling(true);

//prevent tab crash

$(document).keydown(function (e) { var keycode1 = (e.keyCode ? e.keyCode : e.which); if (keycode1 == 0 || keycode1 == 9) { e.preventDefault(); e.stopPropagation(); } });






