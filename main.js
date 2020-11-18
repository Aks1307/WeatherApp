const api = {
    key:"df694c69e2fb3d857e9bd38cd12db6ff",
    baseurl : "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.input-box');
searchbox.addEventListener('keypress',runQuery);

function runQuery(event){
    if(event.keyCode==13){
        getResult(searchbox.value);
        console.log(searchbox.value);
    }
}
function getResult(query){
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather=>{
        return weather.json();
    }).then(changeValue);
}
function changeValue(weather){
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerHTML = `${weather.name},${weather.sys.country}`
    let date = document.querySelector('.location .date');
    var d = new Date();
    date.innerHTML = d.toString();
    let temp = document.querySelector('.present .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
    let wea = document.querySelector('.present .weather');
    wea.innerHTML = `${weather.weather[0].main}`;
    let range = document.querySelector('.present .range');
    range.innerHTML = `${Math.round(weather.main.temp_min)}°c/${Math.round(weather.main.temp_max)}°c`;


}
