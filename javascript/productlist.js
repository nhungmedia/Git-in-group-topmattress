// 620cd6d634fd62156585865c
// https://hubemmd-34fa.restdb.io/rest/bed-fashion?max=20

// const query = urlParams.get("category");
const options = {
  headers: { "x-apikey": "620cd6d634fd62156585865c" },
};
const url = "https://hubemmd-34fa.restdb.io/rest/bed-fashion?max=20";
// const url = "https://hubemmd-34fa.restdb.io/rest/bed-fashion?max=20" + query;

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    showProductlist(data);
  })
  .catch((e) => {
    console.error("An error occured:", e.message);
  });

function showProductlist(bedfashion) {
  bedfashion.forEach((bed) => {
    console.log(bed);
  });
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
