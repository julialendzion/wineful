const url = "https://kea21-6a0c.restdb.io/rest/wine?max=35";

//API key
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
    }