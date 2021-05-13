
const urlJokeAPI = 'https://icanhazdadjoke.com/';
const urlWeatherAPI = 'https://www.el-tiempo.net/api/json/v2/home'
const html_text = document.getElementById('t_dadJoke');
const html_weather = document.getElementById('t_WeatherReport');
let weathercity = "Barcelona";
GetLocalWeather();


async function GetJoke(){
  let joke = await fetch(urlJokeAPI, {
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
    console.error(response.status + " returned. Error fetching " + urlJokeAPI);
  });

}

async function GetLocalWeather(){
  let weather = await fetch(urlWeatherAPI)
  .then((response) => {
    response.json().then((data) =>{
      let cities = data.ciudades;
      for(var i = 0; i < cities.length; i++){
        if(cities[i].name == weathercity){
          html_weather.innerHTML = "today in " + cities[i].name + ": " + cities[i].stateSky.description;
        }
      }
    })
  })
  .catch((response)=>{
    console.error(response.status + " returned. Error fetching " + urlWeatherAPI);
  });
}
