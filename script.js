/* ================= MOBILE MENU ================= */

const menu = document.querySelector(".menu-toggle");

const nav = document.querySelector("nav");


menu.addEventListener("click", () => {

    nav.classList.toggle("open");

});


document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

    });

});


/* ================= SCROLL ANIMATION ================= */

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.12
    }

);


document
    .querySelectorAll(".reveal")
    .forEach(element => {

        observer.observe(element);

    });


/* ================= BACK TO TOP ================= */

const topButton =
    document.querySelector(".top-btn");


window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});


topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ================= CURSOR GLOW ================= */

const glow =
    document.querySelector(".cursor-glow");


window.addEventListener("mousemove", event => {

    glow.style.left =
        event.clientX + "px";

    glow.style.top =
        event.clientY + "px";

});


/* ================= YEAR ================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* ================= PROJECT LINKS ================= */

document
    .querySelectorAll(".project-link")
    .forEach(link => {

        link.addEventListener("click", event => {

            if (
                link.getAttribute("href") === "#"
            ) {

                event.preventDefault();

                alert(
                    "Add your GitHub repository or live project link here."
                );

            }

        });

    });