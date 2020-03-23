document.addEventListener("keydown", function(e) {
  l = document.activeElement.parentElement;
  // handling for change of menu when right arrow key is clicked
  if (e.keyCode === 39) {
    if (l.classList.contains("submenu_item")) {
      //retrive the parent menu_item
      l = l.parentElement.parentElement;
    }
    if (l.nextElementSibling !== null) {
      r = l.nextElementSibling;
      //focus on the <a> of the next menu_item
      r.firstElementChild.focus();
    }
  }

  // handling for change of menu when right arrow key is clicked
  if (e.keyCode === 37) {
    if (l.classList.contains("submenu_item")) {
      //retrive the parent menu_item
      l = l.parentElement.parentElement;
    }
    if (l.previousElementSibling !== null) {
      r = l.previousElementSibling;
      //focus on the <a> of the previous menu_item
      r.firstElementChild.focus();
    }
  }
});
