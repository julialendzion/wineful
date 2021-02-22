const url = "https://kea21-6a0c.restdb.io/rest/wine?max=35";

//API key
//The API key
const options = {
    headers: {
        "x-apikey": "60339bce5ad3610fb5bb64e6",
    },
};

fetch(url, options)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        handleData(data);
    })
    function handleData(data){
        data.forEach(product);
    }
    function product(wine){
        console.log(wine);
    
        //grab template
        const template = document.querySelector("template").content;

        //clone it
        const clone = template.cloneNode(true);

        //change something
        clone.querySelector(".colour").textContent = wine.colour;
        clone.querySelector(".name").textContent = wine.name;

        //choose parent
        const parent = document.querySelector("main");

        //append
        parent.appendChild(clone);
    }
    
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}
function myFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show");
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
