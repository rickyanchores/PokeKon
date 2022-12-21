let result = document.querySelector(".result")
let name = document.querySelector(".name")
let imageBox = document.querySelector(".imageBox")
let btn = document.querySelector(".btn")

async function getPoke(pokename){
    let url = `https://pokeapi.co/api/v2/pokemon/${pokename}`

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            name.innerHTML = `<h1>${data.name}</h1>`
            imageBox.innerHTML = `<img src=${data.sprites.front_default} />`
        })
}


btn.addEventListener("click", () => {
    getPoke(prompt(""))
})
