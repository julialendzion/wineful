const url = `https://kea21-6a0c.restdb.io/rest/wine?max=35`;

// const url = "https://kea21-6a0c.restdb.io/rest/wine/" +id;

//API key
//The API key
const options = {
  headers: {
    "x-apikey": "60339bce5ad3610fb5bb64e6",
  },
};

// fetching data
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(wine) {
  console.log(wine);

  document.querySelector(".name").textContent = wine.name;
  document.querySelector(".brand").textContent = wine.brand;
  document.querySelector(
    ".image"
  ).src = `https://kea21-6a0c.restdb.io/media/${wine.bottle}`;
  clone.querySelector(".image").alt = wine.name;
}
