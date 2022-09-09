const tooltipTransition = {
    duration: 500,
    easing: "swing",
};

$(document).ready(function () {
    techSkills.forEach((skill) => {
        $(".skills").append(`<div class="skillIcon">
            <div class="tooltip">
                <h5>${skill.name}</h5>
                ${skill.tooltip}
                <br/>
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            </div>
            <img
                data-link="${skill.link}"
                src="${skill.icon}"
            />
        </div>`);
    });

    projects.forEach((project) => {
        $(".projects").append(`
            <div class="project">
                <div class="tooltip">
                    <h5>${project.name}</h5>
                    ${project.tooltip}
                </div>
                <img src="${project.image}" />
                <h3 class="projectName">${project.icon} ${project.name}</h3>
            </div>
        `)
    });

    // SHOW TOOLTIP ON ICON HOVER
    $(".skillIcons .skillIcon img, .projects .project img").hover(
        (e) => {
            $(e.target).parent().children(".tooltip").show(tooltipTransition);
        },
        (e) => {
            $(e.target).parent().children(".tooltip").hide(tooltipTransition);
        }
    );

    $(".skillIcons .skillIcon img, .projects .project img").click(
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
