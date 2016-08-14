function toggleClassMenu() {
  myMenu.classList.add("menu--animatable");
  myMenu.classList.add("menu--visible");
  myMenu.addEventListener("transitionend", OnTransitionEnd, false);
}
function OnTransitionEnd() {
  myMenu.classList.remove("menu--animatable");
}
var myMenu = document.querySelector(".menu");
var oppMenu = document.querySelector(".menu-icon");
oppMenu.addEventListener("click", toggleClassMenu, false);
