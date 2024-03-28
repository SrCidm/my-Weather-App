<script>
    import { onMount } from 'svelte';
    import { getWeather } from "../sources/weather";
    import {getFuture} from "../sources/futureWeather"
    import WeatherFooter from "../components/weather-footer.svelte"
	import WeatherIcon from '../components/weather-icon.svelte';
    
    let weatherData;
    let weatherFuture;
    let query = "Madrid";

    onMount(async () => {
        weatherData = await getWeather();
        weatherFuture = await getFuture();
    });

    function getDayOfWeek(dateString) {
        const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        const date = new Date(dateString);
        const dayOfWeek = daysOfWeek[date.getDay()];
        return dayOfWeek;
    }

    async function searchWeather(){
        weatherData = await getWeather(query);
        weatherFuture = await getFuture(query);
    }
</script>

<style>
    section.prim{
        padding:20px;
    }
    h1 {
        font-weight: 400;
        color: #eee;
        text-transform: uppercase;
        padding:2px 0 1px 1px;
        margin-bottom: -30px;
    }
    h2{
        font-weight: 500;
        color: #eee;
        text-transform: uppercase;
        font-size: 120px;
        padding:2px 0 0 0;
    }
    h3{
        color: #eee;
        font-weight: 500;
        position: absolute;
        top: 260px;
        right: 30px;
        box-shadow: 0 0 0 ;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;

    }
    h4{
        color:#777;
    }
    input{
        margin-left: 80px;
        border-radius: 5px;
    }
    h6{
        text-align: center;
        font-size: 30px;
        margin: 10px 0 20px 0;
        font-weight: 1000;
        color: rgb(255, 0, 0);
        position: relative;
        top:50px;
        text-shadow:5px 5px 4px rgba(0, 0, 0, 1);

    }
    p{
        color: #eee;
        font-weight: 500;
        margin-left: 20px;
    }
    section.second{
        display: flex;
        margin-bottom: 110px;
        margin-left: 30px;

    }
    button{
        color: #333;
        border: 1px solid #eee;
        border-radius: 9px;
        cursor: pointer;
    }
    .container {
        background-image: url('/myWeather3.png'); /* Especifica la ruta de tu imagen aquí */
        background-size: 150px 100px; /* Ajusta el tamaño de la imagen para cubrir todo el contenedor */
        background-position: center; /* Centra la imagen dentro del contenedor */
        width: 100%; /* Ancho completo del contenedor */
        height: 100px; /* Altura del contenedor */
    }
</style>

{#if weatherData && weatherFuture}
<div class="s" style="cursor:default;">
        <div class="container">
            <h6>MyWeather App</h6>
        </div>
        <div>
            <input type="text" placeholder="Madrid" bind:value={query}>
            <button on:click={searchWeather}>Search</button>
        </div>
        <section class="prim">
            <h1>{`${weatherData.name}, ${weatherData.country}`}</h1>
            <h2> {weatherData.temperature}°</h2>
            <h3>{weatherData.conditionText}</h3>
            <h4>Wind: {weatherData.windSpeed}Km/h</h4>
            <WeatherIcon text={weatherData.conditionText} icon={weatherData.conditionIcon}/>
    </section>
    <section class="second">
        {#each weatherFuture as day}
            <div style="margin-right: 5px;border: 3px solid #eee;" >
                <p style="font-size:25px;">{getDayOfWeek(day.date)}</p>
                <p> Chance of rain: {day.day.daily_chance_of_rain}%</p>
                <p>temp:{day.day.avgtemp_c}°C</p>
                <img src={day.day.condition.icon} alt="Icono del clima" />
                <p>{day.day.condition.text}</p>
            </div>
        {/each}
    </section>
    <WeatherFooter Footer={weatherData} />
</div>    
    
{:else}
    <p style="font-size: 60px;text-transform: uppercase;">Loading...</p>
{/if}


    