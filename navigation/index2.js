document.addEventListener("keydown", function(e) {
  l = document.activeElement.parentElement;
  // handling for change of menu when right arrow key is clicked
  if (e.keyCode === 39) {
    if (l.classList.contains("submenu_item")) {
      l = l.parentElement.parentElement;
    }
    if (l.nextElementSibling !== null) {
      r = l.nextElementSibling;
      r.firstElementChild.focus();
    }
  }

  // handling for change of menu when right arrow key is clicked
  if (e.keyCode === 37) {
    if (l.classList.contains("submenu_item")) {
      l = l.parentElement.parentElement;
    }
    if (l.previousElementSibling !== null) {
      r = l.previousElementSibling;
      r.firstElementChild.focus();
    }
  }
});
