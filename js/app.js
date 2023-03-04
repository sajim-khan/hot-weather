const API_KEY = `92e8c494b1bf47d0f1543bac58b5e624`; 

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => displayTemperatures(data));
}

const displayTemperatures = data => {
    document.getElementById('temperature').innerText = data.main.temp;
    //console.log(data.main.temp);
};

loadTemperature('dhaka')