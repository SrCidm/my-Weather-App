import { AKI_KEY } from "../routes/api/get-weather";

const FETCH_OPTION = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': AKI_KEY,
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

export async function getWeather(query = "Madrid") {
    const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`, FETCH_OPTION);
    const data = await response.json();
    const { location, current } = data;
    const { country, localtime, name } = location;
    const { condition, humidity, feelslike_c, temp_c, wind_kph, wind_dir, is_day } = current;
    const { icon, text } = condition;
    
    return {
        conditionIcon: icon,
        conditionText: text,
        country,
        localtime,
        name,
        humidity,
        isDay: is_day,
        feelsLike: feelslike_c,
        temperature: temp_c,
        windSpeed: wind_kph,
        windDir: wind_dir,
    };
}   
