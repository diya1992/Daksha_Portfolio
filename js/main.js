/*
   MAIN JAVASCRIPT FILE
   Portfolio Custom Scripts
*/

/* ---------- Research Accordion ---------- */
$(document).ready(function () {
  $(".research-header").click(function () {
    $(this).next(".research-body").slideToggle();

    // Close other open items
    $(this)
      .parent()
      .siblings()
      .find(".research-body")
      .slideUp();
  });
});

/* ---------- Mobile Navbar Toggle ---------- */
$(document).ready(function () {
  $(".toggle").click(function () {
    $("nav ul").slideToggle();
  });
});

/* ---------- Sticky Header on Scroll ---------- */
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $("header").addClass("typography");
  } else {
    $("header").removeClass("typography");
  }
});

/* ---------- Slick Slider (Student Work) ---------- */
$(document).ready(function () {
  $(".autoplay").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 800,

    // Responsive Fix
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

/* ---------- Changing Text Animation ---------- */
let yourtext = [[" & Game Developer"], [" & Game Developer"], [" & Game Developer"]];

let x = 0;
let y = 0;
let wait = 300;
let additionalwait = 5;

let txt = yourtext[0][0].split("");
let out = "";

setInterval(function () {
  document.getElementById("changingText").innerHTML = out;

  if (x < txt.length) {
    out += txt[x];
  }

  x++;

  if (x === txt.length + 2 + additionalwait) {
    y = (y + 1) % yourtext.length;
    txt = yourtext[y][0].split("");
    out = "";
    x = 0;
  }
}, wait);

/* ---------- Particles Background ---------- */
particlesJS("dots", {
  particles: {
    number: {
      value: 180,
    },
    color: {
      value: "#eee",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
      random: true,
    },
    size: {
      value: 15,
      random: true,
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 4,
      random: true,
      out_mode: "out",
    },
  },

  interactivity: {
    detect_on: "canvas",
    events: {
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      push: {
        particles_nb: 10,
      },
    },
  },

  retina_detect: true,
});

/* ---------- DARK MODE TOGGLE ---------- */

const toggleBtn = document.getElementById("themeToggle");
const icon = document.getElementById("themeIcon");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  icon.classList.replace("ri-moon-line", "ri-sun-line");
}

// Toggle theme
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    icon.classList.replace("ri-moon-line", "ri-sun-line");
    localStorage.setItem("theme", "dark");
  } else {
    icon.classList.replace("ri-sun-line", "ri-moon-line");
    localStorage.setItem("theme", "light");
  }
});

/* Research Filter System */

document.addEventListener("DOMContentLoaded", function () {

    const filterButtons = document.querySelectorAll(".filter-btn");
    const researchCards = document.querySelectorAll(".research-card");

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            // remove active button
            document.querySelector(".filter-btn.active").classList.remove("active");

            // add active to clicked
            button.classList.add("active");

            const filter = button.getAttribute("data-filter");

            researchCards.forEach(card => {

                if (filter === "all" || card.getAttribute("data-category") === filter) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }

            });

        });

    });

});
/* Mobile Menu Toggle */
document.querySelector(".toggle").addEventListener("click", () => {
    document.querySelector("nav ul").classList.toggle("active");
});
