$(document).ready(function () {
    // Capture the original position of #selectorOne on page load or after position resets
    var originalTop = parseInt($('#selectorOne').css('top'), 10);

    // Setup mousedown event on the #selectorOne
    $('#selectorOne').mousedown(function (e) {
        var startTop = parseInt($('#selectorOne').css('top'), 10);

        $('#selectorOne').css({
            transition: "top 0s ease"
        });
        var startY = e.clientY;  // Start Y position of the mouse

        // Move the element with the mouse, but only within 100px above or below the original top
        $(document).mousemove(function (e) {
            var moveY = e.clientY - startY;  // Calculate movement
            var newPosition = startTop + moveY;

            // Constrain the movement within 100 pixels above or below the original position
            if (newPosition > originalTop + 100) {
                newPosition = originalTop + 100;
            } else if (newPosition < originalTop - 100) {
                newPosition = originalTop - 100;
            }

            $('#selectorOne').css({
                top: newPosition + "px"
            });
        });

        // Setup mouseup to finalize the position and remove the mousemove handler
        $(document).one('mouseup', function (e) {
            $(document).off('mousemove');  // Unbind the mousemove event
            var endY = e.clientY - startY;  // Total vertical movement
            $('#selectorOne').css({
                transition: "top 1s ease"
            });
            // Determine final position based on the drag ending vertical position
            if (endY > 50) {
                $('#selectorOne').css('top', (originalTop + 100) + 'px');  // Move to +100px
            } else if (endY < -50) {
                $('#selectorOne').css('top', (originalTop - 100) + 'px');  // Move to -100px
            } else {
                $('#selectorOne').css('top', originalTop + 'px');  // Reset to original top
            }
        });
    });
});
