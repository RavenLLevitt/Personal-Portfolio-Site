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

document.addEventListener("mousemove", function (e) {
  const hoverBox = document.getElementById("highlighter");

  // Get bounding rectangle of queueButton
  const rect = hoverBox.parentElement.getBoundingClientRect();

  // Calculate mouse position relative to queueButton
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  // Set the hoverBox style to move with the mouse
  hoverBox.style.left = mouseX + "px";
  hoverBox.style.top = mouseY + "px";
});

// initial transition
// ignore that i swapped to jqeury here
$(document).ready(function () {
  $("#queueButton").click(function () {
    // Calculate the size to cover the screen
    var maxDimension = Math.max($(window).width(), $(window).height()) * 2;
    $("#hiddenGradient")
      .css({
        display: "block",
        top: "50%",
        left: "50%",
        width: "0",
        height: "0",
        transform: "translate(-50%, -50%)",
      })
      .animate(
        {
          width: maxDimension,
          height: maxDimension,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
        500
      ); // Adjust time as needed
  });
});
