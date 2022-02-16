const clockTitle = document.querySelector(".js-clock");

function christmasEve() {
  const date = new Date();
  const christmas = new Date("2022-12-25 00:00:00");
  const dday = christmas - date;
  const day = Math.floor(dday / (1000 * 60 * 60 * 24));
  const hours = Math.floor((dday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((dday % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((dday % (1000 * 60)) / 1000);
  clockTitle.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}

christmasEve();
setInterval(christmasEve, 1000);
