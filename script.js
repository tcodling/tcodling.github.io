
const tooltipTransition = {
    duration: 500,
    easing: "swing"
}



$(document).ready(function () {

    // SHOW TOOLTIP ON ICON HOVER
    $(".skillIcons .skillIcon img, .exampleProjects .project img").hover(e => {
        $(e.target).parent().children(".tooltip").show(tooltipTransition)
    }, e => {
        $(e.target).parent().children(".tooltip").hide(tooltipTransition)
    })
});
