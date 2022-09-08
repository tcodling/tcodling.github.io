const tooltipTransition = {
    duration: 500,
    easing: "swing",
};

// const techSkills = [
//     {
//         name: "HTML",
//         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
//         tooltip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nibh lectus. Integer consectetur massa non libero consectetur fermentum sed at ligula.",
//         link: "",
//     },
// ];

$(document).ready(function () {
    // if ($(location).attr("href") == "https://tcodling.github.io/") {
    //     $("body").hide();
    //     alert(
    //         "This website is currently being built! Send me an email at thomas.codling@outlook.com for business inquiries!"
    //     );
    // }

    techSkills.forEach((skill) => {
        $(".highExperienceSkills").append(`<div class="skillIcon">
            <div class="tooltip">
                <h5>${skill.name}</h5>
                ${skill.tooltip}
            </div>
            <img
                data-link="${skill.link}"
                src="${skill.icon}"
            />
        </div>`);
    });

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

    $("#skillContainer").particleground({
        dotColor: "#ed6a5a",
        lineColor: "#ed6a5a",
    });
});
