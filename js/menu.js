
// Navbar Animation

const menuNav = document.querySelector('.nav-menu');
const openIcon = document.querySelector('.js-menu-open');
const closeIcon = document.querySelector('.js-menu-close');

openIcon.addEventListener('click', function() {
    menuNav.classList.add('open');
});

closeIcon.addEventListener('click', function() {
    menuNav.classList.remove('open');
});



var menuContainer = document.querySelector('.nav-menu');

// Get all buttons with class="btn" inside the container
var menuItem = menuContainer.getElementsByClassName("menu-item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("menu-active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" menu-active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " menu-active";
  });
}