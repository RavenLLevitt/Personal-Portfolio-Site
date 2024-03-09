var flip = false;
// should probably convert this to jquery to not have terrible
document.addEventListener("mousemove", function (e) {
  if (!flip) {
    const hoverBox = document.getElementById("hoverBox");

    // Get bounding rectangle of queueButton
    const rect = hoverBox.parentElement.getBoundingClientRect();

    // Calculate mouse position relative to queueButton
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Set the hoverBox style to move with the mouse
    hoverBox.style.left = mouseX + "px";
    hoverBox.style.top = mouseY + "px";
  }
});

$(document).mousemove(function (e) {
  if (flip) {
    var viewportHeight = $(window).height(); // Get the viewport height in pixels
    var followerSizeInPixels = (20 / 100) * viewportHeight; // Convert 30vh to pixels
    var halfFollowerSize = followerSizeInPixels / 2; // Calculate half the size to center

    $("#queueButton").css({
      left: e.pageX - halfFollowerSize + "px",
      top: e.pageY - halfFollowerSize + "px",
    });
  }
});

// initial transition
// ignore that i swapped to jqeury here
// hide cursor after click?
$(document).ready(function () {
  $("#queueButton").click(function (event) {
    // Calculate the size to cover the screen
    var maxDimension = Math.max($(window).width(), $(window).height()) * 2;
    // Capture mouse click position
    var mouseX = event.pageX;
    var mouseY = event.pageY;

    $("#hiddenGradient") // Make sure to use the correct ID here
      .css({
        display: "block",
        top: mouseY, // Use mouseY for the top position
        left: mouseX, // Use mouseX for the left position
        width: "0",
        height: "0",
        // Remove transform to start expansion from the mouse click position
      })
      .animate(
        {
          width: maxDimension,
          height: maxDimension,
          top: mouseY - maxDimension / 2,
          left: mouseX - maxDimension / 2,
        },
        500,
        // Adjust time as needed
        function () {
          // Callback function after animation completes
          // Now replace #queueButton with #cursorFollower div
          //   $("#queueButton").replaceWith('<div id="cursorFollower"></div>');
          // Style #cursorFollower as needed, or it should be styled via CSS
          $("#queueButton").css({
            width: "20vh",
            height: "20vh",
            border: "2px solid #e2e4e9",
            // solid or not?
            background: "#e2e4e9",
            // i get the sense that this box-shadow isn't doing anything... not really sure why atm but should look ot fix this or remove.
            "box-shadow": "0px, 2px, 10px, rgba(5, 0, 56, 0.08)",
            // opacity: "0.2",
            // didn't do anything i don't think:
            position: "absolute",
            display: "block",
          });
          //HOW TO MAKE IT JUMP RIGHT AWAY???
        }
      );
    $("#mainButtonText").remove();
    $("#hoverBox").remove();
    flip = true;
  });
});
