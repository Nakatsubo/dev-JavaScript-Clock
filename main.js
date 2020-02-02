const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const today = new Date();

  // 秒針
  const second = today.getSeconds();
  // transform(90deg)を指定してるので、+90して起点を合わせる
  const secondDegree = ((second / 60) * 360 + 90);
  secondHand.style.transform = `rotate(${secondDegree}deg)`;

  // 分針
  const minute = today.getMinutes();
  const minuteDegree = ((minute / 60) * 360 + 90);
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

  // 時針
  const hour = today.getHours();
  const hourDegree = ((hour / 12) * 360 + 90);
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
};

setInterval(setDate, 1000);