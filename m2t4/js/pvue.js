var pathname = window.location.pathname;
var url = "https://api.propublica.org/congress/v1/113/senate/members.json";
var datos=[];

/*
var url = "https:/pokeapi.co/api/v2/pokemon/1/";
if (pathname.includes('/senate')) {
  url = "https://api.propublica.org/congress/v1/113/senate/members.json"
} else if (pathname.includes('/house')) {
  url = "https://api.propublica.org/congress/v1/113/house/members.json"
}*/

console.log(url);
const pw = "vZNfxCfRP7nqVY41tNk6DG39jr7TdL8gkojxAkI8";

fetch(url, {
  method: 'GET',
  headers: new Headers({
    'X-API-Key': pw
  })
})
  .then(response => response.json())
  .then(data => {
    //console.log(data.results[0].members);
    datos= data.results[0].members;
    console.log(datos);
  })
  .catch(err => console.log(err))
  

  