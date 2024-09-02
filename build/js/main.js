const input = document.querySelector('#city-input');
const apiKey = 'ee9e741e1327a89ba8a2cc9e31fb0b17';
const mainDiv = document.querySelector('#main-div')
const myWeather = async ()=>{
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${input.value}`;
    const response = await fetch(apiUrl + `&appid=${apiKey}`);

    
    if (response.status !== 200){//or you can use if (response.status === 404)
        mainDiv.classList.add('hidden');
        alert('City not found');
        
    }
    else{

        const data = await response.json();
        document.querySelector('#city').innerHTML = data.name;
        document.querySelector('#degree').innerHTML = Math.round(data.main.temp)+'°c';
        document.querySelector('#wind-speed').innerHTML = data.wind.speed+'Km/h';
        document.querySelector('#humidity').innerHTML = data.main.humidity+'%';
        document.querySelector('#weather-image').src = `./img/${data.weather[0].main}.png`;
        mainDiv.classList.remove('hidden');
    }
    
    


}
const myForm = document.querySelector('#my-form');
myForm.addEventListener('submit', (event) =>{
    myWeather();
})
