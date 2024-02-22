document.addEventListener("mousemove", function (e) {
  const hoverBox = document.getElementById("hoverBox");

  // Get bounding rectangle of queueButton
  const rect = hoverBox.parentElement.getBoundingClientRect();

  // Calculate mouse position relative to queueButton
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  // Set the hoverBox style to move with the mouse
  hoverBox.style.left = mouseX + "px";
  hoverBox.style.top = mouseY + "px";
});

// join queue listener should probably be movved elsewhere soon
// console log only for testing, should be removed once actually commands added
// probably should rename stuff aswell
document.getElementById("submitBtn").addEventListener("click", function () {
  var pin = document.getElementById("pinInput").value;
  console.log("PIN Submitted:", pin);
});

// ["Queue", "Start", "Create", ""]
