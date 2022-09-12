const tooltipTransition = {
    duration: 500,
    easing: "swing",
};

$(document).ready(function () {
    // DYNAMICALLY GENERATE SKILLS
    techSkills.forEach((skill) => {
        const star = '<i class="fa-solid fa-star"></i>';
        let direction = "right";

        $(".skills").append(`<div data-tag="${skill.tag}" class="skillIcon">
            <div class="tooltip ${direction}">
                <h5>${skill.name}</h5>
                ${skill.tooltip}
            </div>
            <img
                class="skillImage"
                data-link="${skill.link}"
                src="${skill.icon}"
            />
        </div>`);
    });

    // DYNAMICALLY GENERATE PROJECTS
    projects.forEach((project) => {
        $(".projects").append(`
            <div class="project">
                <div class="tooltip">
                    <h5>${project.name}</h5>
                    ${project.tooltip}
                </div>
                <img class="projectImage" data-link="${project.link}" src="${project.image}" />
                <h3 class="projectName">${project.icon} ${project.name}</h3>
            </div>
        `);
    });

    // PROJECT LINKS
    $(".project img").click(function (e) {
        window.open($(e.target).data("link"));
    });

    // LOGIC FOR CHANGING TAB CATEGORIES
    $(".skillsContainer button").click(function () {
        // STYLE THE ACTIVE BUTTON
        $(".skillsContainer button").removeClass("active");
        $(this).addClass("active");

        // SHOW ICON BASED ON BUTTON CATEGORY NUMBER 1-6
        const animationSpeed = 750;

        $(".skillIcon").fadeOut(animationSpeed);
        const categoryId = $(this).data("category");
        if (categoryId) {
            setTimeout((e) => {
                $(`.skillIcon[data-tag="${categoryId}"]`).fadeIn(
                    animationSpeed
                );
            }, 1000);
        } else {
            setTimeout((e) => {
                $(".skillIcon").fadeIn(animationSpeed);
            }, 1000);
        }
    });

    // SHOW TOOLTIP ON ICON HOVER
    $(".skillsContainer .skillIcon img, .projects .project img").hover(
        (e) => {
            $(e.target).parent().children(".tooltip").show(tooltipTransition);
        },
        (e) => {
            $(e.target).parent().children(".tooltip").hide(tooltipTransition);
        }
    );

    // SKILL LINKS
    $(".skillsContainer .skillIcon img, .projects .project img").click((e) => {
        var win = window.open(e.target.getAttribute("data-link"), "_blank");
        if (win) {
            //Browser has allowed it to be opened
            win.focus();
        } else {
            //Browser has blocked it
            alert("Please allow popups for this website");
        }
    });

    // START ANIMATED BACKGROUND
    setTimeout(function () {
        $("#skillContainer").particleground({
            dotColor: "#ed6a5a",
            lineColor: "#ed6a5a",
            parallaxMultiplier: 20,
        });
        $(".pg-canvas").animate({ opacity: 1 }, 2000);
    }, 1000);

});
