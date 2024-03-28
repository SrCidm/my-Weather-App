<div>
    <slot/>
</div>

<style>
    :global(body){
        font-family: system-ui, -apple-system, BlinkMacSystemFont,
            'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
            'Helvetica Neue', sans-serif;
        background: linear-gradient(#555, aqua);
        display: grid;
        place-content: center;
        margin: 0;
        min-height: 100vh;
    }
    :global(h1, h2, h3, h4, h5){
        margin:0;
    }
    :global(*,*::after,*::before){
        box-sizing: border-box;
    }

    div{
        aspect-ratio:9/16;
        max-width:100%;
        width: 400px;
        border: 1px solid #eee;
        display:block;
        box-shadow: 0 0 20px 1px rgb(250,250,250,0.2);
        border-radius: 8px;
        position: relative;
        background: #111;
    }
</style>