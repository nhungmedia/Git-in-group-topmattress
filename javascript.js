window.addEventListener("load", start_screen);

function start_screen() {
  document.querySelector("#burger_1").addEventListener("click", open_menu);
  document.querySelector("#burgerMenu2").addEventListener("click", close_menu);
}

function open_menu() {
  document.querySelector("#burgerMenu2").classList.remove("hidden");
}
function close_menu() {
  document.querySelector("#burgerMenu2").classList.add("hidden");
}
