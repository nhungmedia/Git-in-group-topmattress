// 620cd6d634fd62156585865c
// https://hubemmd-34fa.restdb.io/rest/bed-fashion?max=20

// const query = urlParams.get("category");
const options = {
    headers: { "x-apikey": "620cd6d634fd62156585865c" },
  };
  const url = "https://hubemmd-34fa.restdb.io/rest/bed-fashion?max=20";
  // const url = "https://hubemmd-34fa.restdb.io/rest/bed-fashion?max=20" + query;
  

//fetch the data
  fetch (url)
      .then((res) => res.json())
      .then((data) => showProduct(data));
  
//populate the page
function showProduct(product) {
    console.log(product);
}      
 