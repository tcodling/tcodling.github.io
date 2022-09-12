const tooltipTransition = {
    duration: 500,
    easing: "swing",
};

$(document).ready(function () {
    techSkills.forEach((skill) => {
        const star = '<i class="fa-solid fa-star"></i>'

        $(".skills").append(`<div data-tag="${skill.tag}" class="skillIcon">
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
        `);
    });

    const state = 0;

    $(".skillIcons button").click(function () {
        // STYLE THE ACTIVE BUTTON
        $(".skillIcons button").removeClass("active");
        $(this).addClass("active");

        // SHOW ICON BASED ON BUTTON CATEGORY NUMBER 1-6
        const animationSpeed = 750
        $(".skillIcon").fadeOut(animationSpeed);
        const categoryId = $(this).data("category")
        if (categoryId) {
            setTimeout(e => {
                $(`.skillIcon[data-tag="${categoryId}"]`).fadeIn(animationSpeed);
            }, 1000)
            // $(`.skillIcon[data-tag="${categoryId}"]`).fadeIn(1000);
        } else {
            setTimeout(e => {
                $(".skillIcon").fadeIn(animationSpeed);
            }, 1000)
            
        }

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

    $(".skillIcons .skillIcon img, .projects .project img").click((e) => {
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
    });

    setTimeout(function () {
        console.log("funciton go");
        $("#skillContainer").particleground({
            dotColor: "#ed6a5a",
            lineColor: "#ed6a5a",
            parallaxMultiplier: 20,
            // curvedLines: 'true'
        });
        $(".pg-canvas").animate({ opacity: 1 }, 2000);
    }, 1000);

    // $("#skillContainer").particleground({
    //     dotColor: "#ed6a5a",
    //     lineColor: "#ed6a5a",
    //     // curvedLines: 'true'
    // });
});
