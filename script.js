function notavailable() {
  alert("The page is not available now, work in progress");
}

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
