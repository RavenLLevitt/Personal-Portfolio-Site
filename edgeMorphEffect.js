const queueButton = document.getElementById("queueButton");
let borderRadius = [50, 50, 50, 50];
let mouseXPercentage = 0;
let mouseYPercentage = 0;

function getRandomRadius() {
  return 10 + Math.floor(Math.random() * 91);
}

function updateButton() {
  borderRadius = borderRadius.map(getRandomRadius);
  queueButton.style.borderRadius = `${borderRadius[0]}% ${borderRadius[1]}% ${borderRadius[2]}% ${borderRadius[3]}%`;
}

function hoverCheck() {
  if (queueButton.matches(":hover")) {
    if (!flip) {
      borderRadius = [50, 50, 50, 50];
      document.getElementById("hoverBox").style.height = "50vh";
      document.getElementById("hoverBox").style.width = "50vh";
    } else {
      // need to change so that as it approache diffrent corners dif things occur, nested ifelse in here with logic based on distnaces %'s
      // borderRadius = [50 -(mouseXPercentage/2), 50 -(mouseYPercentage/2), 50, 50];

      // need to remove transitions somehwo since it will now be live calculated or atleast make it very fast
      // this breaks it for some reason, also need to make it smaller
      queueButton.style.transition =
        "border-radius 0.3s ease, transform 1s ease, border 0.5s ease, width 0.5s ease, height 0.5s ease";
      if (mouseXPercentage < 50 && mouseYPercentage < 50) {
        // top left
        borderRadius = [10, 50, 50, 50];
      } else if (mouseXPercentage > 50 && mouseYPercentage < 50) {
        // top right
        borderRadius = [50, 10, 50, 50];
      } else if (mouseXPercentage < 50 && mouseYPercentage > 50) {
        // bottom left
        borderRadius = [50, 50, 50, 10];
      } else if (mouseXPercentage > 50 && mouseYPercentage > 50) {
        // bottom right
        borderRadius = [50, 50, 10, 50];
      }
    }
  } else {
    document.getElementById("hoverBox").style.height = "30vh";
    document.getElementById("hoverBox").style.width = "30vh";
  }
  queueButton.style.borderRadius = `${borderRadius[0]}% ${borderRadius[1]}% ${borderRadius[2]}% ${borderRadius[3]}%`;
}

function updateMousePosition(event) {
  mouseXPercentage = (event.clientX / window.innerWidth) * 100;
  mouseYPercentage = (event.clientY / window.innerHeight) * 100;
}

// Add event listener to track mouse movement
document.addEventListener("mousemove", updateMousePosition);

// Call functions at intervals
setInterval(updateButton, 1500);
setInterval(hoverCheck, 10);
