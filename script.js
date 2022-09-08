//gsap

let tl = gsap.timeline();

//menu toggle

const toggle = document.querySelector(".toggle");
const body = document.querySelector("body");

toggle.addEventListener("click", function () {
  if (body.classList.contains("open")) {
    //fermer menu
    body.classList.remove("open");

    tl.to(".sep", {
      duration: 0.5,
      height: "0",
    });

    tl.to(".sep__icon", {
      opacity: 0,
      duration: 0,
      delay: -0.5,
    });
  } else {
    //ouvrir menu
    body.classList.add("open");

    tl.to(".sep", {
      duration: 0.75,
      height: "100%",
      delay: 0.4,
    });

    tl.to(".sep__icon", {
      opacity: 1,
      duration: 0.3,
      delay: -0.5,
    });

    tl.from(
      ".menu__left__inner__item",
      {
        y: 40,
        opacity: 0,
        stagger: 0.25,
      },
      "<-0.5"
    );

    tl.from(
      ".menu__right__inner__item",
      {
        y: 80,
        opacity: 0,
        stagger: 0.25,
      },
      "<-0.3"
    );
  }
});
