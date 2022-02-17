// 620cd6d634fd62156585865c
// https://hubemmd-34fa.restdb.io/rest/bed-fashion?max=20

const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("category");
const options = {
  headers: { "x-apikey": "620cd6d634fd62156585865c" },
};
const url = `https://hubemmd-34fa.restdb.io/rest/bed-fashion?category=` + query;
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
  bedfashion.forEach((el) => checkQuery(el));
}

function checkQuery(elem) {
  if (elem.category == query) {
    showProduct(elem);
  }
}

function showProduct(product) {
  // grab the template\
  const template = document.querySelector("#test123").content;
  // clone the template
  const copy = template.cloneNode(true);
  // change content

  // copy
  //   .querySelector(".item_productlist > a")
  //   .setAttribute("href", `product.html?id=${product.id}`);
  // copy.querySelector(".breadcrumb_3").textContent = query;
  copy.querySelector(".description h3").textContent = product.name;
  copy.querySelector(".description .price").textContent =
    "DKK " + product.price + ",-";

  copy.querySelector(
    ".smallProduct img"
  ).src = `http://hubkur.dk/images_mattress/${product._id}.jpg`;

  if (product.favourite == true) {
    copy.querySelector(".favourite").classList.remove("hidden");
  }

  // grab parent
  const parent = document.querySelector("#productlistGrid");
  // append
  parent.appendChild(copy);
}

// function showProduct(product) {
//   console.log(product);
//   // soldOut onSale
//   // grab the template
//   const template = document.querySelector("#productlistTemplate").content;
//   document.querySelector("#categoryH2").textContent = query;
//   document.querySelector(".liCurrent").textContent = query;
//   // document.querySelector(".littleHeadline p").textContent = `${groupedData} products found`;
//   // clone it
//   const copy = template.cloneNode(true);
//   // change image
//   copy.querySelector(
//     ".smallProduct img"
//   ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
//   copy.querySelector(".smallProduct img").alt = product.productdisplayname;
//   // change content
//   copy
//     .querySelector(".viewitem")
//     .setAttribute("href", `product.html?id=${product.id}`);
//   copy.querySelector(
//     "h3"
//   ).textContent = `${product.brandname} ${product.productdisplayname}`;

//   if (product.soldout) {
//     copy.querySelector("article").classList.add("soldOut");
//   }
//   if (product.discount) {
//     copy.querySelector("article").classList.add("onSale");
//     copy.querySelector(".discount").textContent = `${product.discount}%`;
//     copy.querySelector(".price").textContent = `DKK ${product.price},-`;
//     copy.querySelector(".discounted p").textContent = `DKK ${Math.floor(
//       product.price - product.price * (product.discount / 100)
//     )},-`;
//   }
//   // grab parent
//   const parent = document.querySelector("#categoryAccessories");
//   // append
//   parent.appendChild(copy);
// }

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
