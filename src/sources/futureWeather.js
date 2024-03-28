
const FETCH_FUTURE = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a4afd78930mshb2f60f33475b77cp120f72jsnd9c23b006499',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

export async function getFuture(query = "Madrid") {
    const response = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${query}&days=7`, FETCH_FUTURE);
    const result = await response.json();
    const { forecast } = result;
    const { forecastday } = forecast;

    // Crear un array para almacenar los resultados de cada día
    const allDaysData = [];

    // Iterar sobre cada elemento de forecastday
    for (let i = 0; i < forecastday.length; i++) {
        const dayData = forecastday[i];

        // Aquí puedes realizar cualquier procesamiento necesario con dayData

        // Agregar dayData al array de resultados
        allDaysData.push(dayData);
    }

    // Retornar el array con los datos de todos los días
    return allDaysData;
}