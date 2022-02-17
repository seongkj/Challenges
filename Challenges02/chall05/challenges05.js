const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
  
  const body = document.querySelector("body");
  const button = document.querySelector("button");
  function changeBackgroundColor() {
    body.style.background = `linear-gradient(${
      colors[Math.floor(Math.random() * colors.length)]
    }, ${colors[Math.floor(Math.random() * colors.length)]})`;
  }
  //두가지 색상을 랜덤으로 조합한다.
  
  button.addEventListener("click", changeBackgroundColor);
  //버튼 클릭시 body의 background가 바뀐다