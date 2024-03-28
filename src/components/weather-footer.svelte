<script>
    export let Footer;
</script>    
<style scr={Footer}>
    footer{
        border: 2px solid #eee;
        padding: 12px 32px;
        width: 80%;
        margin: 0 auto;
        border-radius: 10px;
        display: flex;
        text-align: center;
        justify-content: space-evenly;
        position: relative;
        bottom: 60px;
        color: #eee;

    }
    span{
        display: block;
        font-weight: 700;
        font-size: 14px;
    }
    strong{
        color: #444;
        font-weight: 700;
    }
</style>

<footer>
    <div>
        <span>
            {Footer.humidity}%
        </span>
        <strong>
            Humidity
        </strong>
    </div>
    <div>
        <span>
            {Footer.windDir}
        </span>
        <strong>
            Wind Direction
        </strong>
    </div>
    <div>
        <span>
            {Footer.feelsLike}°C
        </span>
        <strong>
            Feels like
        </strong>
    </div>
</footer>
