var flip = false;
var selecting = false;
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
    var viewportWidth = $(window).width(); // Get the viewport width in pixels
    var viewportHeight = $(window).height(); // Get the viewport height in pixels
    var followerSizeInPixels = (20 / 100) * viewportHeight; // Convert 20vh to pixels
    var halfFollowerSize = followerSizeInPixels / 2; // Calculate half the size to center

    // Initialize positions to be based on the cursor's location
    var effectivePageX = e.pageX - halfFollowerSize;
    var effectivePageY = e.pageY - halfFollowerSize;

    // Check proximity to the viewport edges
    if (viewportWidth - e.pageX < 10 + halfFollowerSize) { // Too close to the right
      effectivePageX = viewportWidth - followerSizeInPixels - 10;
    } else if (e.pageX < 10 + halfFollowerSize) { // Too close to the left
      effectivePageX = 10;
    }

    if (viewportHeight - e.pageY < 10 + halfFollowerSize) { // Too close to the bottom
      effectivePageY = viewportHeight - followerSizeInPixels - 10;
    } else if (e.pageY < 10 + halfFollowerSize) { // Too close to the top
      effectivePageY = 10;
    }

    // Apply CSS, adjusting only the necessary axis
    $("#queueButton").css({
      left: effectivePageX + "px",
      top: effectivePageY + "px"
    });
  }
});


// initial transition
// ignore that i swapped to jqeury here
// hide cursor after click?
$(document).ready(function () {
  
  $('body').on('mouseenter', '#slide-show-pane', function() {
    var panePos = $('#slide-show-pane').offset();
    var paneWidth = $('#slide-show-pane').width();
    var paneHeight = $('#slide-show-pane').height();

    $('#queueButton').css({
      'transition': 'top 0.5s ease, left 0.5s ease, width 0.5s ease, height 0.5s ease', // or 'fixed' depending on the context
  });

    $('#queueButton').css({
      'position': 'absolute', // or 'fixed' depending on the context
      'top': panePos.top,
      'left': panePos.left,
      'width' : '88vw',
      'height' : '61vh',
      'border-radus' : '15px'
  });

    flip = false;
    selecting = true;
  }).on('mouseleave', '#slide-show-pane', function() {

    flip = true;
    selecting = false;
    $('#queueButton').css({
      'transition': '',
      width: "20vh",
      height: "20vh"
  });

    $(this).css('background-color', 'black');
  });
  

  $('body').on('mouseenter', '#selected-project-image', function() {
    flip = true;
    
    $('#slide-show-pane').css('background-color', 'black');
  }).on('mouseleave', '#selected-project-image', function() {
    flip = false;
    $("#queueButton").css({
      left: 0 + "px",
      top: 0 + "px"
    });
  });

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
            // background: "#e2e4e9",
            // i get the sense that this box-shadow isn't doing anything... not really sure why atm but should look ot fix this or remove.
            "box-shadow": "0px, 2px, 10px, rgba(5, 0, 56, 0.08)",
            // opacity: "0.2",
            // didn't do anything i don't think:
            position: "absolute",
            display: "block",
            "pointer-events": "none",
          });

          $('body').append(`
          <div id="slide-show-pane" style="opacity: 0;">
              <div class="pane-flex-grid">
                  <div class="col-left">
                      <h2 id="selected-pane-title">Agoro Landing Page</h2>
                      <p id="selected-pane-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                  <div class="col-right">
                      <div id="selected-project-image"></div>
                  </div>
              </div>
          </div>
      `);
      
      setTimeout(() => {
          $('#slide-show-pane').css('opacity', 1);
      }, 700);
      
      
      
          //HOW TO MAKE IT JUMP RIGHT AWAY???
        }
      );
    $("#mainButtonText").remove();
    $("#hoverBox").remove();
    flip = true;

    $(this).off('click');
  });
});
