let key = "816d49e0c11341d184f69f877341e527";
let cardData = document.querySelector(".cardData");
let btn = document.getElementById("btn");
let inData = document.getElementById("inData");
let searchType = document.getElementById("type");


const getData = async (input) => {
    let res = await fetch (`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`);
    let jsonData = await res.json();
    console.log(jsonData.articles);

    searchType.innerText = "Search : " + input ;
    inData.value= ""
    cardData.innerHTML = "";

    jsonData.articles.forEach(function (article) {
        console.log(article);

        let divs = document.createElement("div")
        divs.classList.add("card");
        cardData.appendChild(divs);

    divs.innerHTML = `
    <img src="${article.urlToImage}" alt="">
    <h2>${article.title}</h2>
    <p>${article.description}</p>
    <h3> Read full article <a target = "_blank" href = "${article.url}">&#8594;</a></h3>

    `
    })

}

window.addEventListener("load",function(){
    getData("India")
})
btn.addEventListener("click",function(){
    let inputText = inData.value;
    getData(inputText);  
})