const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url = `https://kea21-6a0c.restdb.io/rest/wine/` + id;
const mediaurl = "https://kea21-6a0c.restdb.io/media/";

//API key
//The API key
const options = {
  headers: {
    "x-apikey": "60339bce5ad3610fb5bb64e6",
  },
};

// fetching data
fetch(url, options)
  .then((res) => res.json())
  .then((data) => showProduct(data));

//changing the content- name, brand, image
function showProduct(wine) {
  console.log(wine);
  const imgurl = mediaurl + wine.bottle[0];
  document.querySelector(".name").textContent = wine.name;
  document.querySelector(".brand").textContent = wine.brand;
  document.querySelector(".image").src = imgurl;
  document.querySelector(".mood").textContent = wine.mood;
  document.querySelector(".food").textContent = wine.food;

  if ((wine.price = 3)) {
    console.log("cheap");
    document.querySelector("#price1").classList.add("dotempty");
    document.querySelector("#price2").classList.add("dotempty");
    document.querySelector("#price3").classList.add("dotempty");
  } else {
    console.log("don'twork");
  }

  if ((wine.price = 2)) {
    console.log("cheap2");
    document.querySelector("#price1").classList.add("dotempty");
    document.querySelector("#price2").classList.add("dotempty");
  } else {
    console.log("don'twork2");
  }
}

console.log("don't work");
