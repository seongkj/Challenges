const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const h2 = document.querySelector("h2");
const superEventHandler = {
  enter: function () {
    h2.style.color = colors[0];
    h2.innerText = "The mouse is here!";
  },
  leave: function () {
    h2.style.color = colors[1];
    h2.innerText = "The mouse is gone!";
  },
  resize: function () {
    h2.style.color = colors[2];
    h2.innerText = "You just resized!";
  },
  click: function () {
    h2.style.color = colors[3];
    h2.innerText = "That was a right click!";
  }
};
h2.addEventListener("mouseenter", superEventHandler.enter);
h2.addEventListener("mouseleave", superEventHandler.leave);
window.addEventListener("resize", superEventHandler.resize);
window.addEventListener("contextmenu", superEventHandler.click);