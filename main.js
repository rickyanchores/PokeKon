let result = document.querySelector(".result")
let btn = document.querySelector(".btn")

async function getPoke(){
    let url = "https://pokeapi.co/api/v2/pokemon?limit=151"

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            result.innerHTML = `<h1>${data.results[1].name}</h1>`
        })
}

btn.addEventListener("click",getPoke)

