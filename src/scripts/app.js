import { gsap } from "gsap";
import $ from "jquery";

const changeColor = (index) => {
  root.style.setProperty("--base-color", colors[index]);
  logoSvg.setAttribute("fill", colors[index]);

  index = (index + 1) % colors.length;

  setTimeout(() => {
    changeColor(index);
  }, 5000);
};

const colors = [
  "#8aaae5",
  "#f77126",
  "#26f7ac",
  "#26c5f7",
  "#d439d7",
  "#e04c4c",
];

let root = document.documentElement;
let logoSvg = document.querySelector(".logo svg path");

changeColor(0);

const startLoader = (delay) => {
  let counterElement = document.querySelector(".counter span");
  let currentValue = 0;

  const updateCounter = () => {
    if (currentValue === 100) {
      return;
    }

    currentValue += Math.floor(Math.random() * 10) + 1;

    if (currentValue > 100) {
      currentValue = 100;
    }

    counterElement.textContent = `${currentValue}`;

    let delay = Math.floor(Math.random() * 200) + 50;

    setTimeout(updateCounter, delay);
  };
  setTimeout(updateCounter, delay);
};

window.addEventListener("load", () => {
  startLoader(500);

  //ALTERNATE ANIMATION
  var tl = gsap.timeline();
  tl.to(".counter", {
    duration: 0.25,
    delay: 3.5,
    opacity: 0,
    ease: "power1.Out",
    onComplete: () => {
      gsap.set(".counter", { delay: 1, display: "none" });
    },
  });

  tl.to(".ring", {
    visibility: "visible",
    duration: 1,
    scale: 1.75,
    opacity: 0,
    stagger: {
      each: 0.5,
    },
    ease: "power1.out",
    delay: 0.5,
  });

  tl.fromTo(
    ".ringscale",
    {
      scale: 0.8,
    },
    {
      visibility: "visible",
      opacity: 1,
      duration: 1,
      scale: Math.max(window.innerWidth, window.innerHeight) / 50,
      ease: "power2.in",
    },
    "-=0.5"
  );

  tl.to(
    "#preloader-btn",
    {
      duration: 0.35,
      visibility: "visible",
      opacity: 1,
      ease: "power1.in",
    },
    "-=0.5"
  );
});

window.addEventListener("DOMContentLoaded", () => {
  // const loader = document.querySelector(".loader");
  const squareContainer = document.getElementById("square-container");
  const squareSize = 100;
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const numCols = Math.ceil(screenWidth / squareSize);
  const numRows = Math.ceil(screenHeight / squareSize);
  const numSquares = numCols * numRows;

  squareContainer.style.width = `${numCols * squareSize}px`;
  squareContainer.style.height = `${numRows * squareSize}px`;

  let squares = [];

  function applyStyles(element) {
    element.style.height = "100px";
    element.style.width = "100px";
    element.style.backgroundColor = "#8aaae5";
    element.style.outline = "0.07em solid rgba(40, 40, 40, 0.14)";
  }

  function createSquares() {
    for (let i = 0; i < numSquares; i++) {
      const square = document.createElement("div");
      applyStyles(square);
      // square.classList.add("square");
      squareContainer.appendChild(square);
      squares.push(square);
    }
  }

  function animateSquares() {
    gsap.fromTo(
      squares,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 0.5,
        duration: 0.0005,
        stagger: {
          each: 0.004,
          from: "random",
        },
        onComplete: () => {
          gsap.set(".ring", { display: "none" });
          gsap.set(".loader-base", {
            display: "none",
          });
        },
      }
    );

    gsap.to(squares, {
      opacity: 0,
      delay: 1.5,
      duration: 0.0005,
      stagger: {
        each: 0.004,
        from: "random",
      },
      onComplete: () => {
        gsap.set("#square-container", { display: "none" });
      },
    });
  }

  document.getElementById("preloader-btn").addEventListener("click", () => {
    squareContainer.innerHTML = "";
    squares = [];
    createSquares();
    animateSquares();

    gsap.to("#preloader-btn", {
      opacity: 0,
      ease: "power1.out",
    });
  });
});

const button = document.querySelector("#preloader-btn");

let boundingRect = button.getBoundingClientRect();

window.addEventListener("resize", () => {
  boundingRect = button.getBoundingClientRect();
});

button.addEventListener("mousemove", (e) => {
  const mousePosX = e.clientX - boundingRect.left;
  const mousePosY = e.clientY - boundingRect.top;

  gsap.to(button, {
    x: (mousePosX - boundingRect.width / 2) * 0.4,
    y: (mousePosY - boundingRect.height / 2) * 0.4,
    duration: 0.8,
    ease: "power4.out",
  });
  gsap.to($(".btn-text"), {
    x: (mousePosX - boundingRect.width / 2) * 0.3,
    y: (mousePosY - boundingRect.height / 2) * 0.3,
    duration: 0.8,
    ease: "power4.out",
  });
});

//Event listener for when the mouse leaves the button area
button.addEventListener("mouseleave", () => {
  gsap.to(button, {
    x: 0,
    y: 0,
    duration: 0.8,
    ease: "elastic.out(1,0.3)",
  });
  gsap.to($(".btn-text"), {
    x: 0,
    y: 0,
    duration: 0.8,
    ease: "elastic.out(1,0.3)",
  });
});

$(".pre").on("mouseenter", () => {
  gsap.to($(".btn-fill"), 0.6, {
    startAt: { y: "76%" },
    y: "0%",
    ease: "power2.inOut",
  });
  gsap.to($(".btn-text"), 0.3, {
    startAt: { color: "rgb(158, 158, 158)" },
    color: "#FFFFFF",
    ease: "power3.in",
  });
});
$(".pre").on("mouseleave", () => {
  gsap.to($(".btn-fill"), 0.6, {
    y: "-76%",
    ease: "power2.inOut",
  });
  gsap.to($(".btn-text"), 0.3, {
    color: "rgb(158, 158, 158)",
    ease: "power3.out",
    delay: 0.3,
  });
});
