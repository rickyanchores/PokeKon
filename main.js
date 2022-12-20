async function getPoke(){
    let url = "https://pokeapi.co/api/v2/pokemon?limit=151"

    fetch(url)
        .then((res) => res.json())
        .then((data) {
            console.log(data)
        })
}


getPoke();