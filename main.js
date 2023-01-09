let result = document.querySelector(".result")
let name = document.querySelector(".name")
let imageBox = document.querySelector(".imageBox")
let move = document.querySelector(".move")
let height = document.querySelector(".height")
let weight = document.querySelector(".weight")


let btn = document.querySelector(".btn")

async function getPoke(pokename){
    let url = `https://pokeapi.co/api/v2/pokemon/${pokename}`

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
       

            name.innerHTML = `<h1>${data.name}</h1>`
            imageBox.innerHTML = `<img src=${data.sprites.front_default} />`
            weight.innerHTML = `<h3>Weight: ${data.weight}</h3>`
            height.innerHTML = `<h3>Height: ${data.height}</h3>`
            move.innerHTML = `<p> ${data.moves[17].move.name}</p>
                                <p> ${data.moves[14].move.name}</p>
                                <p> ${data.moves[18].move.name}</p>
                                <p> ${data.moves[21].move.name}</p>`
        })

}


btn.addEventListener("click", () => {
    getPoke(prompt("enter pokename "))
})

