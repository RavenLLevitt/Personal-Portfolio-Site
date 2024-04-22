// Text animation
// need to make it so stops when hovered, or maybe pulls up somthing like "explore"
const texts = ["Design", "Build", "Iterate"];
let index = 0;

function changeText() {
  if (!flip) {
    const queueText = document.getElementById("mainButtonText");
    const currentText = queueText.textContent;
    const nextText = texts[index];

    // Initialize temp as an empty string if currentText is empty or doesn't match nextText
    let temp =
      currentText.length === nextText.length && currentText !== nextText
        ? currentText
        : "";

    // Function to update the text letter by letter
    function updateText(i) {
      if (i < nextText.length) {
        temp = nextText.substring(0, i + 1) + (temp.substring(i + 1) || "");
        queueText.textContent = temp;
        setTimeout(() => updateText(i + 1), 100); // Adjust timing as needed
      } else if (i === nextText.length) {
        index = (index + 1) % texts.length; // Update the index for the next cycle
      }
    }

    // Start updating text
    if (!document.getElementById("queueButton").matches(":hover")) {
      updateText(0);
    }
  }
}

// Initial call and set interval for changing text
changeText();
setInterval(changeText, 1500); // Adjust the overall timing as needed
