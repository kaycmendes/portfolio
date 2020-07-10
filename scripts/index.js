new fullpage('#fullpage', {
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
    responsiveWidth: '100%',
    responsiveHeight: '650px',
    sectionsColor: [''],
    lockAnchors: false,
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
    fitToSection: false,
});

//methods
fullpage_api.setAllowScrolling(true);

//prevent tab crash

$(document).keydown(function (e) { var keycode1 = (e.keyCode ? e.keyCode : e.which); if (keycode1 == 0 || keycode1 == 9) { e.preventDefault(); e.stopPropagation(); } });






