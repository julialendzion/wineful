const url = "https://kea21-6a0c.restdb.io/rest/wine?max=35";

//API key
const mediaurl = "https://kea21-6a0c.restdb.io/media/";

//560263607f98025500000000?s=t
//The API key
const options = {
  headers: {
    "x-apikey": "60339bce5ad3610fb5bb64e6",
  },
};

fetch(url, options)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    handleData(data);
  });
function handleData(data) {
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
  const imgurl = mediaurl + wine.bottle[0];
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

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches("#icon")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
window.onclick = function (event) {
  if (!event.target.matches("#icon2")) {
    var dropdowns = document.getElementsByClassName("dropdown-content2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
