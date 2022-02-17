// 620cd6d634fd62156585865c
// https://hubemmd-34fa.restdb.io/rest/bed-fashion?max=20

const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("id");
const options = {
  headers: { "x-apikey": "620cd6d634fd62156585865c" },
};
const url = `https://hubemmd-34fa.restdb.io/rest/bed-fashion?max=20&q={"_id" : {"$in" : ["${query}"]}}`;
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
    data.forEach(showProduct);
    // showProduct(data);
  })
  .catch((e) => {
    console.error("An error occured:", e.message);
  });

function showProduct(product) {
  document.querySelector(
    " .breadcrumbs .breadcrumb_4"
  ).textContent = `${product.name}`;
  document.querySelector(".productText h3").textContent = product.name;
  document.querySelector(".productText .price").textContent =
    "DKK " + product.price + ",-";
  document.querySelector(
    "img"
  ).src = `http://hubkur.dk/images_mattress/${product._id}.jpg`;
  document.querySelector(".productText h3").textContent = product.name;
  if (product.favourite == true) {
    document.querySelector(".favourite").classList.remove("hidden");
  }
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
