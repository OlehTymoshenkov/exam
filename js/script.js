'use strict';
$(document).ready(function () {
    $('.autoplay').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
    });
    jQuery('.main-6__lightbox-item').lightzoom();
});
