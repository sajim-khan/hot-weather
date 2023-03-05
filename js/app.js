const API_KEY = `92e8c494b1bf47d0f1543bac58b5e624`; 

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => displayTemperatures(data));
}

// display data
const displayTemperatures = data =>{
    // const temperature = document.getElementById('temperature')
    // temperature.innerText = data.main.temp
    console.log(data.weather[0].main);
    setInnerTextById('temperature', data.main.temp)
    setInnerTextById('weather', data.weather[0].main)
    
}

// function for setInnerText
const setInnerTextById = (id, text) => {
    const temperature = document.getElementById(id)
    temperature.innerText = text
}

document.getElementById('btn-search').addEventListener('click', function() {
     const searchField = document.getElementById('search-field');
     const city = searchField.value
     document.getElementById('city').innerText = city;
     loadTemperature(city)
})

loadTemperature('dhaka')


