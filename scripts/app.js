var $ = jQuery.noConflict();

function initialise() {
    // Language data
	var langID = 0;
    translatePage(langID);
    setTimeout(function () {
        $(".owl-carousel img").each(function(i, elem) {
            var img = $(elem);
            var div = $("<div />").css({
                background: "url(" + img.attr("src") + ") no-repeat",
                "background-position": "center center",
                "background-attachment": "inherit",
                "width": "100%",
                "height": "350px",
                "background-size": "cover",
                "display": "block"
            });
            div.html(img.attr("alt"));
            div.addClass("item top-img");
            img.replaceWith(div);
        });
    }, 500);
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: false,
        center: true,
        margin: 0,
        lazyLoad: true,
        animateIn: true,
        navSpeed: 20,
        nav: true,
        autoplay: true,
        touchDrag: true,
        mouseDrag: true
    });
	return false;
};

$(document).ready(function () {
    setTimeout(function () {
        initialise();
    }, 200);
});