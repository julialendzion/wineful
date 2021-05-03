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
  const imgurl = wine.img_url;
  document.querySelector(".image").src = imgurl;

  document.querySelector(".name").textContent = wine.name;
  document.querySelector(".brand").textContent = wine.brand;

  document.querySelector(".mood").textContent = wine.mood;
  document.querySelector(".food").textContent = wine.food;
  document.querySelector(".colour").textContent = wine.colour;

  if (wine.price == 4) {
    console.log("cheap");
    document.querySelector("#price5").classList.remove("dot");
    document.querySelector("#price5").classList.add("dotempty");
  } else {
    console.log("don'twork");
  }
  if (wine.price == 3) {
    console.log("cheap");
    document.querySelector("#price4").classList.remove("dot");
    document.querySelector("#price4").classList.add("dotempty");
    document.querySelector("#price5").classList.remove("dot");
    document.querySelector("#price5").classList.add("dotempty");
  } else {
    console.log("don'twork");
  }

  if (wine.price == 2) {
    console.log("cheap2");
    document.querySelector("#price3").classList.remove("dot");
    document.querySelector("#price3").classList.add("dotempty");
    document.querySelector("#price4").classList.remove("dot");
    document.querySelector("#price4").classList.add("dotempty");
    document.querySelector("#price5").classList.remove("dot");
    document.querySelector("#price5").classList.add("dotempty");
  } else {
    console.log("don'twork2");
  }

  if (wine.price == 1) {
    console.log("cheap2");
    document.querySelector("#price2").classList.remove("dot");
    document.querySelector("#price2").classList.add("dotempty");
    document.querySelector("#price3").classList.remove("dot");
    document.querySelector("#price3").classList.add("dotempty");
    document.querySelector("#price4").classList.remove("dot");
    document.querySelector("#price4").classList.add("dotempty");
    document.querySelector("#price5").classList.remove("dot");
    document.querySelector("#price5").classList.add("dotempty");
  } else {
    console.log("don'twork2");
  }

  if (wine.sweetness == 4) {
    console.log("cheap");
    document.querySelector("#sweet5").classList.remove("dot");
    document.querySelector("#sweet5").classList.add("dotempty");
  } else {
    console.log("don'twork");
  }

  if (wine.sweetness == 3) {
    console.log("cheap");
    document.querySelector("#sweet4").classList.remove("dot");
    document.querySelector("#sweet4").classList.add("dotempty");
    document.querySelector("#sweet5").classList.remove("dot");
    document.querySelector("#sweet5").classList.add("dotempty");
  } else {
    console.log("don'twork");
  }
  if (wine.sweetness == 2) {
    console.log("cheap");
    document.querySelector("#sweet3").classList.remove("dot");
    document.querySelector("#sweet3").classList.add("dotempty");
    document.querySelector("#sweet4").classList.remove("dot");
    document.querySelector("#sweet4").classList.add("dotempty");
    document.querySelector("#sweet5").classList.remove("dot");
    document.querySelector("#sweet5").classList.add("dotempty");
  } else {
    console.log("don'twork");
  }
  if (wine.sweetness == 1) {
    console.log("cheap");
    document.querySelector("#sweet2").classList.remove("dot");
    document.querySelector("#sweet2").classList.add("dotempty");
    document.querySelector("#sweet3").classList.remove("dot");
    document.querySelector("#sweet3").classList.add("dotempty");
    document.querySelector("#sweet4").classList.remove("dot");
    document.querySelector("#sweet4").classList.add("dotempty");
    document.querySelector("#sweet5").classList.remove("dot");
    document.querySelector("#sweet5").classList.add("dotempty");
  } else {
    console.log("don'twork");
  }

  if (wine.balance == 4) {
    console.log("cheap");
    document.querySelector("#soft5").classList.remove("dot");
    document.querySelector("#soft5").classList.add("dotempty");
  } else {
    console.log("don'twork");
  }

  if (wine.balance == 3) {
    console.log("cheap");
    document.querySelector("#soft5").classList.remove("dot");
    document.querySelector("#soft5").classList.add("dotempty");
    document.querySelector("#soft4").classList.remove("dot");
    document.querySelector("#soft4").classList.add("dotempty");
  } else {
    console.log("don'twork");
  }
  if (wine.balance == 2) {
    console.log("cheap");
    document.querySelector("#soft5").classList.remove("dot");
    document.querySelector("#soft5").classList.add("dotempty");
    document.querySelector("#soft4").classList.remove("dot");
    document.querySelector("#soft4").classList.add("dotempty");
    document.querySelector("#soft3").classList.remove("dot");
    document.querySelector("#soft3").classList.add("dotempty");
  } else {
    console.log("don'twork");
  }
  if (wine.balance == 1) {
    console.log("cheap");
    document.querySelector("#soft5").classList.remove("dot");
    document.querySelector("#soft5").classList.add("dotempty");
    document.querySelector("#soft4").classList.remove("dot");
    document.querySelector("#soft4").classList.add("dotempty");
    document.querySelector("#soft3").classList.remove("dot");
    document.querySelector("#soft3").classList.add("dotempty");
    document.querySelector("#soft2").classList.remove("dot");
    document.querySelector("#soft2").classList.add("dotempty");
  } else {
    console.log("don'twork");
  }
}
