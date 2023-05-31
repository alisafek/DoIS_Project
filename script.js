// For Footer section, current year setting. Change year number content of the element

const footeryearElement = document.querySelector(".footeryear");
const currentYear = new Date().getFullYear();
footeryearElement.textContent = currentYear;

// Mobile navigation

const btnMobnavElement = document.querySelector(".btn-mobile-nav");
const headerElement = document.querySelector(".header");
//dot only for selectors, not for classes etc.
btnMobnavElement.addEventListener("click", function () {
  headerElement.classList.toggle("nav-open");
});

//Sticky navbar

const sectionHeroElement = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    if (entry.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (entry.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },

  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroElement);

// For Our work and Blog pages
function notavailable() {
  alert("The page is not available now, work in progress");
}

// For Careers page. Modal Window
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnModalClosed = document.querySelector(".modalclosed");
const btnModalShowed = document.querySelector(".modalshowed");

// Remove and add classes
const modalShowed = function () {
  modal.classList.remove("hide");
  overlay.classList.remove("hide");
};

const modalClosed = function () {
  modal.classList.add("hide");
  overlay.classList.add("hide");
};

btnModalShowed.addEventListener("click", modalShowed);
btnModalClosed.addEventListener("click", modalClosed);
overlay.addEventListener("click", modalClosed);

// Listening for events everywhere; hit any key on keyboard; e parametr for event
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hide")) {
    modalClosed();
  }
});

// For Careers page. Text appears and disappear on vacancies

function read() {
  document.querySelector("h4").innerHTML =
    "The page is not available now. Sorry!";
}

function readmore() {
  if (document.querySelector("h5").innerHTML === "") {
    document.querySelector("h5").innerHTML = "The page is not available now";
  } else {
    document.querySelector("h5").innerHTML = "";
  }
}

function readmore2() {
  const heading = document.querySelector("h6");
  if (heading.innerHTML === "") {
    heading.innerHTML = "The page is not available now";
  } else {
    heading.innerHTML = "";
  }
}

//BLog page. Sound API
var audio = document.querySelector("audio");

function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

function seekAudio(time) {
  audio.currentTime = time;
}

function setVolume(volume) {
  audio.volume = volume;
}
