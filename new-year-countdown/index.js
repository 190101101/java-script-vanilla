const day = document.getElementById('day');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

const newYearTime = new Date('Jan 1, 2024 00:00:00').getTime();

const updateCountDown = () => {
  const now = new Date().getTime();
  const gap = newYearTime - now;

  const secondTime = 1000;
  const minuteTime = secondTime * 60;
  const hourTime = minuteTime * 60;
  const dayTime = hourTime * 24;

  const d = Math.floor(gap / dayTime);
  const h = Math.floor((gap % dayTime) / hourTime);
  const m = Math.floor((gap % hourTime) / minuteTime);
  const s = Math.floor((gap % minuteTime) / secondTime);

  day.innerText = d;
  hour.innerText = h;
  minute.innerText = m;
  second.innerText = s;

  setTimeout(updateCountDown, 1000);
}

updateCountDown();