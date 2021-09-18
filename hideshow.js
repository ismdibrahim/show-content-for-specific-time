document.addEventListener("DOMContentLoaded", () => {
  var getContentElement = document.querySelector(".invisible-area"); // your class name
  if (!getContentElement || getContentElement.length === 0) {
    return false;
  }

  getContentElement.style.cssText = `
  display:none;
  transition:all 500ms ease-in-out 0ms
  `;
  setTimeout(() => {
    getContentElement.style.cssText = `
    display:block;
    transition:all 500ms ease-in-out 0ms
    `;
  }, 1500000); // millisecond 
});