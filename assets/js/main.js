const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(url)
.then((response) => response.json())
.then((jsonBody) => console.log(jsonBody))
.catch((error) => console.log(error))

// nas linas 5 a 8:
//fetch vai buscar a api via url, a function em seguida vai pegar essa api, retornando-a
//convertida em json para poder ser usada pelo JS. O catch em seguida já vai pegar o
// objeto convertido.