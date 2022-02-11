const body = document.querySelector("body");

//The first method.*******************************************************
function backgroundsize() {
  let width = window.innerWidth;
  if (width <= 500) {
    body.classList.remove("colorPurple", "colorOrange");
    body.classList.add("colorBlue");
  } else if (width > 500 && width < 700) {
    body.classList.remove("colorPurple", "colorOrange");
    body.classList.add("colorPurple");
  } else {
    body.classList.remove("colorBlue", "colorPurple");
    body.classList.add("colorOrange");
  }
}

//Second method*********************************************************
// function backgroundsize() {
//   const width = window.innerWidth;
//   if (width <= 500) {
//     body.style.backgroundColor = "cornflowerblue";
//   } else if (width > 500 && width < 700) {
//     body.style.backgroundColor = "purple";
//   } else {
//     body.style.backgroundColor = "orange";
//   }
// }

window.addEventListener("resize", backgroundsize);
