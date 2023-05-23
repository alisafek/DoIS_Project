// Mobile navigation

const btnMobnavElement = document.querySelector(".btn-mobile-nav");
const headerElement = document.querySelector(".header");
btnMobnavElement.addEventListener("click", function () {
  headerElement.classList.toggle("nav-open");
});

// For Our work page
function notavailable() {
  alert("The page is not available now, work in progress");
}

// For Careers page

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

// For Footer section, current year setting
// change the text content of an element

const footeryearElement = document.querySelector(".footeryear");
const currentYear = new Date().getFullYear();
footeryearElement.textContent = currentYear;
