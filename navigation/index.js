a = document.querySelectorAll(".menu_link");
a.forEach(l => {
  if (l.nextElementSibling) {
    l.addEventListener("focus", function() {
      // adding focus class to every menu_link when it is focused so that submenu is visible
      this.parentElement.classList.add("focus");
    });

    const submenu = l.nextElementSibling;
    const submenuLinks = submenu.querySelectorAll("a");
    const lastIndex = submenuLinks.length - 1;
    const lastLink = submenuLinks[lastIndex];

    // removing focus class when exiting the menu
    lastLink.addEventListener("blur", function() {
      l.parentElement.classList.remove("focus");
    });
  }
});

document.addEventListener("keydown", function(e) {
  l = document.querySelector(".focus");
  // handling for change of menu when right arrow key is clicked
  if (e.keyCode === 39 && l.nextElementSibling !== null) {
    l.classList.remove("focus");
    r = l.nextElementSibling;
    r.firstElementChild.focus();
    r.classList.add("focus");
  }

  // handling for change of menu when right left key is clicked
  if (e.keyCode === 37 && l.previousElementSibling !== null) {
    l.classList.remove("focus");
    r = l.previousElementSibling;
    r.firstElementChild.focus();
    r.classList.add("focus");
  }

  // handling for moving back of menu when Shift+Tab key is clicked
  if (e.shiftKey && e.keyCode === 9) {
    ele = document.activeElement.parentElement;
    if (ele.previousElementSibling !== null) {
      if (ele.classList.contains("menu_item")) {
        ele.classList.remove("focus");
        ele.previousElementSibling.classList.add("focus");
        // focussing on last option of previous menu
        ele.previousElementSibling.lastElementChild.focus();
      } else if (ele.classList.contains("submenu_item")) {
        // because Shift+Tab automatically removes focus class so preventing default behavious
        e.preventDefault();
        ele.previousElementSibling.firstElementChild.focus();
        ele.parentElement.parentElement.classList.add("focus");
      }
    }
  }
});
