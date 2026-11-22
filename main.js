// Audio & Preloader
const audio = document.getElementById("audioPlayer");
const loader = document.getElementById("preloader");

function settingtoggle() {
  document.getElementById("setting-container").classList.toggle("settingactivate");
  document.getElementById("visualmodetogglebuttoncontainer").classList.toggle("visualmodeshow");
  document.getElementById("soundtogglebuttoncontainer").classList.toggle("soundmodeshow");
}

function playpause() {
  const switchForSound = document.getElementById("switchforsound");
  if (!switchForSound.checked) {
    audio.pause();
  } else {
    audio.play();
  }
}

function visualmode() {
  document.body.classList.toggle("light-mode");
  document.querySelectorAll(".needtobeinvert").forEach(function (e) {
    e.classList.toggle("invertapplied");
  });
}

window.addEventListener("load", function () {
  if (loader) loader.style.display = "none";
  const hey = document.querySelector(".hey");
  if (hey) hey.classList.add("popup");
});

// Mobile navigation menu
const mobileTogglemenu = document.getElementById("mobiletogglemenu");

function hamburgerMenu() {
  document.body.classList.toggle("stopscrolling");
  document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu");
  document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
  document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
  document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}

function hidemenubyli() {
  document.body.classList.remove("stopscrolling");
  document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
  document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
  document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
  document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

// Active section scroll indicator
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li");
const mobilenavLi = document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li");

window.addEventListener("scroll", () => {
  let currentSection = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 250) {
      currentSection = section.getAttribute("id");
    }
  });

  mobilenavLi.forEach((li) => {
    li.classList.remove("activeThismobiletab");
    if (li.classList.contains(currentSection)) {
      li.classList.add("activeThismobiletab");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("activeThistab");
    if (li.classList.contains(currentSection)) {
      li.classList.add("activeThistab");
    }
  });
});

console.log(
  "%c Ayush Agrawal | Software Engineer Portfolio ",
  "background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:16px; border-radius:8px;"
);

// Back to top button
const mybutton = document.getElementById("backtotopbutton");

function scrollFunction() {
  if (mybutton) {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
}

function scrolltoTopfunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
  scrollFunction();
};

document.addEventListener(
  "contextmenu",
  function (e) {
    if (e.target.nodeName === "IMG") {
      e.preventDefault();
    }
  },
  false
);

// Interactive footer avatar eyes
const Pupils = document.getElementsByClassName("footer-pupil");
const pupilsArr = Array.from(Pupils);
const pupilStartPoint = -10;
const pupilRangeX = 20;
const pupilRangeY = 15;
let mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth;
let currentXPosition = 0;
let fracXValue = 0;
let mouseYEndPoint = window.innerHeight;
let currentYPosition = 0;
let fracYValue = 0;
let mouseXRange = mouseXEndPoint - mouseXStartPoint;

const mouseMove = (e) => {
  currentXPosition = e.clientX - mouseXStartPoint;
  fracXValue = currentXPosition / mouseXRange;
  currentYPosition = e.clientY;
  fracYValue = currentYPosition / mouseYEndPoint;

  let translateX = pupilStartPoint + fracXValue * pupilRangeX;
  let translateY = pupilStartPoint + fracYValue * pupilRangeY;

  pupilsArr.forEach((p) => {
    p.style.transform = `translate(${translateX}px, ${translateY}px)`;
  });
};

const windowResize = () => {
  mouseXEndPoint = window.innerWidth;
  mouseYEndPoint = window.innerHeight;
  mouseXRange = mouseXEndPoint - mouseXStartPoint;
};

window.addEventListener("mousemove", mouseMove);
window.addEventListener("resize", windowResize);

// Certificate Lightbox Modal
function openCertModal(imageSrc, title) {
  const modal = document.getElementById("certModal");
  const modalImg = document.getElementById("certModalImg");
  const modalTitle = document.getElementById("certModalTitle");
  const modalLink = document.getElementById("certModalLink");
  if (!modal || !modalImg) return;

  modalImg.src = imageSrc;
  modalImg.alt = title || "Certificate Preview";
  if (modalTitle) modalTitle.textContent = title || "";
  if (modalLink) modalLink.href = imageSrc;

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("stopscrolling");
}

function closeCertModal() {
  const modal = document.getElementById("certModal");
  if (!modal) return;
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("stopscrolling");
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeCertModal();
});
