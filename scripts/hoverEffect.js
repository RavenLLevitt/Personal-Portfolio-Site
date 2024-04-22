var flip = false;
var selecting = false;
// should probably convert this to jquery to not have terrible
document.addEventListener("mousemove", function (e) {
  if (!flip) {
    const hoverBox = document.getElementById("hoverBox");

    const rect = hoverBox.parentElement.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    hoverBox.style.left = mouseX + "px";
    hoverBox.style.top = mouseY + "px";
  }
});

// $(document).mousemove(function (e) {
//   if (flip) {
//     var viewportWidth = $(window).width(); // Get the viewport width in pixels
//     var viewportHeight = $(window).height(); // Get the viewport height in pixels
//     var followerSizeInPixels = (20 / 100) * viewportHeight; // Convert 20vh to pixels
//     var halfFollowerSize = followerSizeInPixels / 2; // Calculate half the size to center

//     // Initialize positions to be based on the cursor's location
//     var effectivePageX = e.pageX - halfFollowerSize;
//     var effectivePageY = e.pageY - halfFollowerSize;

//     // Check proximity to the viewport edges
//     if (viewportWidth - e.pageX < 10 + halfFollowerSize) { // Too close to the right
//       effectivePageX = viewportWidth - followerSizeInPixels - 10;
//     } else if (e.pageX < 10 + halfFollowerSize) { // Too close to the left
//       effectivePageX = 10;
//     }

//     if (viewportHeight - e.pageY < 10 + halfFollowerSize) { // Too close to the bottom
//       effectivePageY = viewportHeight - followerSizeInPixels - 10;
//     } else if (e.pageY < 10 + halfFollowerSize) { // Too close to the top
//       effectivePageY = 10;
//     }

//     // Apply CSS, adjusting only the necessary axis
//     $("#queueButton").css({
//       left: effectivePageX + "px",
//       top: effectivePageY + "px"
      
//     });
//   }
// });


// initial transition
// ignore that i swapped to jqeury here
// hide cursor after click?
$(document).ready(function () {
  

  $("#queueButton").click(function (event) {


    $("#hiddenGradient") // Make sure to use the correct ID here
      .css({
        display: "block",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",

        // Remove transform to start expansion from the mouse click position
      })
      .animate(
        {
          width: "80vh",
          height: "80vh",
        },
        500,
        // Adjust time as needed
        function () {

          $(this).css('filter', 'blur(0px)');
          $('body').css('background-color', '#000000');

      setTimeout(() => {
          $('#slide-show-pane').css('opacity', 1);
      }, 700);
      
      
      
          //HOW TO MAKE IT JUMP RIGHT AWAY???
        }
      );
    $("#mainButtonText").remove();
    $("#hoverBox").remove();
    $("#queueButton").remove();

    flip = true;

    $(this).off('click');
  });
});
