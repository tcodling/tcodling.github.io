$(document).ready(function () {

    // SHOW TOOLTIP ON ICON HOVER
    $(".skillIcons .skillIcon img").hover(e => {
        $(e.target).parent().children(".tooltip").show({
            duration: 500,
            easing: "swing"
        })
    }, e => {
        $(e.target).parent().children(".tooltip").hide()
    })

    $(".exampleProjects .project img").hover(e => {
        console.log($(e.target).parent().children())
        $(e.target).parent().children(".tooltip").show({
            duration: 500,
            easing: "swing"
        })
    }, e => {
        $(e.target).parent().children(".tooltip").hide()
    })


});
