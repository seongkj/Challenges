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
  
  // const body = document.querySelector("body");
  // const button = document.querySelector("button");
  // function changeBackgroundColor() {
  //   body.style.background = `linear-gradient(${
  //     colors[Math.floor(Math.random() * colors.length)]
  //   }, ${colors[Math.floor(Math.random() * colors.length)]})`;
  // }
  // //두가지 색상을 랜덤으로 조합한다.
  // button.addEventListener("click", changeBackgroundColor);
  // //버튼 클릭시 body의 background가 바뀐다

  //////위코드는 같은 색이 조합될 수 있음

  //////아래 코드는 같은 색이 조합 되는 것을 방지함

  const body = document.querySelector("body");
  const button = document.querySelector("button");

  function changeBackgroundColor() {
    while(true) {
      let randomNumber = [];
      for(let i = 0; i < 2; i++) { //랜덤 색 두가지를 구하기 위한 for문
        randomNumber.push(Math.floor(Math.random() * colors.length))
        console.log(`${i}번째 숫자:${randomNumber[i]}`);
      }

      if(randomNumber[0]!==randomNumber[1]){  //같은 색으로 조합되지 않기위한 if문
        console.log("다른 값이다");   //for문을 통해 randomNumber[0],[1]에 다른수가 들어가면
        body.style.background = `linear-gradient(${colors[randomNumber[0]]}, 
          ${colors[randomNumber[1]]})`; //배경 색 변경 하고 break;
        break;
      } else {  //같은 값 이면 while문 진행 (없어도되는데 확인을 위해 만듬)
        console.log("같은 값이다.~~~~~~~~~~~");  
      }
    }
  }
  //두가지 색상을 랜덤으로 조합한다.
  button.addEventListener("click", changeBackgroundColor);
  //버튼 클릭시 body의 background가 바뀐다