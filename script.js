$(document).ready(function () {

    $(".skillIcons .skillIcon img").hover(e => {
        console.log($(e.target).parent().children(".tooltip"))
        $(e.target).parent().children(".tooltip").show({
            duration: 500,
            easing: "swing"
        })
    }, e => {
        $(e.target).parent().children(".tooltip").hide()
    })


});
