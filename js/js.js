/* global $ */
$(function () {
    "use strict";
    $(".toggler").on("click", function () {
        $(".navbar").slideToggle();
    });
});