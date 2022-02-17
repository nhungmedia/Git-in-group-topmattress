// 620cd6d634fd62156585865c
// https://hubemmd-34fa.restdb.io/rest/bed-fashion?max=20

const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("category");
const options = {
  headers: { "x-apikey": "620cd6d634fd62156585865c" },
};
const url = `https://hubemmd-34fa.restdb.io/rest/bed-fashion?max=5&category=${query}`;
// const url = "https://hubemmd-34fa.restdb.io/rest/bed-fashion?max=20" + query;

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    showProductlist(data);
  })
  .catch((e) => {
    console.error("An error occured:", e.message);
  });

function showProductlist(bedfashion) {
  bedfashion.forEach(showProduct);
  console.log("no");
}

function showProduct(product) {
  console.log("yes");

  document
    .querySelector(".a1")
    .setAttribute("href", `productlist.html?category=frames`);
  document
    .querySelector(".a2")
    .setAttribute("href", `productlist.html?category=frames_and_mattresses`);
  document
    .querySelector(".a3")
    .setAttribute("href", `productlist.html?category=mattresses`);
  document
    .querySelector(".a4")
    .setAttribute("href", `productlist.html?category=accessories`);
}

//      button           button             button
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

//      button           button             button
