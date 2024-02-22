const queueButton = document.getElementById("queueButton");
let borderRadius = [50, 50, 50, 50];

function getRandomRadius() {
  return 10 + Math.floor(Math.random() * 91);
}

function updateButton() {
  borderRadius = borderRadius.map(getRandomRadius);

  queueButton.style.borderRadius = `${borderRadius[0]}% ${borderRadius[1]}% ${borderRadius[2]}% ${borderRadius[3]}%`;
}

function hoverCheck() {
  if (queueButton.matches(":hover")) {
    borderRadius = [50, 50, 50, 50];
  }
  queueButton.style.borderRadius = `${borderRadius[0]}% ${borderRadius[1]}% ${borderRadius[2]}% ${borderRadius[3]}%`;
}

setInterval(updateButton, 1500);
setInterval(hoverCheck, 10);
