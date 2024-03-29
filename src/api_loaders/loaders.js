const apiKey = "ecca310403b69a25dec9aadda8cc8bc0"

const apiHome = "https://api.openweathermap.org/data/3.0/onecall?"
async function updateWeather(lat, long){
let api_fetch = await fetch(`${apiHome}lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`);
let api_response = await api_fetch.json();
return api_response
}

async function weatherByDay(lat, long ,index){
    let api_fetch = await fetch(`${apiHome}lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`);
    let api_response = await api_fetch.json();
    let daily_cast = api_response.daily[index]
    return daily_cast
}

export {updateWeather, weatherByDay}