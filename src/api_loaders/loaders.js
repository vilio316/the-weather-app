const apiKey = "ecca310403b69a25dec9aadda8cc8bc0"
//apiFormat = https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

const apiHome = "https://api.openweathermap.org/data/3.0/onecall?"
async function updateWeather(lat, long){
let api_fetch = await fetch(`${apiHome}lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`);
let api_response = await api_fetch.json();
return api_response
}


export {updateWeather}