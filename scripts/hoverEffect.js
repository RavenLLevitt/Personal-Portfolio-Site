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
// Change the background color to black when the mouse enters the button
document.getElementById("queueButton").addEventListener("mouseenter", function() {
  document.body.style.backgroundColor = "#000000";
});

// Change the background color back to white when the mouse leaves the button
document.getElementById("queueButton").addEventListener("mouseleave", function() {
  document.body.style.backgroundColor = "#FFFFFF";
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
    $("#hiddenGradient").css({
      display: "block",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    }).animate({
      width: "80vh",
      height: "80vh",
    }, 500, function () {
      $(this).css('filter', 'blur(0px)');
      $('body').css('background-color', '#000000');

      setTimeout(() => {
        // $('#hiddenGradient').append(`
        //   <svg id="clockHand" width="20vh" height="10vh" xmlns="http://www.w3.org/2000/svg">
        //     <defs>
        //       <linearGradient id="fadeWhite" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="20vh" y2="0">
        //         <stop offset="0%" stop-color="white" />
        //         <stop offset="100%" stop-color="white" stop-opacity="0" />
        //       </linearGradient>
        //     </defs>
        //     <g>
        //       <line x1="0" y1="5vh" x2="20vh" y2="5vh" stroke="url(#fadeWhite)" stroke-width="2"/>
        //     </g>
        //   </svg>
        // `);

        // Initialize rotation after SVG is added
        const svgGroup = document.getElementById('clockHand'); // Access the newly added SVG element
        let angle = 0;
        setInterval(() => {
          angle = (angle + 0.5) % 360; // Increase the angle by 5 degrees and loop at 360
          svgGroup.style.transform = `rotate(${angle}deg)`; // Apply rotation to the SVG element
        }, 10); // Update every 100 milliseconds
      }, 700);
    });
    $("#mainButtonText").remove();
    $("#hoverBox").remove();
    $("#queueButton").remove();
    flip = true;
    $(this).off('click');
  });
});
