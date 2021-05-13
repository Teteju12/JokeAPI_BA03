/*
function NextJoke(){
  GetJoke();
}
*/
const urlAPI = 'https://icanhazdadjoke.com/';
const html_text = document.getElementById('t_dadJoke');


async function GetJoke(){
  let joke = await fetch(urlAPI, {
    method: "GET",
    headers: {Accept: 'application/json'}
  })
  .then((response) => {
    if(response.status >= 200 && response.status < 400){
      response.json().then(data => {
        html_text.innerHTML = data.joke;
      });
    }
  })
  .catch((response)=>{
    console.error(response.status + " returned. Error fetching " + urlAPI);
  })

}
