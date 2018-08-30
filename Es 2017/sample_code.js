//write a function to retrive a blob of json
//make a ajax request - Use "fetch" function

//------------------------------------------------------

// function fetchAlbums() {
//   fetch('https://jsonplaceholder.typicode.com/albums')
//     .then(res => res.json())
//     .then(json => console.log(json));
// }

// fetchAlbums();

//------------------------------------------------------

//Refactor

//aSyncAwait
const URI = 'https://jsonplaceholder.typicode.com/albums'

// async function fetchAlbums() {

const fetchAlbums = async () => {
  const res = await fetch(`${URI}`);
  const json = await res.json()

  console.log(json);
}

fetchAlbums();