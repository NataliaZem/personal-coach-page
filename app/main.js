// hamburger-button changes
let hamburgerChange = (x) => x.classList.toggle('change');

// menu  after click on hamburger-button
let menuShow = () => document.getElementById('menu').classList.toggle('show');
/*
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
  var openDropdown = dropdowns[i];
  if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
  }
  }
}
}
*/