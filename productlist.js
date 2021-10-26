const url = "https://kea21-6a0c.restdb.io/rest/wine?max=35";

//API key
const mediaurl = "https://kea21-6a0c.restdb.io/media/";

//560263607f98025500000000?s=t
//The API key
const options = {
  headers: {
    "x-apikey": "6176a6518597142da1745a51",
  },
};

//chosing the filtering buttons, fetching
document.querySelector("#red").onclick = () => {
  filter("red");
};
document.querySelector("#white").onclick = () => {
  filter("white");
};

document.querySelector("#rose").onclick = () => {
  filter("rosé");
};
document.querySelector("#bubbles").onclick = () => {
  filter("bubbles");
};
document.querySelector("#aperitif").onclick = () => {
  filter("aperitif");
};
document.querySelector("#brunch").onclick = () => {
  filter("brunch");
};

document.querySelector("#dinner").onclick = () => {
  filter("dinner");
};
document.querySelector("#celebration").onclick = () => {
  filter("celebration");
};
document.querySelector("#cozy").onclick = () => {
  filter("cozy");
};
document.querySelector("#fakta").onclick = () => {
  filter("Fakta");
};
document.querySelector("#fotex").onclick = () => {
  filter("Føtex");
};
document.querySelector("#lidl").onclick = () => {
  filter("Lidl");
};
document.querySelector("#netto").onclick = () => {
  filter("Netto");
};
document.querySelector("#rema1000").onclick = () => {
  filter("Rema 1000");
};
document.querySelector("#highprice").onclick = () => {
  sort("price");
};
document.querySelector("#sweetest").onclick = () => {
  sort("sweetness");
};
document.querySelector("#lowprice").onclick = () => {
  sorting("price");
};
//filer function- changing the url
function filter(filter_type) {
  console.log("filering", filter_type);
  document.querySelector("main").innerHTML = "";
  fetch(`https://kea21-6a0c.restdb.io/rest/wine?max=35&filter=${filter_type}`, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      handleData(data);
    });
}

function sort(sort_type) {
  console.log("sorting", sort_type);
  document.querySelector("main").innerHTML = "";
  fetch(`https://kea21-6a0c.restdb.io/rest/wine?max=35&dir=-1&sort=${sort_type}`, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      handleData(data);
    });
}

function sorting(sort_type) {
  console.log("sorting", sort_type);
  document.querySelector("main").innerHTML = "";
  fetch(`https://kea21-6a0c.restdb.io/rest/wine?max=35&sort=${sort_type}`, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      handleData(data);
    });
}

fetch(url, options)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    handleData(data);
  });
function handleData(data) {
  console.log("data", data);
  data.forEach(product);
}
function product(wine) {
  console.log(wine);

  //grab template
  const template = document.querySelector("template").content;

  //clone it
  const clone = template.cloneNode(true);

  //change something
  clone.querySelector(".colour").textContent = wine.colour;
  clone.querySelector("a").href = `product.html?id=${wine._id}`;

  //changing the image
  const imgurl = wine.img_url;
  clone.querySelector(".image").src = imgurl;
  console.log(imgurl);

  clone.querySelector(".name").textContent = wine.name;

  //choose parent
  const parent = document.querySelector("main");

  //append
  parent.appendChild(clone);
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.querySelector("#arrow1").classList.toggle("rotate");
  document.querySelector("#arrow1").classList.toggle("rotate2");
}
function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
  document.querySelector("#arrow2").classList.toggle("rotate");
  document.querySelector("#arrow2").classList.toggle("rotate2");
}
function myFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show");
  document.querySelector("#arrow3").classList.toggle("rotate");
  document.querySelector("#arrow3").classList.toggle("rotate2");
}
function myFunction4() {
  document.getElementById("myDropdown4").classList.toggle("show");
  document.querySelector("#arrow4").classList.toggle("rotate");
  document.querySelector("#arrow4").classList.toggle("rotate2");
}
