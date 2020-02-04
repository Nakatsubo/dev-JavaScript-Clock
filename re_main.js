// clock
setInterval(() => {
  const now = new Date();

  // get Time
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  // get Degree
  // 1時間あたりの角度 + 1分あたりの角度 => 24時間で2周させる
  const degH = (360 / 12) * h + (360 / 60 / 12) * m;
  const degM = (360 / 60) * m;
  const degS = (360 / 60) * s;

  // get Element
  const elH = document.querySelector('.lineHour');
  const elM = document.querySelector('.lineMin');
  const elS = document.querySelector('.lineSec');

  elH.style.transform = `rotate(${degH}deg)`;
  elM.style.transform = `rotate(${degM}deg)`;
  elS.style.transform = `rotate(${degS}deg)`;

}, 50);
