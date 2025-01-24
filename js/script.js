$(document).ready(() => {
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3700,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
});

//startUp animation

$(function(){
    // let mask = $("<div></div>").css({top: `-${$("nav").innerHeight()}px`}).addClass("su-mask");

    // let aut = $("<p></p>").text("AUT").addClass("su-aut");

    // let text = $("<p></p>").text("Get the highest education with us").addClass("su-text");
    
    // mask.append(text);
    // mask.append(aut);
    // $("body").append(mask);

    // setTimeout(function(){
    //     mask.remove();
    //     $("body").removeClass("su-body");
    // }, 5000);
});

// row 4

let hlPointer = 0;
function hlInterval() {
    $("#highlights .tab-content div").removeClass("active").removeClass("show");
    $("#highlights .list-group a").removeClass("active");
    for(let i = 0; i < $("#highlights .list-group a").length; i++) {
        if($("#highlights .list-group a")[i] == document.activeElement) {
            hlPointer = i;
        }
    }
    $("#highlights .list-group a").blur();
    hlPointer++;
    if(hlPointer == $("#highlights .list-group a").length){
        hlPointer = 0;
    }
    $(`#highlights .tab-content div:nth-child(${hlPointer + 1})`).addClass("active").addClass("show");
    $(`#highlights .list-group a:nth-child(${hlPointer + 1})`).addClass("active");
}
let hlTimer = setInterval(hlInterval, 3000);
$("#highlights .tab-content div").mouseover(function(){
    clearInterval(hlTimer);
});
$("#highlights .tab-content div").mouseout(function(){
    hlTimer = setInterval(hlInterval, 3000);
});

$("#highlights .list-group a").mouseover(function(){
    clearInterval(hlTimer);
});
$("#highlights .list-group a").mouseout(function(){
    hlTimer = setInterval(hlInterval, 3000);
});

// navbar links scroll
$(function(){
   $("#homeLink").click(function(){
    if(window.innerWidth < 992) {
        $("nav button.navbar-toggler").click();
    }
    $("html, body").animate({
        scrollTop: 0
    }, 1000);
   });

   $("#learnMoreLink").click(function(){
    if(window.innerWidth < 992) {
        $("nav button.navbar-toggler").click();
    }
    $("html, body").animate({
        scrollTop: ($("#learnMore").offset().top - 64.9534)
    }, 1000);
   });

   $("#highlightsLink").click(function(){
    if(window.innerWidth < 992) {
        $("nav button.navbar-toggler").click();
    }
    $("html, body").animate({
        scrollTop: ($("#highlights").offset().top - 64.9534)
    }, 1000);
   });

   $("#ctaLink").click(function(){
    if(window.innerWidth < 992) {
        $("nav button.navbar-toggler").click();
    }
    $("html, body").animate({
        scrollTop: ($("#cta").offset().top - 64.9534)
    }, 1000);
   });

   $("#testiLink").click(function(){
    if(window.innerWidth < 992) {
        $("nav button.navbar-toggler").click();
    }
    $("html, body").animate({
        scrollTop: ($("#testimonials").offset().top - 64.9534)
    }, 1000);
   });

   $("#servicesLink").click(function(){
    if(window.innerWidth < 992) {
        $("nav button.navbar-toggler").click();
    }
    $("html, body").animate({
        scrollTop: ($("#services").offset().top - 64.9534)
    }, 1000);
   });

   $("#portfolioLink").click(function(){
    if(window.innerWidth < 992) {
        $("nav button.navbar-toggler").click();
    }
    $("html, body").animate({
        scrollTop: ($("#portfolio").offset().top - 64.9534)
    }, 1000);
   });

   $("#pricingLink").click(function(){
    if(window.innerWidth < 992) {
        $("nav button.navbar-toggler").click();
    }
    $("html, body").animate({
        scrollTop: ($("#pricing").offset().top - 64.9534)
    }, 1000);
   });

   $("#contactLink").click(function(){
    if(window.innerWidth < 992) {
        $("nav button.navbar-toggler").click();
    }
    $("html, body").animate({
        scrollTop: ($("#contact").offset().top - 64.9534)
    }, 1000);
   });

   $(document).on("scroll",function(){
    let scroll = window.scrollY + 64.9534;

    let homeS = $("#home").offset().top < scroll && ($("#home").offset().top + $("#home").innerHeight()) > scroll;

    let learnMoreS = $("#learnMore").offset().top < scroll && ($("#learnMore").offset().top + $("#learnMore").innerHeight()) > scroll;
    let highlightsS = $("#highlights").offset().top < scroll && ($("#highlights").offset().top + $("#highlights").innerHeight()) > scroll;
    let ctaS = $("#cta").offset().top < scroll && ($("#cta").offset().top + $("#cta").innerHeight()) > scroll;
    let testiS = $("#testimonials").offset().top < scroll && ($("#testimonials").offset().top + $("#testimonials").innerHeight()) > scroll;

    let servicesS = $("#services").offset().top < scroll && ($("#services").offset().top + $("#services").innerHeight()) > scroll;
    let portfolioS = $("#portfolio").offset().top < scroll && ($("#portfolio").offset().top + $("#portfolio").innerHeight()) > scroll;
    let pricingS = $("#pricing").offset().top < scroll && ($("#pricing").offset().top + $("#pricing").innerHeight()) > scroll;
    let contactS = $("#contact").offset().top < scroll && ($("#contact").offset().top + $("#contact").innerHeight()) > scroll;

    if( homeS ) {
        $("#homeLink").addClass("active");
    } else {
        $("#homeLink").removeClass("active");
    }

    if( learnMoreS ) {
        $("#learnMoreLink").addClass("active");
    } else {
        $("#learnMoreLink").removeClass("active");
    }

    if( highlightsS ) {
        $("#highlightsLink").addClass("active");
    } else {
        $("#highlightsLink").removeClass("active");
    }

    if( ctaS ) {
        $("#ctaLink").addClass("active");
    } else {
        $("#ctaLink").removeClass("active");
    }

    if( testiS ) {
        $("#testiLink").addClass("active");
    } else {
        $("#testiLink").removeClass("active");
    }

    if( servicesS ) {
        $("#servicesLink").addClass("active");
    } else {
        $("#servicesLink").removeClass("active");
    }

    if( portfolioS ) {
        $("#portfolioLink").addClass("active");
    } else {
        $("#portfolioLink").removeClass("active");
    }

    if( pricingS ) {
        $("#pricingLink").addClass("active");
    } else {
        $("#pricingLink").removeClass("active");
    }

    if( contactS ) {
        $("#contactLink").addClass("active");
    } else {
        $("#contactLink").removeClass("active");
    }

    if ( learnMoreS || highlightsS || ctaS || testiS ) {
        $("#aboutLink").addClass("active");
    } else {
        $("#aboutLink").removeClass("active");
    }
   });
});

// FAQ row

$(function(){
    $("#myAcc .card-header a").click(function(){
        
        let a = true;
        for(let i = 0; i < this.classList.length; i++) {
            if(this.classList[i] == 'active') {
                a = false;
                break;
            }
        }

        $("#myAcc .card-header a").removeClass("active");

        
        $(this).toggleClass("active", a);
    });
});

// portfolio row filter buttons

$(function() {
    $("#port-link-all").click(function() {
        $(this).addClass("active");
        $("#port-link-card, #port-link-app").removeClass("active");
        $("#portfolio .port-app, #portfolio .port-card").show();
    });

    $("#port-link-app").click(function() {
        $(this).addClass("active");
        $("#port-link-card, #port-link-all").removeClass("active");
        $("#portfolio .port-app").show();
        $("#portfolio .port-card").hide();
    });

    $("#port-link-card").click(function() {
        $(this).addClass("active");
        $("#port-link-app, #port-link-all").removeClass("active");
        $("#portfolio .port-app").hide();
        $("#portfolio .port-card").show();
    });
});