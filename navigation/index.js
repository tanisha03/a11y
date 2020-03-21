a = document.querySelectorAll(".menu_link");
a.forEach(l => {
  if (l.nextElementSibling) {
    l.addEventListener("focus", function() {
      this.parentElement.classList.add("focus");
    });
    const submenu = l.nextElementSibling;
    const submenuLinks = submenu.querySelectorAll("a");
    const lastIndex = submenuLinks.length - 1;
    const lastLink = submenuLinks[lastIndex];

    lastLink.addEventListener("blur", function() {
      l.parentElement.classList.remove("focus");
    });
  }
});

document.addEventListener("keydown", function(e) {
  l = document.querySelector(".focus");
  if (e.keyCode === 39 && l.nextElementSibling !== null) {
    l.classList.remove("focus");
    r = l.nextElementSibling;
    r.firstElementChild.focus();
    r.classList.add("focus");
    console.log(r.firstElementChild);
  }
  if (e.keyCode === 37 && l.previousElementSibling !== null) {
    console.log(l);
    l.classList.remove("focus");
    r = l.previousElementSibling;
    console.log(r);
    r.firstElementChild.focus();
    r.classList.add("focus");
    console.log(r.firstElementChild);
  }
  if (e.shiftKey && e.keyCode === 9) {
    ele = document.activeElement.parentElement;
    console.log(ele);
    if (ele.previousElementSibling !== null) {
      if (ele.classList.contains("submenu_item")) {
        console.log(ele.previousElementSibling);
        ele.previousElementSibling.firstElementChild.blur();
      } else {
        console.log("hello");
        ele.classList.remove("focus");
        ele.previousElementSibling.classList.add("focus");
        ele.previousElementSibling.lastElementChild.focus();
      }
    }
  }
});
