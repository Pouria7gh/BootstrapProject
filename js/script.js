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
// row 4
let hlInter = setInterval(highlightsI,3000);
let hlHover = [];
let hlTabPane = $("#highlights .tab-pane");
let hlListGroupI = $("#highlights .list-group a");
for ( let i = 0; i < hlListGroupI.length; i++ ) {
    hlHover.push(hlTabPane[i]);
    hlHover.push(hlListGroupI[i]);
}
for ( let i = 0; i < hlHover.length; i++ ) {
    hlHover[i].addEventListener("mouseover", function(){
        clearInterval(hlInter);
    });
    hlHover[i].addEventListener("mouseout", function(){
        hlInter = setInterval(highlightsI,3000);
    });
}

let hlPointer = 0;
function highlightsI() {
    for ( let i = 0; i < hlListGroupI.length; i++ ) {
        if( hlListGroupI[i] === document.activeElement ) {
            hlPointer = i;
        }
    }
    hlListGroupI.blur();
    hlPointer++;
    if(hlPointer == hlListGroupI.length) {
        hlPointer = 0;
    }
    hlListGroupI[hlPointer].click();
}