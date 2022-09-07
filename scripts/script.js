const tooltipTransition = {
    duration: 500,
    easing: "swing",
};

$(document).ready(function () {

    console.log($(location).attr('href'))

    if ($(location).attr('href') = "https://tcodling.github.io")

    // SHOW TOOLTIP ON ICON HOVER
    $(".skillIcons .skillIcon img, .exampleProjects .project img").hover(
        (e) => {
            $(e.target).parent().children(".tooltip").show(tooltipTransition);
        },
        (e) => {
            $(e.target).parent().children(".tooltip").hide(tooltipTransition);
        }
    );

    $(".skillIcons .skillIcon img, .exampleProjects .project img").click(
        (e) => {
            // console.log("hello");
            // var url = e.target.getAttribute("data-link");
            // $(location).prop("href", url);

            var win = window.open(e.target.getAttribute("data-link"), "_blank");
            if (win) {
                //Browser has allowed it to be opened
                win.focus();
            } else {
                //Browser has blocked it
                alert("Please allow popups for this website");
            }
        }
    );
});
