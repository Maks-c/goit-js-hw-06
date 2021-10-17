const buttonRef = document.querySelector('.change-color');
const bodyRef = document.querySelector('body');
const span = document.querySelector('.color');
buttonRef.addEventListener('click', handleClick);


function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function handleClick() {
  const secondColor = getRandomHexColor();
  bodyRef.style.backgroundColor = secondColor;
  span.textContent = secondColor;
}


