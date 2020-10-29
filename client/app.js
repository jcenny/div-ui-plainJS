const handleClick = (e) => {
  e.preventDefault();
  const input = document.querySelector('input');
  createCircles(input.value);
}

const createCircles = (num) => {
  const container = document.querySelector('.container');
  // delete children if there are any
  container.querySelectorAll('*').forEach((child) => child.remove())
  // add new children according to requested value
  for (let i = 0; i < Number(num); i++) {
    const circle = document.createElement('div');
    circle.setAttribute('class', 'circle');
    circle.setAttribute('data-num', i + 1);
    circle.setAttribute('data-on', 0);
    container.appendChild(circle);
    circle.addEventListener('click', handleCircleClick);
  }
}

const showNotification = (num, notify) => {
  let text;
  if (notify) {
    text = `TURNING ON ${num}`;
  } else {
    text = `TURNING OFF ${num}`;
  }
  const notification = document.createElement('div');
  notification.setAttribute('class', 'notification');
  notification.innerHTML = text;

  const container = document.querySelector('.container');
  container.style.opacity = 0.3;

  const main = document.querySelector('.app');
  main.appendChild(notification);

  setTimeout(function() {
    notification.innerHTML = '';
    container.style.opacity = 1;
  }, 600)
}

const handleCircleClick = (e) => {
  const num = e.target.dataset.num;
  const isOn = e.target.dataset.on;
  const current = document.querySelector(`div[data-num='${num}']`);

  if (!Number(isOn)) {
    current.style.backgroundColor = 'blue';
    current.setAttribute('data-on', 1);
    showNotification(num, true);
  } else {
    current.style.backgroundColor = 'black'
    current.setAttribute('data-on', 0);
    showNotification(num, false);
  }
}

const button = document.querySelector('button');
button.addEventListener('click', handleClick);